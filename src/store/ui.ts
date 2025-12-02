import create from 'zustand'
type UIState = { dark:boolean; setDark:(d:boolean)=>void; floatingOpen:boolean; setFloating:(b:boolean)=>void }
export const useUIStore = create<UIState>((set)=>({ dark:false, setDark:(d)=>set({dark:d}), floatingOpen:false, setFloating:(b)=>set({floatingOpen:b}) }))
