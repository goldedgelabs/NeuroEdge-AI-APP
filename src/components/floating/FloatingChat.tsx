'use client'
import React from 'react'
import { useUIStore } from '@/store/ui'
export default function FloatingChat(){
  const open = useUIStore(s=>s.floatingOpen)
  if(!open) return null
  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white border rounded shadow-lg p-2">Floating chat</div>
  )
}
