import React, { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface MoodleButtonProps {
  children: React.ReactNode;
  variants?: "view" | "viewLarge" | "border" | "highlight" |"icon" |"action" | "actionLarge" |"logout";
  className?: string; // Additional class names for styling the button
  Icon?: ReactNode;
  IconDirection?: "left" | "right";
  onClick?: () => void; // Additional click event handler for the button
  disabled?: boolean;
}

const MoodleButton = ({ children, variants, className, Icon,IconDirection, onClick, disabled }: MoodleButtonProps) => {

  return (
    <Button
    onClick={onClick}
    disabled={disabled}
      className={`
        ${variants === "view" ? "text-[12px] font-semibold py-[7px] px-[16px] rounded-[14px] bg-black text-white"
          : variants === "viewLarge" ? ""
           : variants === "logout" ? "text-[12px] font-medium text-rose-500 px-[12px] bg-[#ff3e8e23] py-[5px] BG border border-rose-500 hover:bg-rose-500 hover:text-white rounded-full cursor-pointer"
            : variants === "border" ? "text-[10px] font-medium leading-[14px] p-[8px] border border-[#ffffff3f] bg-black"
              : variants === "highlight" ? "text-[10px] bg-moodleOrange font-semibold"
              : variants === "icon" ? "text-[12px] font-semibold flex items-center gap-[4px] py-[8px] px-[10px]"
              : variants === "action" ? " bg-[#FFD700] gap-[4px] text-black border border-black text-[15px] font-medium px-[16px] py-[10px] rounded-[14px] hover:bg-[#FFF309] transform transition-transform duration-200"
              : variants === "actionLarge" ? " bg-[#FFD700] gap-[4px] h-[51px] text-black border border-black text-[18px] font-semibold px-[20px] py-[12px] rounded-[10px] hover:bg-[#FFF309] transform transition-transform duration-200"

                : ""} ${className}`
      }>
      {Icon && IconDirection ==="left" && <span className="">{Icon}</span>}{children}{Icon && IconDirection ==="right" && <span className="">{Icon}</span>}
    </Button>
  )
}

export default MoodleButton
