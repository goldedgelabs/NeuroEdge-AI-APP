'use client';
import React from 'react';
import { useChatStore } from '@/store/chat';

export default function AgentSelector() {
  const selected = useChatStore(s => s.selectedAgent);
  const set = useChatStore(s => s.selectedAgent);
  return (
    <div className="p-2">
      <label className="text-sm">Agent</label>
      <select className="w-full border mt-1 p-2 rounded">
        <option>default</option>
        <option>assistant-1</option>
      </select>
    </div>
  )
}
