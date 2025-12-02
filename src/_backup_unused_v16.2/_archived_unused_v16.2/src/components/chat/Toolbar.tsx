'use client';
import React, { useState } from 'react';
import { useChatStore } from '@/store/chat';
import Button from '@/components/ui/Button';

export default function Toolbar({ wsClient }: unknown) {
  const [value, setValue] = useState('');
  const sendMessage = useChatStore(s => s.sendMessage);
  const onSend = async () => {
    if (!value) return;
    await sendMessage(value);
    setValue('');
  };
  return (
    <div className="p-4 border-t flex gap-2">
      <input value={value} onChange={e=>setValue(e.target.value)} className="flex-1 border px-2 py-1 rounded" />
      <Button onClick={onSend}>Send</Button>
    </div>
  )
}
