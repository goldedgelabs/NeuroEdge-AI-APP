'use client'
import React from 'react'
import { useChatStore } from '@/store/chat'
import MessageInput from './MessageInput'
import MessageBubble from './MessageBubble'

export default function ChatWindow(){
  const { messages } = useChatStore()
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(m=> <MessageBubble key={m.id} m={m} />)}
      </div>
      <div className="p-4 border-t"><MessageInput /></div>
    </div>
  )
}
