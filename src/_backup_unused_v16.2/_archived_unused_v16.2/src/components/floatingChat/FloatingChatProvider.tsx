'use client';
import React, { useState, useEffect, useRef } from 'react';
import FloatingChatButton from './FloatingChatButton';
import KeyboardHelp from './KeyboardHelp';
import FloatingChatWindow from './FloatingChatWindow';
import { useChatStore } from '@/store/chat';
import { WSClient } from '@/utils/ws-client';

export default function FloatingChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const convIdRef = useRef<string | null>(null);
  const wsRef = useRef<WSClient | null>(null);
  const createConversation = useChatStore(s => s.createConversation);

  useEffect(() => {
    // create or reuse conversation id
    const id = createConversation('NeuroEdge Assistant');
    convIdRef.current = id;
  }, [createConversation]);

  useEffect(() => {
    // keyboard shortcut Ctrl/Meta+K to toggle
    const onKey = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey;
      if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(v => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    const onEsc = (e:KeyboardEvent)=>{ if(e.key==='Escape') setOpen(false); if(e.key==='?') setHelpOpen(v=>!v); };
    window.addEventListener('keydown', onEsc);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('keydown', onEsc); };
  }, []);

  useEffect(() => {
    // instantiate WS client when open
    if (!convIdRef.current) return;
    const base = process.env.NEXT_PUBLIC_TS_BACKEND_URL;
    if (!base) return;
    const wsUrl = base.replace(/^http/, 'ws').replace(/\/$/, '') + '/ws/chat/' + convIdRef.current;
    try {
      wsRef.current = new WSClient(wsUrl);
      wsRef.current.on('message', (data: unknown) => {
        // handle chunked streaming and full messages
        if (data?.type === 'chunk' && data.chunk) {
          import('@/store/chat').then(m => m.useChatStore.getState().appendChunk(convIdRef.current!, data.chunk));
        } else if (data?.type === 'message' && data.text) {
          import('@/store/chat').then(m => {
            const s = m.useChatStore.getState();
            s.messages.push({ id: crypto.randomUUID(), conversationId: convIdRef.current!, sender: 'agent', text: data.text, timestamp: Date.now() } as any);
          });
        }
      });
      wsRef.current.on('open', () => {});
      wsRef.current.on('error', (e: unknown) => console.error('WS error', e));
    } catch (e) {
      console.error('WS create error', e);
    }
    return () => {
      try { wsRef.current?.close(); } catch {}
      wsRef.current = null;
    };
  }, [open]);

  return (
    <div>
      {children}
      <FloatingChatButton onClick={toggle} open={open} />
      <KeyboardHelp open={helpOpen} onClose={()=>setHelpOpen(false)} />
      <FloatingChatWindow open={open} onClose={()=>setOpen(false)} wsClient={wsRef.current} />
    </div>
  );
}
