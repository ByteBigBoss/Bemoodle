"use client"
import { Checkbox, Image } from '@nextui-org/react'
import React, { useState } from 'react'
import MoodleBadge from '../common/MoodleBadge'
import { Minus, Plus } from 'lucide-react'

const CartItem = () => {

    const [value, setValue] = useState(0);

    const handleChangeValue = ({action}:{action:"minus"|"plus"})=>{
        
        if(action=="minus"){
            if(value!=0){
                setValue((prev)=>prev-1);
            }
        }else if(action=="plus"){
            setValue((prev)=>prev+1);
        }else{
            setValue(1);
        }

    };

    return (
        <div className='bg-white h-[138px] mobile:h-auto box-border p-[26px] flex gap-[20px] items-center rounded-b-[12px]'>

            <div className='flex gap-[16px]'>

                {/* SELECT */}
                <div className=''>
                    <Checkbox color="warning" />
                </div>

                {/* IMAGE */}
                <div className='w-[86px] h-[86px] relative'>
                    <Image src='/home/hero.jpg' alt='CartItem' width={86} height={86} className='rounded-[14px] object-cover' />
                </div>
            </div>

            {/* DETAILS */}
            <div className='w-full flex justify-between items-center mobile:flex-col'>
                {/* LEFT */}
                <div>
                    <div className='max-w-[400px] font-medium line-clamp-2 text-wrap overflow-ellipsis'>Handcrafted Wooden Vase | Black Wood Masteries</div>
                    <div className='flex items-center gap-[16px] pt-[9px]'>
                        <MoodleBadge variants='edition'>Limited Edition</MoodleBadge>
                        <MoodleBadge variants='badge'>Woodworking: Decor</MoodleBadge>
                    </div>
                </div>

                {/* RIGHT */}
                <div className='text-right flex flex-col mobile:flex-row-reverse mobile:justify-between mobile:mt-[8px] mobile:w-full'>
                   <div className=''>
                   <div className='text-[14px] font-medium opacity-65'>$45.00</div>
                   <div className='text-[20px] font-semibold'>$39.99</div>
                   </div>
                    <div className='h-[30px] w-[90px] mobile:text-start flex items-center gap-[12px] justify-center rounded-[6px] border border-[#0000002f] bg-[#F2F2F2] mt-[7px]'>
                        <button onClick={()=>handleChangeValue({action:"minus"})} className='hover:scale-90 transform transition-transform duration-200'><Minus size={16}/></button>
                        <div className='text-[14px] font-bold w-[10px] text-center'>{value}</div>
                        <button onClick={()=>handleChangeValue({action:"plus"})} className='hover:scale-90 transform transition-transform duration-200'><Plus size={16}/></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItem
