'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function MessageItem({ message }: unknown) {
  const text = message.text || (message.chunks ? message.chunks.join('') : '');
  return (
    <div className={'mb-4 ' + (message.sender === 'user' ? 'text-right' : 'text-left')}>
      <div className={'inline-block p-3 rounded ' + (message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-800')}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  )
}
