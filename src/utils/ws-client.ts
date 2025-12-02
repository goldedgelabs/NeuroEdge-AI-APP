import { EventEmitter } from 'events';

type Msg = { type: string; [k: string]: unknown };

export class WSClient extends EventEmitter {
  url: string;
  ws: WebSocket | null = null;
  reconnectDelay = 1000;
  heartbeatInterval: unknown = null;

  constructor(url: string) {
    super();
    this.url = url;
    this.connect();
  }

  connect() {
    try {
      this.ws = new WebSocket(this.url);
      this.ws.onopen = () => {
        this.emit('open');
        this.startHeartbeat();
      };
      this.ws.onmessage = (ev) => {
        try {
          const data = JSON.parse(ev.data);
          this.emit('message', data);
        } catch (e) {
          this.emit('raw', ev.data);
        }
      };
      this.ws.onclose = () => {
        this.emit('close');
        this.stopHeartbeat();
        setTimeout(() => this.connect(), this.reconnectDelay);
      };
      this.ws.onerror = (e) => {
        this.emit('error', e);
        try { this.ws?.close(); } catch {}
      };
    } catch (e) {
      this.emit('error', e);
      setTimeout(() => this.connect(), this.reconnectDelay);
    }
  }

  startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({ type: 'ping' }));
      }
    }, 30000);
  }

  stopHeartbeat() {
    if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
    this.heartbeatInterval = null;
  }

  send(obj: Msg) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(obj));
    } else {
      this.once('open', () => this.send(obj));
    }
  }

  close() {
    this.stopHeartbeat();
    this.ws?.close();
  }
}
