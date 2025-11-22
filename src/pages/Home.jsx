import React from 'react';
import MenuButtons from '../components/menu/MenuButtons';
import ActionRibbon from '../components/chat/ActionRibbon';

export default function Home(){
  return (
    <div>
      <div className="panel">
        <h2 style={{fontSize:20,fontWeight:700}}>Users Choice First — NeuroEdge</h2>
        <p className="small">Mobile-first, premium AI assistant combining best of ChatGPT, Gemini, Copilot.</p>
        <ActionRibbon />
        <div style={{marginTop:12}}><MenuButtons /></div>
      </div>
    </div>
  );
}
