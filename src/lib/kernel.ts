// src/lib/kernel.ts

export type KernelPayload = {
  type?: string;
  generate?: boolean;
  [key: string]: any;
};

export type KernelResponse = {
  backend: "ts" | "py" | "go";
  json: any;
};

class Kernel {
  private tsBase = process.env.NEXT_PUBLIC_TS_BACKEND_URL || "";
  private pyBase = process.env.NEXT_PUBLIC_PY_BACKEND_URL || "";
  private goBase = process.env.NEXT_PUBLIC_GO_BACKEND_URL || "";

  private queue: KernelPayload[] = [];
  private isProcessing = false;

  private chooseBackend(payload: KernelPayload): "ts" | "py" | "go" {
    if (payload?.type === "audio") return "py";
    if (payload?.generate) return "go";
    return "ts";
  }

  private async request(backend: string, payload: KernelPayload) {
    let url = "";

    if (backend === "ts") url = `${this.tsBase}/api/chat/send`;
    if (backend === "py") url = `${this.pyBase}/api/audio/transcribe`;
    if (backend === "go") url = `${this.goBase}/api/generate`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return res.json();
  }

  private async processQueue() {
    if (this.isProcessing) return;
    this.isProcessing = true;

    while (this.queue.length > 0) {
      const payload = this.queue[0];
      const backend = this.chooseBackend(payload);

      try {
        const json = await this.request(backend, payload);
        payload._resolve?.({ backend, json });
      } catch (err) {
        // retry fallback → TS backend
        if (backend !== "ts" && this.tsBase) {
          try {
            const json = await this.request("ts", payload);
            payload._resolve?.({ backend: "ts", json });
          } catch (e2) {
            payload._reject?.(e2);
          }
        } else {
          payload._reject?.(err);
        }
      }

      this.queue.shift();
    }

    this.isProcessing = false;
  }

  send(payload: KernelPayload): Promise<KernelResponse> {
    return new Promise((resolve, reject) => {
      this.queue.push({ ...payload, _resolve: resolve, _reject: reject });
      this.processQueue();
    });
  }

  /**
   * Convert HTTP → WS for live chat sessions
   */
  wsFor(conversationId: string) {
    return this.tsBase.replace(/^http/, "ws") + `/ws/chat/${conversationId}`;
  }
}

const kernel = new Kernel();
export default kernel;
