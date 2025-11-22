import React, { createContext, useContext, useState } from 'react';
const UIContext = createContext();
export const useUI = () => useContext(UIContext);
export function UIProvider({children}){
  const [isSidebarOpen,setSidebarOpen]=useState(false);
  const [showSplash,setShowSplash]=useState(true);
  const [draftPrompt,setDraftPrompt]=useState('');
  const [showFloating,setShowFloating]=useState(false);
  const [networkStatus,setNetworkStatus]=useState('online'); // online|reconnecting|offline
  return <UIContext.Provider value={{isSidebarOpen,setSidebarOpen,showSplash,setShowSplash,draftPrompt,setDraftPrompt,showFloating,setShowFloating,networkStatus,setNetworkStatus}}>{children}</UIContext.Provider>
}
