"use client"
import React from 'react'
import Bemoodle from '../icons/Bemoodle'
import WrapperBody from '../wrappers/WrapperBody'
import { righteous } from '@/lib/fonts'
import MoodleBadge from '../common/MoodleBadge'
import MoodleButton from '../common/MoodleButton'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const path = usePathname();


  const restrictedFooterPaths = ['/stores/[store]/'];
  const isRestrictedFooterPath = restrictedFooterPaths.includes(path) || path.startsWith("/stores/");

  return (
    <div className='w-full flex flex-col items-center bg-black px-[30px] mobile:px-[14px] py-[40px]'>
      {isRestrictedFooterPath ?

        <div className='flex items-end justify-between mobile:flex-col mobile:items-start w-full '>
          <div>
            <Bemoodle className='fill-white stroke-white' width={34} height={34} />
            <div className={`${righteous.className} uppercase text-[24px] font-bold pt-3 text-white`}>Bemoodle</div>
            <div className='text-white font-medium text-[12px] opacity-65 pt-2'>Copyright © 2024 Bemoodle Inc. | All rights reserved.</div>
          </div>

          <div className='flex items-center gap-[10px] flex-wrap mobile:mt-[20px]'>
            <MoodleBadge variants='footerLink'>My Store</MoodleBadge>
            <MoodleBadge variants='footerLink'>Cart</MoodleBadge>
            <MoodleBadge variants='footerLink'>Search</MoodleBadge>
            <MoodleButton variants='logout'>Logout</MoodleButton>
          </div>
        </div>


        :
        <WrapperBody>

          <div className='flex items-end justify-between mobile:flex-col mobile:items-start'>
            <div>
              <Bemoodle className='fill-white stroke-white' width={34} height={34} />
              <div className={`${righteous.className} uppercase text-[24px] font-bold pt-3 text-white`}>Bemoodle</div>
              <div className='text-white font-medium text-[12px] opacity-65 pt-2'>Copyright © {new Date().getFullYear()} Bemoodle Inc. | All rights reserved.</div>
            </div>

            <div className='flex items-center gap-[10px] flex-wrap mobile:mt-[20px]'>
              <MoodleBadge variants='footerLink'>My Store</MoodleBadge>
              <MoodleBadge variants='footerLink'>Cart</MoodleBadge>
              <MoodleBadge variants='footerLink'>Search</MoodleBadge>
              <MoodleButton variants='logout'>Logout</MoodleButton>
            </div>
          </div>

        </WrapperBody>

      }
    </div>
  )
}

export default Footer
