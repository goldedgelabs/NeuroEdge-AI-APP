import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const actions = [
  { icon: '💡', label: 'Generate Ideas', prompt: 'Give me creative ideas for…' },
  { icon: '📝', label: 'Summarize & Simplify', prompt: 'Summarize this clearly…' },
  { icon: '✨', label: 'Create Something New', prompt: 'Create something unique…' },
  { icon: '✍️', label: 'Write & Refine', prompt: 'Rewrite this text better…' },
  { icon: '🧠', label: 'Get Smart Advice', prompt: 'Give me advice about…' },
  { icon: '📅', label: 'Plan & Organize', prompt: 'Create a plan for…' },
  { icon: '💻', label: 'Build with Code', prompt: 'Write code for…' },
  { icon: '🔍', label: 'Analyze & Predict', prompt: 'Analyze this for me…' },
  { icon: '🖼', label: 'Understand Images', prompt: 'Explain what’s in this image…' },
  { icon: '🌐', label: 'Translate & Explore', prompt: 'Translate this into…' },
];
export default function ActionRibbon({onSelect}){
  const [expanded,setExpanded]=useState(false);
  const navigate = useNavigate();
  const visible = expanded? actions: actions.slice(0,4);
  return (<div className='action-ribbon'><div>{visible.map((a,i)=> <button key={i} className='action-btn' onClick={()=>{ onSelect?.(a.prompt); navigate('/chats'); }}>{a.icon} {a.label}</button>)}</div><button onClick={()=> setExpanded(e=>!e)} className='btn' style={{marginLeft:6}}>{expanded? 'Less ▴':'More ▾'}</button></div>)
}
