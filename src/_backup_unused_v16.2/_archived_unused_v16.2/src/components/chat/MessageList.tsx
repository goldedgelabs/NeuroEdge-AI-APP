'use client';
import React from 'react';
import { useChatStore } from '@/store/chat';
import MessageItem from './MessageItem';

export default function MessageList() {
  const messages = useChatStore(s => s.messages);
  return (
    <div className="flex-1 overflow-auto p-4">
      {messages.map(m => <MessageItem key={m.id} message={m} />)}
    </div>
  )
}
