'use client';
import React, { useEffect, useRef, useState } from 'react';
import MessageList from './MessageList';
import Toolbar from './Toolbar';
import { useChatStore } from '@/store/chat';
import { WSClient } from '@/utils/ws-client';

export default function ChatLayout() {
  const createConversation = useChatStore(s => s.createConversation);
  const active = useChatStore(s => s.activeConversationId);
  const setAgent = useChatStore(s => s.selectedAgent);
  const [wsClient, setWsClient] = useState<WSClient | null>(null);
  const convIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!active) {
      convIdRef.current = createConversation('Welcome');
    } else {
      convIdRef.current = active;
    }
  }, [active, createConversation]);

  useEffect(() => {
    // connect WS when conversation active
    if (!convIdRef.current) return;
    const base = process.env.NEXT_PUBLIC_TS_BACKEND_URL;
    if (!base) return;
    const ws = new WSClient(base.replace(/^http/, 'ws') + '/ws/chat/' + convIdRef.current);
    ws.on('message', (data: unknown) => {
      if (data.type === 'chunk') {
        // append chunk to conversation
        import('@/store/chat').then(m => m.useChatStore.getState().appendChunk(convIdRef.current!, data.chunk));
      }
      if (data.type === 'message') {
        // full message
        import('@/store/chat').then(m => m.useChatStore.getState().createConversation);
      }
    });
    setWsClient(ws);
    return () => ws.close();
  }, []);

  return (
    <div className="flex h-screen">
      <aside className="w-72 border-r p-4">Sidebar - Conversations</aside>
      <section className="flex-1 flex flex-col">
        <MessageList />
        <Toolbar wsClient={wsClient} />
      </section>
    </div>
  );
}
