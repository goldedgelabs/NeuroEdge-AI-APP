import { motion } from 'framer-motion';
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useChatStore } from '@/store/chat';
import Button from '@/components/ui/Button';
import PermissionModal from './PermissionModal';

export default function FloatingChatWindow({ open, onClose, wsClient }: unknown) {
  const messages = useChatStore(s => s.messages);
  const sendMessage = useChatStore(s => s.sendMessage);
  const appendChunk = useChatStore(s => s.appendChunk);
  const [value, setValue] = useState('');
  const ref = useRef<HTMLDivElement|null>(null);

  const [permOpen, setPermOpen] = useState(false);

  useEffect(()=>{ const onKey = (e:KeyboardEvent) => { if(e.key==='Escape') onClose(); if(e.key==='Enter' && (document.activeElement && (document.activeElement as HTMLElement).tagName==='INPUT')) { onSend(); } }; window.addEventListener('keydown', onKey); return ()=>window.removeEventListener('keydown', onKey); },[]);
  useEffect(()=>{
    if(open) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  },[open,messages.length]);

  const onSend = async ()=>{
    if(!value) return;
    await sendMessage(value);
    setValue('');
  };

  const scanPageConfirmed = async () => {
    setPermOpen(false);
    try {
      const text = document.body.innerText || '';
      await fetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversationId: undefined, text: `[PAGE_SCAN]\n${text}` })
      });
      alert('Page scanned and sent to NeuroEdge assistant.');
    } catch (e) {
      console.error(e);
      alert('Scan failed: ' + String(e));
    }
  };

  const openScanModal = () => setPermOpen(true);

  if(!open) return null;
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="">
      
    <div className="fixed bottom-24 right-6 z-50 w-96 max-h-[70vh] bg-white dark:bg-gray-900 border rounded-lg shadow-xl flex flex-col">
      <PermissionModal open={permOpen} onClose={()=>setPermOpen(false)} onConfirm={scanPageConfirmed} />
      <div className="p-3 border-b flex items-center justify-between">
        <div className="font-semibold">NeuroEdge Assistant</div>
        <div className="flex gap-2">
          <Button onClick={openScanModal}>Scan page</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
      <div className="p-3 overflow-auto flex-1" style={{minHeight: 150}}>
        <div ref={ref}>
          {messages.slice(-50).map(m=> (
            <div key={m.id} className={m.sender==='user' ? 'text-right' : 'text-left' }>
              <div className={"inline-block p-2 my-2 rounded " + (m.sender==='user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800') }>
                <div style={{whiteSpace:'pre-wrap'}}>{m.text || (m.chunks ? m.chunks.join('') : '')}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 border-t flex gap-2">
        <input className="flex-1 border rounded px-2 py-1" value={value} onChange={e=>setValue(e.target.value)} placeholder="Ask NeuroEdge..." />
        <Button onClick={onSend}>Send</Button>
      </div>
        </motion.div>
  )
}
