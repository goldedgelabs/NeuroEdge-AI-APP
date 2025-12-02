export interface Agent { id:string; name:string; description?:string; [key:string]: any }
export interface Message { id:string; role:'user'|'agent'|'system'; text:string; createdAt:number }
export interface Conversation { id:string; name:string; messages: Message[] }
export interface MetricsStream { cpu?:number; memory?:number; rps?:number }
