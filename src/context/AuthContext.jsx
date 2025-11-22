import React, { createContext, useContext, useState } from 'react';
const AuthContext=createContext();
export const useAuth = ()=> useContext(AuthContext);
export function AuthProvider({children}){
  const [user,setUser]=useState({name:'Joseph Were',email:'josephogwe8@gmail.com',phone:'+254712562780'});
  return <AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>
}
