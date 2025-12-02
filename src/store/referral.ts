import create from 'zustand'
type ReferralState = { points:number; invites:string[]; addInvite:(id:string)=>void; addPoints:(n:number)=>void }
export const useReferralStore = create<ReferralState>((set)=>({ points:0, invites:[], addInvite:(id)=>set(s=>({invites:[...s.invites,id]})), addPoints:(n)=>set(s=>({points:s.points+n})) }))
