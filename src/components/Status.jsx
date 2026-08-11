import React from 'react'
import { Moon, Sun, ArrowUpRight, MapPin } from "lucide-react";

const Status = () => {
  return (
      <div
            className="
              mt-7
              grid grid-cols-3
              overflow-hidden
              rounded-2xl

              border border-black/[0.05]
              bg-black/[0.02]

              dark:border-white/[0.07]
              dark:bg-white/[0.025]

              transition-all duration-700
            "
          >

            {[
              ["12", "Projects"],
              ["8", "Skills"],
              [ "0" ,"Fresher"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="
                  py-4 text-center

                  transition-all duration-500

                  hover:bg-black/[0.03]
                  dark:hover:bg-white/[0.04]

                  [&+div]:border-l
                  [&+div]:border-black/[0.05]
                  dark:[&+div]:border-white/[0.07]
                "
              >
                <p
                  className="
                    text-lg font-semibold
                    tracking-tight
                    text-slate-900
                    dark:text-white
                    transition-colors duration-700
                  "
                >
                  {number}
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-wider
                    text-slate-400
                    dark:text-slate-500
                  "
                >
                  {label}
                </p>
              </div>
            ))}

          </div>

  )
}

export default Status
