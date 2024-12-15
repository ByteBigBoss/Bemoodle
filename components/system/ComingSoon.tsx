
import { cn } from '@/lib/utils'
import React from 'react'
import WrapperBody from '../wrappers/WrapperBody'
import { ComingSoonContent } from '@/config/site'
import Image from 'next/image'
import CountdownTimer from './CountdownTimer'

const ComingSoon = () => {
    return (
        <div className='min-h-screen w-full flex flex-col relative'>

            <Image src={"/sys/cm_bg.jpg"} alt='ComingSoon' fill className='object-cover ' />

            <div className='w-full min-h-[280px] py-[80px] flex-1  flex items-center z-[100] text-white'>
                <WrapperBody>

                    <div className='w-full flex flex-col items-center pb-[60px]'>
                        <CountdownTimer targetDate={ComingSoonContent.time} />
                    </div>
                    <div className='flex items-center justify-between w-full mid:flex-col mobile:flex-col'>

                        {/* BRICKS */}
                        <div className='flex flex-col gap-[8px] mobile:hidden mid:hidden'>
                            <Bricks count={10} />
                            <Bricks count={10} />
                        </div>

                        {/* TEXT BOX */}
                        <div className='text-center '>
                            <div className={cn(
                             
                                "text-[80px] mobile:text-[3rem] mobile:leading-[40px] font-bold text-softCream leading-[70px] uppercase"
                            )}>{ComingSoonContent.title}</div>
                            <div className={cn(
                             
                                "text-[18px] mobile:text-[15px] pt-2 text-softCream"
                            )}>{ComingSoonContent.subtitle}</div>
                        </div>

                        {/* BRICKS */}
                        <div className='flex gap-[8px] mid:pt-[30px] mobile:pt-[30px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <Bricks count={10} />
                            <Bricks count={10} />
                        </div>
                        <div className='hidden flex-col gap-[8px] mid:flex mobile:flex'>
                            <Bricks count={10} />
                            <Bricks count={10} />
                        </div>
                        </div>


                    </div>

                </WrapperBody>
            </div>

        </div>
    )
}

export default ComingSoon

interface BricksProps {
    count: number;
    className?: string;
}

export const Bricks = ({
    count,
    className = "w-[10px] h-[10px] bg-softCream opacity-65"
}: BricksProps) => {

    return (
        <div className='flex gap-[6px]'>
            {Array.from({ length: count }).map((_, key) => (
                <div key={key} className={className}></div>
            ))}
        </div>
    )

}