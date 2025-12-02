'use client'
import React from 'react'
import { useAgentsStore } from '@/store/agents'
export default function AgentsPanel(){
  const agents = useAgentsStore(s=>s.agents)
  return (
    <div>
      <h3 className="font-bold">Agents</h3>
      <ul>{agents.map((a:any)=>(<li key={a.id}>{a.name}</li>))}</ul>
    </div>
  )
}
