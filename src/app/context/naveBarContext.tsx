"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type SideBarContextType={
  sb:number;
  setSb:React.Dispatch<React.SetStateAction<number>>
}

export const SideBarContext = createContext<SideBarContextType |null >(null)

function SideBarProvider({children}:{children:ReactNode}) {

  const [sb,setSb]=useState<number>(-1)
  useEffect(() => {
    console.log(sb)
  }, [sb]);
  return (
    <SideBarContext.Provider value={{ sb , setSb }}>
      {children}
    </SideBarContext.Provider>
 ); 
}


export default SideBarProvider

export function useSideBarContext() {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useSideBarContext must be used within a SideBarProvider");
  }
  return context;
}

