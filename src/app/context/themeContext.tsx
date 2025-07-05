"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Schemes = "ayu-dark" | "nord" | "ayu-mirage" | "night-owl" | "dracula" | "github-dark" | "gruvbox-dark" | "one-dark" | "monkai" | "solarized-dark"

type ThemeContextType={
  theme:Schemes;
  setTheme:React.Dispatch<React.SetStateAction<Schemes>>
}

export const ThemeContext = createContext<ThemeContextType |null >(null)

function ThemeProvider({children}:{children:ReactNode}) {

  const [theme,setTheme]=useState<Schemes>("github-dark")
  const handleTheme = (th: Schemes) => {
    document.documentElement.setAttribute('data-theme', th);
    localStorage.setItem('theme', th);
  };
  let thm:Schemes
  const initTheme = ():void=>{
    let st=localStorage.getItem('theme') as Schemes;
    thm=st 
    setTheme(thm) 
  }
  useEffect(()=>{
    initTheme()
  },[])
  useEffect(()=>{
     handleTheme(theme)
  },[theme])
  return (
    <ThemeContext.Provider value={{ theme , setTheme }}>
      {children}
    </ThemeContext.Provider>
 ); 
}


export default ThemeProvider

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}

