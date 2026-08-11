import React from 'react'
import { Moon, Sun, ArrowUpRight, MapPin } from "lucide-react";

const ProfileBtn = () => {
  return (
     <button
            className="
              group/button
              relative mt-6
              flex w-full
              items-center justify-center gap-2
              overflow-hidden
              rounded-2xl
              bg-slate-900
              px-5 py-3.5
              text-sm font-medium
              text-white

              shadow-lg
              shadow-slate-900/10

              transition-all duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              hover:-translate-y-0.5
              hover:shadow-xl

              active:translate-y-0
              active:scale-[0.98]

              dark:bg-white
              dark:text-black
              dark:shadow-white/5
            "
          >

            {/* Button Shine */}
            <span
              className="
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent

                transition-transform
                duration-700

                group-hover/button:translate-x-full
              "
            />

            <span className="relative">
              View Profile
            </span>

            <ArrowUpRight
              size={16}
              className="
                relative
                transition-transform duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover/button:translate-x-0.5
                group-hover/button:-translate-y-0.5
              "
            />

          </button>
  )
}

export default ProfileBtn
