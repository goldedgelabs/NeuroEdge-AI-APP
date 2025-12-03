import { EventEmitter } from 'events';
export class Kernel extends EventEmitter {
  tsBase = process.env.NEXT_PUBLIC_TS_BACKEND_URL || '';
  pyBase = process.env.NEXT_PUBLIC_PY_BACKEND_URL || '';
  goBase = process.env.NEXT_PUBLIC_GO_BACKEND_URL || '';
  queue: any[] = [];
  cache: Map<string, any> = new Map();
  chooseBackend(payload:any){ if(payload?.type==='audio') return 'py'; if(payload?.generate) return 'go'; return 'ts'; }
  async doSend(payload:any){ const backend = this.chooseBackend(payload); let url=''; if(backend==='ts') url=this.tsBase+'/api/chat/send'; if(backend==='py') url=this.pyBase+'/api/audio/transcribe'; if(backend==='go') url=this.goBase+'/api/generate'; try{ const res = await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); const json = await res.json(); return { backend, json }; }catch(e){ if(backend!=='ts' && this.tsBase){ const res = await fetch(this.tsBase+'/api/chat/send',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); const json = await res.json(); return { backend:'ts', json }; } throw e; } }
  async send(payload:any){ this.queue.push(payload); if(this.queue.length>1) return { queued:true }; const processNext = async ()=>{ const p = this.queue[0]; try{ const r = await this.doSend(p); this.emit('response', r); }catch(e){ this.emit('error', e); } this.queue.shift(); if(this.queue.length) await processNext(); }; await processNext(); return { ok:true }; }
  wsForConversation(conversationId:string){ return this.tsBase.replace(/^http/,'ws') + '/ws/chat/' + conversationId; }
}
const kernel = new Kernel();
export default kernel;
