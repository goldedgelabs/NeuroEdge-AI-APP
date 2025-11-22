import React, { createContext, useContext, useRef, useState } from 'react';
const ChatContext = createContext();
export const useChat = ()=> useContext(ChatContext);
export function ChatProvider({children}){
  const [convos,setConvos]=useState([]);
  const [active,setActive]=useState(null);
  const streamRef = useRef(null);
  return <ChatContext.Provider value={{convos,setConvos,active,setActive,streamRef}}>{children}</ChatContext.Provider>
}
