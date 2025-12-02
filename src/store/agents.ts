import create from 'zustand'
export type Agent = { id:string; name:string; description?:string }
export const useAgentsStore = create(()=>({ agents: [] as Agent[], setAgents:(a:Agent[])=>{return a} }))
