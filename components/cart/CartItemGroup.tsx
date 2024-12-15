import React from 'react'
import CartItem from './CartItem'
import { Image } from '@nextui-org/image'
import { Checkbox } from '@nextui-org/react'

const CartItemGroup = () => {
    return (
        <div className='w-full border border-[#0000001f] rounded-[12px] shadow-sm'>
            {/* GROUP HEADER */}
            <div className='w-full bg-[#FCFCFC] h-[70px] rounded-t-[12px]  px-[26px] box-border border-b border-[#0000001f] flex gap-[16px] items-center'>
                <Checkbox color="warning" />
                <div className='flex gap-[10px]'>
                <div className='w-[30px] h-[30px] rounded-full bg-[#D9D9D9]'><Image className=' rounded-full object-cover' width={30} height={30} src={'/home/hero.jpg'} alt='Store Image' /></div>
                <div className='leading-[14px]'>
                    <div className='text-[10px] font-medium opacity-65'>Work by</div>
                    <div className='text-[12px] font-medium'>@<span>Username</span></div>
                </div>
                </div>
            </div>

            {/* ITEMS */}
            <div className='w-full'>
                <CartItem />
                <CartItem />
            </div>

        </div>
    )
}

export default CartItemGroup
