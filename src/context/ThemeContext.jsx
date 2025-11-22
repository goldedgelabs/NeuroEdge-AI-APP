import React, { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export function ThemeProvider({children}){
  const [theme,setTheme]=useState(()=> localStorage.getItem('neuroedge_theme') || 'light');
  useEffect(()=>{ document.documentElement.classList.toggle('dark', theme==='dark'); localStorage.setItem('neuroedge_theme', theme); },[theme]);
  const toggleTheme = ()=> setTheme(t=> t==='dark' ? 'light' : 'dark');
  return <ThemeContext.Provider value={{theme,setTheme,toggleTheme}}>{children}</ThemeContext.Provider>
}
