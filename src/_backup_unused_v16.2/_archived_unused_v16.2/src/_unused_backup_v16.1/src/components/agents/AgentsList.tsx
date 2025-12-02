'use client';
import React from 'react';

export default function AgentsList() {
  const agents = ['default','assistant-1','assistant-2'];
  return (
    <div className="p-4">
      <h3 className="font-semibold">Agents</h3>
      <ul>
        {agents.map(a=> <li key={a} className="py-2">{a}</li>)}
      </ul>
    </div>
  )
}
