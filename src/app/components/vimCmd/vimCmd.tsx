"use client";

import { useState } from "react";



function VimCmd(){
  const [cmd ,setCmd]=useState("")
  let parsedCmd:any 
  const handleSubmit = () => {
    parsedCmd=cmd.split(" ")
    if(parsedCmd[0]==":") setCmd("error")

    if(cmd.includes("colorScheme")) {
     setTheme(parsedCmd[1]) 
     setCmd("")
    }
    
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
   return (
    <>
      <input type="text" value={cmd} onChange={(e:any)=>{setCmd(e.target.value)}} onKeyDown={handleKeyDown} placeholder="only command working for now :colorScheme dracula|ayu-dark|ayu-mirage|nord|night-owl" className="w-full h-full border-none focus:border-none focus:outline-none" />
    </>
  );
}

export default VimCmd;
