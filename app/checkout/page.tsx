import CheckoutItem from '@/components/checkout/CheckoutItem'
import MoodleButton from '@/components/common/MoodleButton'
import { Input } from '@/components/ui/input'
import { sofia } from '@/lib/fonts'
import { Image } from '@nextui-org/image'
import { Checkbox } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Checkout = () => {
    return (
        <div className='w-full grid grid-cols-2 min-h-screen mobile:grid-cols-1'>

            <div className='w-full flex flex-col items-center h-full bg-[#FFFEF0] mobile:bg-white border-r border-[#0000001f] justify-center mobile:px-[20px]'>

                <div className='w-[364px] mobile:w-full rounded-[24px] border border-[#0000001f] bg-white shadow-sm '>

                    <div className='w-full border-b border-[#0000001f] px-[26px] py-[20px]'>
                        <div className='text-[1.5rem] font-semibold'>Your Order</div>
                        <div className={`font-medium opacity-65 pt-[5px] ${sofia.className}`}>12 items</div>
                    </div>

                    <div className={"px-[26px] py-[20px] gap-[16px] flex flex-col"}>
                        <div className={` flex justify-between w-full items-center gap-[64px]`}>
                            <div className={`${sofia.className} font-medium opacity-65`}>Subtotal:</div>
                            <div className='from-secondary-50 text-[20px] font-semibold'>LKR 24,999.00</div>
                        </div>
                        <div className={` flex justify-between w-full items-center gap-[64px]`}>
                            <div className={`${sofia.className} font-medium opacity-65`}>Shipping:</div>
                            <div className='from-secondary-50  font-medium opacity-65'>LKR 24,999.00</div>
                        </div>

                    </div>

                    <div className='w-full border-t border-[#0000001f] px-[26px] py-[20px] flex justify-between items-center'>
                        <div className={`${sofia.className} font-medium opacity-65`}>Total:</div>
                        <div className={`font-semibold pt-[5px] text-[24px]`}>LKR 24,999.00</div>
                    </div>

                </div>

                {/* ITEMS */}
                <div className='w-full mobile:max-w-none max-w-[364px] mt-[20px] gap-[10px] flex flex-col'>
                    {["", "", ""].map(() => (
                       <CheckoutItem/>
                    ))}
                </div>

            </div>


            {/* SHIPPING DETAILS */}
            <div className='w-full flex flex-col items-center h-full py-[86px]'>

                <div className='w-full max-w-[466px]'>

                    {/* TITLE */}
                    <div className=''>
                        <div className='text-[20px] font-semibold'>Shipping Details</div>
                        <div className={`${sofia.className} font-medium opacity-65 pt-[6px]`}>Complete your purchase item by providing your Shipping Details</div>
                    </div>

                    <div className={`${sofia.className} text-[14px] font-medium mt-[30px]`}>
                        <Checkbox color="warning" /><span> Same as your current address?</span>
                    </div>

                    <div className='mt-[30px] w-full flex flex-col gap-[24px]'>

                        {/* NAME */}
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <div className='text-[14px] pb-2 opacity-60'>First Name</div>
                                <Input type='text' placeholder='Eon' className='font-medium'

                                />
                            </div>
                            <div>
                                <div className='text-[14px] pb-2 opacity-60'>Last Name</div>
                                <Input type='text' placeholder='Dave' className='font-medium'

                                />
                            </div>
                        </div>


                        {/* EMAIL */}
                        <div>
                            <div className='text-[14px] pb-2 opacity-60'>Email</div>
                            <Input type='email' placeholder='you@domain.com' className='font-medium'

                            />
                        </div>

                        <div>
                            <div className='text-[14px] pb-2 opacity-60'>Address Line 1</div>
                            <Input type='text' placeholder='House number and street name' className='font-medium'

                            />
                        </div>

                        <div>
                            <div className='text-[14px] pb-2 opacity-60'>Address Line 2</div>
                            <Input type='text' placeholder='Apartment, suit, unit, etc. (Optional)' className='font-medium'

                            />
                        </div>

                       
                         <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <div className='text-[14px] pb-2 opacity-60'>Postal Code</div>
                                <Input type='text' placeholder='XXXXX' className='font-medium'

                                />
                            </div>
                            <div>
                                <div className='text-[14px] pb-2 opacity-60'>Mobile</div>
                                <Input type='text' placeholder='07X XXX XXXX' className='font-medium'

                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-end gap-[20px] pt-[30px]'>
                           <Link href={"/cart"}> <MoodleButton variants='view'>Cancel</MoodleButton></Link>
                            <Link href={"/checkout/complete"}><MoodleButton variants='action'>Process to Checkout</MoodleButton></Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Checkout
