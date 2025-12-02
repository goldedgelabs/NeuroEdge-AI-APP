'use client'
import React from 'react'
import { useAgentsStore } from '@/store/agents'
export default function AgentSelector(){ 
  const agents = useAgentsStore(s=>s.agents)
  return <select className="border p-1">{agents.map((a:any)=>(<option key={a.id}>{a.name}</option>))}</select>
}
