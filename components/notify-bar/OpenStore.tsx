import React from 'react'
import WrapperBody from '@/components/wrappers/WrapperBody'
import MoodleButton from '@/components/common/MoodleButton'

const OpenStore = () => {
  return (
    <div className='w-full h-[80px] mobile:h-[180px] bg-moodleShadeOrange relative overflow-hidden flex flex-col items-center '>

      {/* SHAPES */}
      <div className='w-[102px] h-[102px] rounded-full border-[26px] border-moodleYellow absolute top-[30px] left-[-7px] mobile:hidden'></div>
      <div className='w-[102px] h-[102px] rounded-full border-[26px] border-moodleBlue absolute top-[-60px]  left-[74px]'></div>


      <WrapperBody className=' flex flex-col items-center justify-center h-full'>

        {/* CONTENT */}
        <div className='relative flex flex-col w-full items-center'>
          <div className='w-[102px] h-[102px] rounded-full  border-[26px] border-moodleOrange absolute top-[0px] right-[74px] mobile:right-[-30px]'></div>

          <div className='flex items-center gap-[24px] mobile:gap-[12px] mobile:flex-col'>
          <div className='font-semibold text-center mobile:w-8/12 mobile:text-[20px]'><span className='Open Your Own '>Open Your Own </span><span className='text-moodleOrange opacity-100'>Bemoodle</span><span className='opacity-80'> Store Right Now!</span></div>
          <MoodleButton variants='highlight'>Open Store</MoodleButton>
          </div>
        </div>

      </WrapperBody>

    </div>
  )
}

export default OpenStore
