'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'
export default function MessageBubble({ m }: { m: any }) {
  const cls = m.role === 'user' ? 'bg-sky-100 self-end' : 'bg-gray-100 self-start'
  return (
    <div className={`p-3 rounded max-w-[70%] ${cls}`}>
      <div className="text-sm text-slate-700"><ReactMarkdown>{m.text}</ReactMarkdown></div>
      <div className="text-xs text-slate-500 mt-2">{new Date(m.createdAt).toLocaleTimeString()}</div>
    </div>
  )
}
