import React from 'react'
import { Moon, Sun, ArrowUpRight, MapPin } from "lucide-react";
import useTheme from '../contexts/Theme';



const ThemeBtn = () => {

    const {themeMode, darkTheme, lightTheme} = useTheme();

    const onClickBtn = (e)=>{
        if(themeMode === "dark"){
            lightTheme();
        }else{
            darkTheme();
        }
    }

  return (
    <div className="relative flex justify-end p-5">

          <button
            className="
              group/toggle relative
              flex h-11 w-11 items-center justify-center
              rounded-full

              border border-black/[0.07]
              bg-white/70
              text-slate-700

              shadow-sm

              transition-all duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              hover:scale-105
              hover:rotate-3
              hover:bg-white
              hover:shadow-lg

              active:scale-90

              dark:border-white/[0.08]
              dark:bg-white/[0.05]
              dark:text-white
              dark:hover:bg-white/[0.1]
            "
            onClick={onClickBtn}

          >
            {/* Moon */}

            { themeMode === "dark" ? (
                    <Moon
              size={18}
              strokeWidth={1.8}
              className="
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover/toggle:rotate-[-15deg]
              "
            />
            ) :  ( <Sun
              size={18}
              strokeWidth={1.8}
              className=" transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover/toggle:rotate-[15deg]"            
              
            />
            )
            }
          
           
        </button>

     </div>
  )
}

export default ThemeBtn
