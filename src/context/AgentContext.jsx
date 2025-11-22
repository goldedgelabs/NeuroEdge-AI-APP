import React, { createContext, useContext, useState } from 'react';
const AgentContext=createContext();
export const useAgent = ()=> useContext(AgentContext);
export function AgentProvider({children}){
  const [agents,setAgents]=useState([]);
  return <AgentContext.Provider value={{agents,setAgents}}>{children}</AgentContext.Provider>
}
