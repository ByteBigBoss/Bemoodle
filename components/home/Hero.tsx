import Image from 'next/image'
import React from 'react'
import WrapperBody from '../wrappers/WrapperBody'
import HeroSearch from '../common/HeroSearch'

const Hero = () => {
    return (
        <div className='w-full h-[342px] relative mt-[78px] z-[100]'>

            <Image src={'/home/hero.png'} alt='Hero' className='object-cover' fill />
            <div className='absolute w-full h-[342px] bg-[#00000026]'>
                <div className='w-full h-full flex flex-col items-center'>

                    <WrapperBody className="h-full justify-center">
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='flex flex-col items-center'>
                                {/* TITLE */}
                                <div className='text-[1.5rem] font-bold text-white'>Find Great Moodles, Faster</div>
                                <div className='text-[15px] font-medium text-white mt-1'>Explore the million of wonderful works of talented artisans.</div>
                                <div className='mt-[21px]'>
                                    <HeroSearch/>
                                </div>
                            </div>
                        </div>
                    </WrapperBody>

                </div>
            </div>

        </div>
    )
}

export default Hero
