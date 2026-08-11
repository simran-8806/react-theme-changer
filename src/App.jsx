import React, { useState, useEffect } from 'react'
import { Moon, Sun, ArrowUpRight, MapPin } from "lucide-react";
import ThemeBtn from './components/ThemeBtn';
import Status from './components/Status';
import ProfileBtn from './components/ProfileBtn';
import Content from './components/Content';
import { ThemeProvider } from './contexts/Theme';

const App = () => {

  const [themeMode, setThemeMode] = useState("light")

 const darkTheme = ()=>{
  setThemeMode("dark")
  }
  const lightTheme = ()=>{
    setThemeMode("light")
  }

  // actual change in theme:

  useEffect(()=>{
    const html = document.querySelector("html")
    html.classList.remove("light", "dark")
    html.classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
       <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#08080a] flex items-center justify-center p-6 transition-all duration-700 ease-in-out">

      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute left-1/2 top-1/2
            h-[450px] w-[450px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-violet-400/10
            blur-[120px]
            transition-all duration-1000
            dark:bg-violet-600/10
          "
        />
      </div>

      {/* Card */}
      <div
        className="
          group relative w-full max-w-[390px]
          overflow-hidden rounded-[30px]

          border border-black/[0.06]
          bg-white/80
          backdrop-blur-2xl

          shadow-[0_20px_70px_rgba(0,0,0,0.08)]

          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

          hover:-translate-y-1
          hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)]

          dark:border-white/[0.08]
          dark:bg-[#111114]/80
          dark:shadow-[0_20px_70px_rgba(0,0,0,0.45)]
          dark:hover:shadow-[0_30px_90px_rgba(0,0,0,0.55)]
        "
      >

        {/* Top Gradient */}
        <div
          className="
            absolute inset-x-0 top-0 h-32
            bg-gradient-to-b
            from-violet-500/[0.08]
            to-transparent
            dark:from-violet-500/[0.12]
          "
        />

        {/* Theme Button */}
        <ThemeBtn />

        {/* Content */}
        <div className="relative px-8 pb-8">

          <Content />

          {/* Status */}
        
        <Status />

          {/* CTA */}
         <ProfileBtn />

        </div>
      </div>
    </div>


    </ThemeProvider>
   
  );
}

export default App
