'use client';
import React, { useState } from 'react';
import FloatingChatButton from './FloatingChatButton';
import FloatingChatWindow from './FloatingChatWindow';
export default function FloatingChatProvider({ children }: { children: React.ReactNode }){
  const [open,setOpen] = useState(false);
  return (<div>{children}<FloatingChatButton onClick={()=>setOpen(v=>!v)} open={open} /><FloatingChatWindow open={open} onClose={()=>setOpen(false)} /></div>);
}
