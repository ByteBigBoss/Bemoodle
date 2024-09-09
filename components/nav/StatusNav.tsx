import React from 'react'
import WrapperBody from '../wrappers/WrapperBody'
import Link from 'next/link'

const StatusNav = () => {
  return (
    <div className='w-full h-[30px] z-[1000] bg-moodleYellow flex flex-col items-center justify-center text-[12px] font-medium'>
      <WrapperBody>

        <div className='w-full flex items-center justify-between'>
          
        {/* LEFT */}
        <div className='flex items-center gap-[40px]'>
          <div>English</div>
          <div>LKR</div>
        </div>

        {/* RIGHT */}
        <div className='flex items-center gap-[40px]'>
          <div>Help Center</div>
          <Link href={'/auth/login'}>Sign In</Link>
        </div>
        </div>

      </WrapperBody>
    </div>
  )
}

export default StatusNav
