import create from 'zustand';
export type Message = { id: string; conversationId?: string; sender: 'user'|'agent'; text: string; timestamp?: number; };
export const useChatStore = create((set)=>({ messages: [] as Message[], conversations: [], activeConversationId: undefined, selectedAgent: undefined, sendMessage: async (text: string)=>{}, createConversation: (title?:string)=>'conv-1', appendChunk: (conversationId: string, chunk: string)=>{} }));
export default useChatStore;
