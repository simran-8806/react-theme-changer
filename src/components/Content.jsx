import React from 'react'

import { Moon, Sun, ArrowUpRight, MapPin } from "lucide-react";

const Content = () => {
  return (
    <div>
        {/* Avatar */}
          <div className="relative mx-auto mb-6 h-[92px] w-[92px]">

            {/* Glow */}
            <div
              className="
                absolute inset-0
                rounded-full
                bg-violet-500/20
                blur-xl
                transition-all duration-700
                group-hover:bg-violet-500/30
                group-hover:blur-2xl
              "
            />

            {/* Avatar Ring */}
            <div
              className="
                relative h-full w-full
                rounded-full
                bg-gradient-to-br
                from-violet-500
                via-purple-500
                to-blue-500
                p-[2px]

                transition-transform duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]

                group-hover:scale-105
                group-hover:rotate-2
              "
            >
              <div
                className="
                  flex h-full w-full
                  items-center justify-center
                  rounded-full
                  bg-white
                  text-3xl font-semibold
                  text-violet-600

                  dark:bg-[#17171a]
                  dark:text-violet-400

                  transition-colors duration-700
                "
              >
                S
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="text-center">

            <h2
              className="
                text-[26px]
                font-semibold
                tracking-[-0.03em]
                text-slate-900
                dark:text-white
                transition-colors duration-700
              "
            >
              Simran Chaudhary
            </h2>

            <p
              className="
                mt-1.5
                text-sm
                font-medium
                text-violet-600
                dark:text-violet-400
                transition-colors duration-700
              "
            >
              Full Stack Developer
            </p>

            <div
              className="
                mt-3
                flex items-center justify-center gap-1.5
                text-sm text-slate-500
                dark:text-slate-400
                transition-colors duration-700
              "
            >
              <MapPin size={14} strokeWidth={1.8} />
              India
            </div>

          </div>

          {/* Description */}
          <p
            className="
              mx-auto mt-6
              max-w-[285px]
              text-center
              text-[13px]
              leading-6
              text-slate-500
              dark:text-slate-400
              transition-colors duration-700
            "
          >
            Crafting modern digital experiences with clean code,
            thoughtful design and scalable architecture.
          </p>
    </div>
  )
}

export default Content
