/**
 * Simple WebSocket client with reconnect and heartbeat.
 * Emits callbacks: onopen, onmessage(obj), onclose, onerror
 */
export class WSClient {
  private url: string
  private ws: WebSocket | null = null
  private reconnectMs = 1000
  private pingInterval = 25000
  private pingTimer: any = null
  onopen: (() => void) | null = null
  onmessage: ((data: any) => void) | null = null
  onclose: (() => void) | null = null
  onerror: ((err: any) => void) | null = null

  constructor(url: string) {
    this.url = url
    this.connect()
  }

  connect() {
    try {
      this.ws = new WebSocket(this.url)
      this.ws.onopen = () => {
        this.reconnectMs = 1000
        this.startHeartbeat()
        this.onopen?.()
      }
      this.ws.onmessage = (ev) => {
        try { const d = JSON.parse(ev.data); this.onmessage?.(d) } catch(e) { this.onmessage?.(ev.data) }
      }
      this.ws.onclose = () => {
        this.stopHeartbeat()
        this.onclose?.()
        setTimeout(()=> this.connect(), this.reconnectMs)
        this.reconnectMs = Math.min(30000, this.reconnectMs * 1.5)
      }
      this.ws.onerror = (e) => { this.onerror?.(e) }
    } catch(e) {
      setTimeout(()=> this.connect(), this.reconnectMs)
    }
  }

  startHeartbeat() {
    this.stopHeartbeat()
    this.pingTimer = setInterval(()=>{
      try { this.ws?.send(JSON.stringify({type:'ping'})) } catch(e) {}
    }, this.pingInterval)
  }
  stopHeartbeat() { if (this.pingTimer) clearInterval(this.pingTimer) }

  send(obj: any) { try { this.ws?.send(JSON.stringify(obj)) } catch(e) {} }
  close() { this.stopHeartbeat(); this.ws?.close(); this.ws = null }
}
