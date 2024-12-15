import React from 'react'
import MoodleBadge from '@/components/common/MoodleBadge';
import MoodleButton from '@/components/common/MoodleButton';
import Link from 'next/link';

interface MoodleTitleBlockProps{
    title: string;
    subtitle: string;
    badge: string;
    badgeVariants?:"normal"|"special";
    position: "left" | "right" | "middle",
    viewMore?: boolean;
    viewMoreLink?: string;
    viewMoreTitle?: string;
    className?: string;  // Optional class name for the container div.  Default is "flex flex-col items-center justify-center" if not provided.  If provided, it will be appended to the default class name.  This allows for custom styling of the component.  For example, className="my-custom-class".  Note: The default class name is already included in the provided CSS file.  It is recommended to use the provided CSS file and add your custom styles
}

function MoodleTitleBlock({title,subtitle,badge,position, viewMore, viewMoreLink, viewMoreTitle, className, badgeVariants}: MoodleTitleBlockProps) {
  return (
    <div className={`${className} flex items-end justify-between ${position==="right" && "flex-row-reverse"} ${position==="middle"&&"flex-col items-center"}`}>

        <div className={` flex flex-col   ${
        position==="left"?"items-start"
        :position=="middle"?"items-center w-full"
        :position=="right"?"items-end "
        :""
        }`}>
            {badgeVariants === "normal"?<MoodleBadge variants='label'>{badge}</MoodleBadge>
            :badgeVariants ==="special"?<MoodleBadge variants='special'>{badge}</MoodleBadge>
            :<MoodleBadge variants='label'>{badge}</MoodleBadge>
            }
            <div className='text-[1.5rem] font-semibold leading-[36px] pt-[10px]'>{title}</div>
            <div className='text-[14px] mt-[6px] leading-[21px]'>{subtitle}</div>
        </div>

        {viewMore &&
        <div className={`${position==="middle" && "mt-6"}`}>
        <Link href={viewMoreLink?viewMoreLink:""}><MoodleButton variants='view'>{viewMoreTitle}</MoodleButton></Link>
        </div>
        }
      
    </div>
  )
}

export default MoodleTitleBlock
