"use client";
import { useState, useCallback, useEffect, useContext } from "react";
import { BiSolidFolder } from "react-icons/bi";
import { FiCode, FiX, FiMenu } from "react-icons/fi";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from 'usehooks-ts';
import { SideBarContext, useSideBarContext } from "@/app/context/naveBarContext";

function NavBar() {
  
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false
  });
  const { sb,setSb }=useSideBarContext() 
  const [indicatorAbout, setIndicatorAbout] = useState(1);
  const [indicatorProjects, setIndicatorProjects] = useState(1);
  const [indicatorContact, setIndicatorContact] = useState(1);
  const [indicatorHobies, setIndicatorHobies] = useState(1);
  const route = usePathname();
  const pathname = route;
  
  const handleLeftSideDisplay = useCallback(() => {
     setSb(sb*-1);
  }, []);
  
//  const handleKeyPress = useCallback((event: KeyboardEvent) => {
//      if (isDesktop) event.key === "Control" && handleLeftSideDisplay();
//  }, [handleLeftSideDisplay ,isDesktop]);
//  
//  useEffect(() => {
//    document.addEventListener("keydown", handleKeyPress);
//    return () => {
//      document.removeEventListener("keydown", handleKeyPress);
//    };
//  }, [handleKeyPress]);
  
  useEffect(() => {
    setSb( isDesktop ? 1 : -1);
  }, [isDesktop]);
  
  const handleClick = (name: string) => {
    switch (name) {
      case "About":
        setIndicatorAbout((a) => a * -1);
        break;
      case "Projects":
        setIndicatorProjects((a) => a * -1);
        break;
      case "Contact":
        setIndicatorContact((a) => a * -1);
        break;
      case "Hobbies":
        setIndicatorHobies((a) => a * -1);
        break;
      default:
        break;
    }
  };
  
  const AboutFiles = [
    { name: "index.html", path: "/about" },
    { name: "skils.js", path: "/skils" },
    { name: "projects.json", path: "/projects" },
  ];
  
  const Projects = [
    { name: "file1", path: "/projects/file1" },
    { name: "file2", path: "/projects/file2" },
  ];
  
  const Contacts = [
    { name: "file3", path: "/projects/file3" },
    { name: "file4", path: "/projects/file4" },
  ];
  
  const Hobies = [
    { name: "file4", path: "/projects/file5" },
    { name: "file6", path: "/projects/file6" },
  ];
  
  const Folders = [
    { name: "About", files: AboutFiles, indicator: indicatorAbout },
    { name: "Projects", files: Projects, indicator: indicatorProjects },
    { name: "Contact", files: Contacts, indicator: indicatorContact },
    { name: "Hobbies", files: Hobies, indicator: indicatorHobies },
  ];

  return (
    <div className="flex h-full">
      {sb > 0 && (
        <div 
          className={`
            h-full w-64 flex flex-col bg-sidebar-bg backdrop-blur-md
            border-r border-zinc-700
            ${isDesktop ? 'relative' : 'fixed left-0 top-0 z-20 w-72 shadow-2xl'}
          `}
        >
          {/* Logo Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-zinc-800">
            <Link 
              href="/" 
              className="font-mono text-2xl font-bold text-white tracking-tighter hover:text-purple-400 transition-colors"
            >
              REY
            </Link>
            {!isDesktop && (
              <button 
                onClick={()=>{setSb(sb*-1)}}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Close sidebar"
              >
                <FiX className="h-5 w-5" />
              </button>
            )}
          </div>
          
          {/* File Explorer */}
          <div className="flex-1 overflow-y-auto py-2 font-mono">
            {/* Path display */}
            <div className="px-4 py-2 text-accent-color text-xs italic opacity-80 border-b border-zinc-800/50">
              ~/personal/portfolio{pathname}
            </div>
            
            <nav>
              <ul className="mt-2">
                {Folders.map((folder, index) => (
                  <li key={index} className="mb-1">
                    {/* Folder */}
                    <button
                      onClick={() => handleClick(folder.name)}
                      className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-accent-color hover:bg-sidebar-hover-bg/50 rounded group transition-colors"
                    >
                      <BiSolidFolder className="h-4 w-4 group-hover:text-accent-color" />
                      <span className="text-base">{folder.name}</span>
                    </button>
                    
                    {/* Files */}
                    {folder.indicator > 0 && (
                      <ul className="ml-2 mt-1">
                        {folder.files.map((file, subindex) => (
                          <li key={subindex}>
                            <Link 
                              href={file.path}
                              onClick={()=> (!isDesktop) && setSb(-1)}
                              className={`
                                block !ml-4  py-1.5 text-sm group flex items-center gap-2
                                hover:bg-sidebar-hover-bg/50 transition-colors 
                                ${pathname === file.path 
                                  ? 'bg-sidebar-hover-bg text-zinc-200 ' 
                                  : 'text-zinc-500 hover:text-zinc-300'}
                              `}
                            >
                              <div className=" border-l-2 border-b-2 rounded-bl-sm border-zinc-700  w-[10px] h-[20px] relative -top-[12px] left-0"></div> <FiCode className="h-3.5 w-3.5 opacity-70" />
                              {file.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Status bar */}
          <div className="bg-[#0D1117] px-3 py-1.5 text-xs text-zinc-500 border-t border-zinc-800 flex justify-between">
            <span>vim mode</span>
            <span>Press e to toggle</span>
          </div>
        </div>
      )}
      
      {/* Mobile menu button */}
      {!isDesktop && sb < 0 && (
        <button
          onClick={()=>{setSb(1)}}
          className="fixed top-4 left-4 z-10 p-2 bg-zinc-900/80 backdrop-blur-sm rounded-md text-white hover:bg-zinc-800 transition-colors"
          aria-label="Open menu"
        >
          <FiMenu className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default React.memo(NavBar);
