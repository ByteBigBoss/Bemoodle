import { BEMOODLE_API, cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import {motion} from 'framer-motion';

interface MoodleCategoryCardProps {
    id: number;
    title: string;
    description: string;
    step:number;
    offset?:number;
}

const MoodleCategoryCard = ({ id, title, description, step, offset=200 }: MoodleCategoryCardProps) => {

    const [show, setShow] = useState(false);

    return (
        <motion.div
        initial={{x:0}}
          animate={{x: step * -offset}}
         className='relative w-[210px] h-[220px] rounded-[20px] flex-shrink-0 cursor-pointer group'>
            <Image fill  alt='Product Image' src={`${BEMOODLE_API}/category/${id}/main.jpg`} className='object-cover hover:zoom-in-125  rounded-[20px]' />

            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className={cn(
                'z-[60]  bottom-[20px] left-[20px] text-white right-[20px] group absolute hidden group-hover:block'

            )} >
                <div className='text-[14px] font-semibold'>{title}</div>
                <div className='text-[12px] font-medium opacity-80 line-clamp-2'>{description}</div>
            </div>

            <div className='from-black rounded-b-[20px] transition-colors duration-200 to-transparent bg-gradient-to-t absolute bottom-0 left-0 w-full h-[60%] hidden group-hover:block'></div>
        </motion.div>
    )
}

export default MoodleCategoryCard
