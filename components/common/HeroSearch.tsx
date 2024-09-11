import React from 'react'
import MoodleButton from '@/components/common/MoodleButton'
import { Search } from 'lucide-react'

const HeroSearch = () => {
  return (
    <div className='w-[626px] h-[46px] bg-white rounded-[6px] flex items-center mobile:w-full'>
      
      {/* CHOOSE CATEGORY */}
      <div className='h-full w-[160px] border-r border-[#0000001f]'>

      </div>

      <div className='flex-1 h-full px-[18px]'>
        <div className='w-full h-full flex items-center'>
        <input type="text" className='bg-white text-[14px] font-medium w-full focus:outline-none'  placeholder='Searh all moodles'/>
        </div>
      </div>

      <div className='py-[8px] pr-[8px]'>
        <MoodleButton Icon={<Search size={16}/>} variants='icon'>Search</MoodleButton>
      </div>

    </div>
  )
}

export default HeroSearch
