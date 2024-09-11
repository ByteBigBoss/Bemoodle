import React from 'react'
import WrapperBody from '@/components/wrappers/WrapperBody'
import { righteous } from '@/lib/fonts'
import MoodleButton from '@/components/common/MoodleButton'
import Cart from '@/components/icons/Cart'
import MoodleBadge from '@/components/common/MoodleBadge';
import Link from 'next/link'
import Bell from '@/components/icons/Bell'

const Navbar = () => {
  return (
    <div className='w-full h-[48px] z-[1000] bg-black text-white flex flex-col items-center justify-center text-[12px] font-medium'>

      <WrapperBody>

        <div className='w-full h-full flex items-center justify-between'>

          {/* LEFT */}
          <div className='flex items-center gap-[30px]'>

            {/* BEMOODLE */}
            <Link href={'/'} className={`${righteous.className} text-[14px] uppercase leading-[16px]`}>BEMOODLE</Link>

            {/* MENU ITEMS */}
            <Link href={'/'}>Home</Link>
            <Link href={'/products'}>Marketplace</Link>
            <Link href={'/categories'}>Categories</Link>
            <Link href={'/spaces/workshops'}>WorkShops</Link>
            <Link href={'/spaces/dicussions'}>Community</Link>

          </div>

          {/* RIGHT */}
          <div className='flex items-center gap-[26px]'>
            <div className='flex items-center gap-[20px] pr-[6px]'>
              <MoodleButton variants='border'>Start Selling</MoodleButton>

              <div className='w-[1px] h-[20px] bg-white opacity-20'></div>

              {/* CART */}
              <div className='relative pt-[11px]'>
                <MoodleBadge variants='count-ligh' className='absolute top-0 right-[-10px]'>9+</MoodleBadge>
                <Cart className='hover:fill-white cursor-pointer stroke-white' />
              </div>
            </div>

            {/* NOTIFICATIONS */}
            <div className='relative pt-[5px]'>
              <MoodleBadge className='absolute w-[10px] h-[10px] rounded-full bg-moodleOrange right-0 top-0'variants='count-dark'><span ></span></MoodleBadge>
            <Bell className='stroke-white hover:fill-white cursor-pointer'/>
            </div>

            {/* PROFILE */}
            <div className='w-[26px] h-[26px] rounded-full bg-white'></div>
          </div>

        </div>

      </WrapperBody>

    </div>
  )
}

export default Navbar
