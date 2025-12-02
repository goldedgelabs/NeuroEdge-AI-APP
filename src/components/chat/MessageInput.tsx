'use client'
import React, { useState } from 'react'
import { useChatStore } from '@/store/chat'
import { uploadFile } from '@/utils/uploads'

export default function MessageInput(){
  const [text,setText]=useState('')
  const send = useChatStore(s=>s.sendMessage)
  async function onFile(f: File | null){
    if(!f) return
    const res = await uploadFile(f)
    console.log('uploaded',res)
  }
  return (
    <div className="flex gap-2" role="form" aria-label="message input">
      <input aria-label="message" value={text} onChange={e=>setText(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="Say something..." />
      <input aria-label="attach file" type="file" onChange={e=>onFile(e.target.files?.[0]||null)} />
      <button aria-label="send" onClick={()=>{ if(text.trim()){ send(text); setText('') } }} className="px-4 py-2 bg-sky-500 text-white rounded">Send</button>
    </div>
  )
}
