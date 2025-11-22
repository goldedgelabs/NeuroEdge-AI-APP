import React, { useState } from 'react';
import PremiumModal from '../premium/PremiumModal';
const allItems = [
  { label: 'Generate Ideas', emoji: '💡', id:'ideas', premium:false },
  { label: 'Summarize & Simplify', emoji: '📝', id:'summarize', premium:false },
  { label: 'Create Something New', emoji: '✨', id:'create', premium:true },
  { label: 'Write & Refine', emoji: '✍️', id:'write', premium:false },
  { label: 'Get Smart Advice', emoji: '🧠', id:'advice', premium:true },
  { label: 'Plan & Organize', emoji: '📅', id:'plan', premium:true },
  { label: 'Build with Code', emoji: '💻', id:'code', premium:true },
  { label: 'Analyze & Predict', emoji: '🔍', id:'analyze', premium:true },
  { label: 'Understand Images', emoji: '🖼️', id:'images', premium:true },
  { label: 'Translate & Explore', emoji: '🌐', id:'translate', premium:false }
];
export default function MenuButtons(){ const [showAll,setShowAll]=useState(false); const [open,setOpen]=useState(false); const visible = showAll? allItems: allItems.slice(0,5);
  return (<div><div className='menu-grid'>{visible.map(i=> <button key={i.id} className='action-btn'>{i.emoji} {i.label} {i.premium? '🔒':''}</button>)}<button onClick={()=> setShowAll(s=>!s)} className='action-btn'>{showAll? 'Less ▴':'More ▾'}</button></div><PremiumModal open={open} onClose={()=> setOpen(false)} /></div>)
}
