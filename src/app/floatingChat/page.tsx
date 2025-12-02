import React from 'react';
import FloatingChatProvider from '@/components/floatingChat/FloatingChatProvider';

export default function FloatingChatPage() {
  return (
    <FloatingChatProvider>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Floating NeuroEdge Assistant</h1>
        <p className="mt-2">This page demonstrates the global floating assistant; it is normally available across all pages.</p>
      </div>
    </FloatingChatProvider>
  )
}
