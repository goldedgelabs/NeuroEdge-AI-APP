import React from 'react';
import ActionRibbon from '../components/chat/ActionRibbon';
import ChatInput from '../components/chat/ChatInput';
import MessageBubble from '../components/chat/MessageBubble';

export default function ChatView(){
  const messages = [{id:1,role:'bot',text:'Welcome to NeuroEdge.'},{id:2,role:'user',text:'Hello'}];
  return (
    <div>
      <div className="panel" style={{marginBottom:12}}>
        <ActionRibbon />
      </div>

      <div className="panel" style={{minHeight:360}}>
        <div className="chat-stage">{messages.map(m=> <MessageBubble key={m.id} m={m} />)}</div>
      </div>

      <ChatInput onSend={(t)=> console.log('send',t)} />
      <div className="warning">⚠️ NeuroEdge can make mistakes. Check important info.</div>
    </div>
  );
}
