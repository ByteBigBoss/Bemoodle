"use client"
import React, { useEffect } from 'react'
import WrapperBody from '@/components/wrappers/WrapperBody';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { sofia } from '@/lib/fonts';
import CartItemGroup from '@/components/cart/CartItemGroup';
import Link from 'next/link';


const Cart = () => {
    // const items = [{ label: 'Cart' }];
    // const home = { icon: 'pi pi-home', url: 'https://primereact.org' }

    useEffect(()=>{

        const fetchCartItems = async ()=>{

        };

        fetchCartItems();

    },[]);

    return (
        <div className='pt-[78px] box-border w-full flex flex-col items-center pb-[40px]'>
            <WrapperBody>

                {/* BREADCRUMB */}
                <div className={`pt-[26px] ${sofia.className} text-[15px] font-medium`}>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className='text-black'>Cart</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />

                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* PAGE TITLE */}
                <div className='pt-[30px]'>
                    <div className='text-[1.5rem] font-semibold'>Cart</div>
                    <div className='text-[14px] pt-[6px]'>Checkout your items</div>
                </div>


                <div className='w-full flex gap-[20px] pt-[30px] mobile:flex-col-reverse mobile:items-center'>
                    {/* CART ITEMS */}
                    <div className='max-w-[748px] h-auto  flex flex-col gap-[10px]'>
                        <CartItemGroup />
                        <CartItemGroup />
                        <CartItemGroup />
                    </div>

                    <div className='max-w-[364px] mobile:max-w-none mobile:w-full w-full'>
                        <div className='w-full rounded-[24px] border border-[#0000001f] shadow-sm box-border p-[26px]'>
                            <div className='text-[18px] font-semibold'>Order Summary</div>

                            <div className='flex justify-between w-full items-center gap-[64px] mt-[20px]'>
                                <div className='font-medium opacity-65'>Subtotal:</div>
                                <div className='from-secondary-50 text-[1.5rem] font-semibold'>LKR 24,999.00</div>
                            </div>

                            <Link href={"/checkout"}><button className='w-full mt-[24px] h-[48px] rounded-full bg-black text-white font-semibold'>Checkout (3)</button></Link>
                        </div>
                    </div>
                </div>

            </WrapperBody>
        </div>
    )
}

export default Cart
