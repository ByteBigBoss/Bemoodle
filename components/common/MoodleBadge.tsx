import React from 'react'

interface MoodleBadgeProps {
  children: React.ReactNode;
  variants?: "new" | "beta" | "status" | "count-ligh" |"count-dark" | "label" |"edition" |"badge"|"outline" |"special" |"info" | "footerLink";
  className?: string;
}

const MoodleBadge = ({ children, variants,className }: MoodleBadgeProps) => {
  return (
    <div
    className={`
      ${variants === "new" ? ""
        : variants === "beta" ? ""
         : variants === "footerLink" ? "text-[12px] font-medium text-white px-[12px] py-[6px] border border-[#ffffff2f] hover:bg-moodleShadeYellow hover:text-black rounded-full cursor-pointer"
        : variants === "label" ? "text-[12px] font-semibold uppercase py-[6px] px-[10px] bg-black rounded-[10px] text-white w-fit"
            : variants === "special" ? "text-[12px] font-semibold uppercase py-[6px] px-[10px] bg-moodleYellow rounded-[10px] text-black border border-black w-fit"
             : variants === "info" ? "text-[12px] font-semibold  py-[6px] px-[10px] bg-moodleYellow rounded-[10px] text-black border border-black w-fit"
          : variants === "status" ? "bg-moodleShadeYellow px-[8px] py-[6px] border border-black rounded-[6px] text-[12px] font-semibold"
            : variants === "count-ligh" ? `rounded-full bg-white text-[10px] text-black  leading-[10px] py-[2px] px-[4px] font-bold`
            : variants === "count-dark" ? ""
            : variants === "outline" ? "text-[10px] py-[6px] px-[10px] font-semibold w-fit rounded-[6px] border border-black"
             : variants === "badge" ? "text-[10px] py-[6px] px-[10px] font-semibold w-fit rounded-full border border-black"
              : variants === "edition" ? "text-[10px] py-[6px] px-[8px] font-semibold w-fit rounded-[6px] bg-moodleShadeYellow border border-black"
              : ""} ${className}`
    }> 
    {children}
  </div>
  )
}

export default MoodleBadge
