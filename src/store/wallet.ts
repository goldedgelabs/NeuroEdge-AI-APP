import create from 'zustand';
export const useWalletStore = create((set)=>({ balance:0, points:0, earnPoints:(n:number)=>set(s=>({points:s.points+n})), spendPoints:(n:number)=>set(s=>({points:Math.max(0,s.points-n)})) }));
export default useWalletStore;
