import create from 'zustand';

export type Message = {
  id: string;
  conversationId: string;
  sender: 'user'|'agent'|'system';
  text?: string;
  chunks?: string[];
  timestamp: number;
};

type Conversation = {
  id: string;
  title?: string;
  agent?: string;
  createdAt: number;
};

type ChatState = {
  messages: Message[];
  conversations: Conversation[];
  activeConversationId?: string;
  selectedAgent?: string;
  sendMessage: (text: string) => Promise<void>;
  createConversation: (title?: string) => string;
  appendChunk: (conversationId: string, chunk: string) => void;
};

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  conversations: [],
  activeConversationId: undefined,
  selectedAgent: undefined,
  sendMessage: async (text: string) => {
    const id = get().activeConversationId || get().createConversation('New conversation');
    const msg = { id: crypto.randomUUID(), conversationId: id, sender: 'user', text, timestamp: Date.now() };
    set(state => ({ messages: [...state.messages, msg] }));
    // forward to API
    try {
      await fetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversationId: id, text, agent: get().selectedAgent }),
      });
    } catch (e) {
      console.error('sendMessage error', e);
    }
  },
  createConversation: (title?: string) => {
    const id = crypto.randomUUID();
    set(state => ({ conversations: [...state.conversations, { id, title, createdAt: Date.now() }], activeConversationId: id }));
    return id;
  },
  appendChunk: (conversationId: string, chunk: string) => {
    set(state => {
      const messages = [...state.messages];
      // attach chunk to last message from agent in this conversation or create one
      let last = [...messages].reverse().find(m => m.conversationId === conversationId && m.sender === 'agent');
      if (!last) {
        last = { id: crypto.randomUUID(), conversationId, sender: 'agent', chunks: [], timestamp: Date.now() } as any;
        messages.push(last);
      }
      if (!last.chunks) last.chunks = [];
      last.chunks.push(chunk);
      return { messages };
    });
  }
}));
