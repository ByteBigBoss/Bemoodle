"use client"
import CheckoutItem from '@/components/checkout/CheckoutItem'
import MoodleButton from '@/components/common/MoodleButton'
import CompleteIcon from '@/components/icons/Complete'
import Confetti, { ConfettiRef } from '@/components/magicui/confetti'
import { sofia } from '@/lib/fonts'
import { Image } from '@nextui-org/image'
import { ChevronRight, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const CheckoutComplete = () => {

    const confettiRef = useRef<ConfettiRef>(null);


        const fire = () => {
            confettiRef.current?.fire({});
        }

    
    

    useEffect(()=>{
        fire();
    
    },[]);

    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-center pt-[100px] pb-[60px]'>

            <div className='flex flex-col items-center gap-[12px]'>
                <CompleteIcon />
                <div className={`${sofia.className} font-medium opacity-65 text-[20px]`}>Amazing!</div>
            </div>

            <div className='text-center mt-4'>
                <div className='text-[26px] font-bold '>Congratulations</div>
                <div className='text-[20px] font-medium'>Your Order is Processing</div>
            </div>

            <Confetti
                ref={confettiRef}
                className="absolute left-0 top-0 z-0 size-full"
            />
            <div className='mt-[10px]'>
                <div className='text-[14px] font-medium'><span className='opacity-65'>ORDER ID:</span> <span className={`${sofia.className} font-semibold`}>#0001</span></div>
            </div>

            <div className='flex items-center gap-[16px] pt-[24px] pb-[40px] z-[200]'>
                <Link href={"/cart"}><MoodleButton variants='view' IconDirection='right' Icon={<ShoppingCart className='ml-[4px]' size={18} />}>Back to Cart</MoodleButton></Link>
                <Link href={"/"}><MoodleButton variants='action' IconDirection='right' Icon={<ChevronRight size={18} />}>Continue Shopping</MoodleButton></Link>
            </div>

            {/* ITEM CONTAINER */}
            <div className='border-t-2 border-[#0000003e] border-dashed'>
                <div className='flex flex-col gap-[10px] mt-[30px]'>
                    {["", ""].map(() => (
                        <CheckoutItem />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CheckoutComplete
