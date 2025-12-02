'use client'
import React from 'react'
import { useUIStore } from '@/store/ui'
import { Sun, Moon } from 'lucide-react'
export default function Topbar(){ 
  const setDark = useUIStore(s=>s.setDark)
  return (
    <div className="p-4 border-b flex items-center justify-between">
      <div className="font-bold">NeuroEdge</div>
      <div className="flex items-center gap-2">
        <button aria-label="toggle theme" onClick={()=>setDark(true)}><Moon /></button>
        <button aria-label="toggle theme" onClick={()=>setDark(false)}><Sun /></button>
      </div>
    </div>
  )
}
