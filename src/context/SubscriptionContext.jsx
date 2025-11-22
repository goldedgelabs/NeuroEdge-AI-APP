import React, { createContext, useContext, useEffect, useState } from 'react';
const SubscriptionContext=createContext();
export const useSubscription = ()=> useContext(SubscriptionContext);
export function SubscriptionProvider({children}){
  const [plan,setPlan]=useState(()=> localStorage.getItem('neuroedge_plan') || 'free');
  useEffect(()=> localStorage.setItem('neuroedge_plan', plan), [plan]);
  return <SubscriptionContext.Provider value={{plan,setPlan}}>{children}</SubscriptionContext.Provider>
}
