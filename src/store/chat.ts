import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import type { Message, Conversation } from '@/types/models'

type ChatState = {
  conversations: Conversation[]
  activeConversationId: string | null
  selectedAgent: string | null
  messages: Message[]
  createConversation: (name: string, agentId?: string)=>string
  setActiveConversation: (id: string)=>void
  sendMessage: (text: string)=>Promise<void>
  appendMessage: (m: Message)=>void
}

export const useChatStore = create<ChatState>((set,get)=>({ 
  conversations: [], activeConversationId: null, selectedAgent: null, messages: [],
  createConversation: (name,agentId)=>{
    const id = uuidv4()
    set(state=>({ conversations: [...state.conversations, { id, name, messages: [], agentId }] }))
    return id
  },
  setActiveConversation: (id)=> set(()=>({ activeConversationId: id })),
  sendMessage: async (text)=>{
    const id = uuidv4()
    const msg: Message = { id, role: 'user', text, createdAt: Date.now() }
    get().appendMessage(msg)
    try{
      await fetch('/api/chat/send', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ conversationId: get().activeConversationId, text }) })
    }catch(e){ console.error(e) }
  },
  appendMessage: (m)=> set(state=>({ messages: [...state.messages, m] }))
}))
