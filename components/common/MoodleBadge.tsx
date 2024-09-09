import { plexMono } from '@/lib/fonts';
import React from 'react'

interface MoodleBadgeProps {
  children: React.ReactNode;
  variants?: "new" | "beta" | "status" | "count-ligh" |"count-dark" | "label";
  className?: string;
}

const MoodleBadge = ({ children, variants,className }: MoodleBadgeProps) => {
  return (
    <div
    className={`
      ${variants === "new" ? ""
        : variants === "beta" ? ""
        : variants === "label" ? "text-[12px] font-semibold uppercase py-[6px] px-[10px] bg-black rounded-[10px] text-white w-fit"
          : variants === "status" ? ""
            : variants === "count-ligh" ? `rounded-full bg-white text-[10px] text-black  leading-[10px] py-[2px] px-[4px] font-bold`
            : variants === "count-dark" ? ""
              : ""} ${className}`
    }> 
    {children}
  </div>
  )
}

export default MoodleBadge
