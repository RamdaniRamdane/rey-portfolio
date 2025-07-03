"use client";
import Title from "../components/title/title";
import Image from "next/image";
import reyImg from "../../../public/personalPic.jpg";
import github from "../../../public/github.svg";
import cv from "../../../public/cv.svg";
import Json from "../components/toJson/toJson";
import { useState, useEffect } from "react";

export default function About() {
  // State to track window size for custom responsive behaviors
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Update responsive states based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden px-4 py-6 md:px-6 lg:px-8">
      <Title text="About" textColored=" Me" />
      
      {/* Main Content - Responsive layout changes based on screen size */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6 w-full max-w-7xl mx-auto">
        {/* Left Column - Profile Section */}
        <div className="flex flex-col w-full lg:w-1/2 gap-6">
          {/* Profile Card with improved design */}



          <div className="bg-article-bg flex flex-col sm:flex-row items-center justify-center rounded-xl  shadow-lg h-full lg:h-[70%]">
            <div className=" h-[45%] w-[70%]  sm:h-[90%] sm:w-[45%] sm:flex sm:items-center">
                   <Image 
                    src={reyImg} 
                    alt="Rey's profile picture" 
                    className="rounded-xl border-2 border-accent-color "
                    priority
                  />
             
            </div>
            <div className=" h-[45%] w-[70%] flex items-center justify-center  sm:h-[90%] sm:w-[45%] ">
              <div className="w-[90%] h-[90%] flex items-start flex-col gap-5 sm:justify-center">              
                <h1 className="text-accent-color font-bold text-2xl border-b-3">HI</h1>
                <h2>i am rey</h2>
                <p className="text-start">
                    please dont look a lot on my pic and i use Arch btw ...
                </p>
                <div className=" sm:block mt-4">
                  <div className="flex gap-4 text-xs text-zinc-400">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span>Available for work</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span>Software Engineer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          


          {/* Social Links - Now with hover effects and better mobile layout */}
          <div className="grid grid-cols-2 gap-4 h-auto lg:h-[30%]">
            <a href="#" className="block group h-full">
              <div className="bg-article-bg rounded-xl flex flex-col justify-center items-center p-4 h-full border border-zinc-800/50 shadow-md hover:shadow-lg hover:border-accent-color transition-all duration-300">
                <Image 
                  src={cv} 
                  alt="Resume/CV" 
                  className="w-12 sm:w-16 mb-2 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">Resume</span>
              </div>
            </a>
            
            <a href="#" className="block group h-full">
              <div className="bg-article-bg rounded-xl flex flex-col justify-center items-center p-4 h-full border border-zinc-800/50 shadow-md hover:shadow-lg hover:border-accent-color transition-all duration-300">
                <Image 
                  src={github} 
                  alt="GitHub Profile" 
                  className="w-12 sm:w-16 mb-2 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">GitHub</span>
              </div>
            </a>
          </div>
        </div>
        
        {/* Right Column - JSON Viewer with responsive design */}
        <div className="flex flex-col w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg border border-zinc-800 h-auto lg:h-[600px] mt-6 lg:mt-0">
          <div className="bg-article-bg p-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="font-mono text-white">JSON</p>
            </div>
            {/* File info - visible on tablets and larger */}
            <div className="hidden sm:block text-xs text-zinc-500 font-mono">
              about.json - 2.4KB
            </div>
          </div>
          
          <div className="bg-black/30 flex-1 overflow-auto h-[400px] lg:h-auto">
            <div className="p-4">
              <Json />
            </div>
          </div>
        </div>
      </div>

    
      {/*
            <div className="flex flex-col sm:flex-row h-full items-center px-10 gap-5">
              <div className="relative group ">
                <div className="relative size-28 sm:size-32 overflow-hidden rounded-full border-2 border-accent-color flex-shrink-0">
                  <Image 
                    src={reyImg} 
                    alt="Rey's profile picture" 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                    priority
                  />
                </div>
              </div>
              
              <div className="text-center  h-full sm:text-left mt-10 sm:mt-0 border-3 border-blue-500 p-10 ">
                <div className="relative overflow-hidden pb-2">
                  <h1 className="text-3xl font-bold text-white relative z-10">
                    Hi <span className="inline-block">👋</span>
                  </h1>
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-accent-color to-accent-color/70 rounded"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-accent-color mb-10">I am Rey</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                  please dont look a lot on my pic and i use Arch btw ...
                  keep the unix mindset , and dont let your system bloated 
                  do one thing and do it well
                </p>
                
                <div className="hidden sm:block mt-4">
                  <div className="flex gap-4 text-xs text-zinc-400">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span>Available for work</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span>Software Engineer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>



      */}





    </div>
  );
}
