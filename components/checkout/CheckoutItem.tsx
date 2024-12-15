import { sofia } from '@/lib/fonts'
import { Image } from '@nextui-org/image'
import React from 'react'

const CheckoutItem = () => {
    return (
        <div className='w-full bg-white border gap-[16px] shadow-sm border-[#0000001f] rounded-[12px] box-border p-[12px] flex items-center'>
            <div className='w-[44px] h-[44px] bg-gray-300 rounded-[10px] relative'>
                <Image src='/home/hero.jpg' alt='CartItem' width={44} height={44} className='rounded-[10px] object-cover' />
            </div>
            <div className='flex flex-col'>
                <div className='text-[12px] font-medium line-clamp-1 text-ellipsis'>Handcrafted Wooden Vase | Black Wood Masteries</div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-[8px] pt-[4px]'>
                        <div className='text-[12px] font-medium opacity-65'>LKR 45.00</div>
                        <div className='text-[10px] font-bold px-[10px] rounded-full border border-[#0000001f] w-fit opacity-65'>x1</div>
                    </div>
                    <div className={`text-[12px] font-medium ${sofia.className}`}>Total: <span className=' opacity-65'>LKR 45.00</span></div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem
