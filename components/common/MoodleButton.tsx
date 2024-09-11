import React, { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface MoodleButtonProps {
  children: React.ReactNode;
  variants?: "view" | "viewLarge" | "border" | "highlight" |"icon";
  className?: string; // Additional class names for styling the button
  Icon?: ReactNode;
}

const MoodleButton = ({ children, variants, className, Icon }: MoodleButtonProps) => {

  return (
    <Button
      className={`
        ${variants === "view" ? "text-[12px] font-semibold py-[7px] px-[16px] rounded-[14px] bg-black text-white"
          : variants === "viewLarge" ? ""
            : variants === "border" ? "text-[10px] font-medium leading-[14px] p-[8px] border border-[#ffffff3f] bg-black"
              : variants === "highlight" ? "text-[10px] bg-moodleOrange font-semibold"
              : variants === "icon" ? "text-[12px] font-semibold flex items-center gap-[4px] py-[8px] px-[10px]"
                : ""} ${className}`
      }>
      {Icon && <span className="">{Icon}</span>}{children}
    </Button>
  )
}

export default MoodleButton
