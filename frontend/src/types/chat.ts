// src/types/chat.ts
export interface ChatMessage {
  id?: number;
  role: 'user'|'assistant'|'system';
  text: string;
  createdAt: number;
  status?: 'queued'|'sent'|'failed'|'local';
}


// Auto-appended default export to satisfy imports
export default {} as any;
