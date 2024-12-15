import { getEnv } from '@/lib/utils'
import { Image } from '@nextui-org/image'
import Link from 'next/link'
import React from 'react'

const Product = ({ title, store, price, artisan, id,created_at, description, productStatus,qty,subCategory }: StoreProduct) => {
    return (
        <Link href={`/dp/${title}?id=${id}`}>
            <div className='w-[268px] rounded-[20px] bg-white shadow-sm border border-[#0000001f] hover:shadow-md cursor-pointer'>
                <div className='w-full h-[200px] relative'>
                    <Image width={268} height={200} alt='Product Image' src={`http://localhost:8080/Bemoodle/stores/${store.name}/products/p-${id}/image1.png`} className='object-cover hover:zoom-in-125 rounded-b-none  rounded-t-[20px]' />

                </div>
                {/* DETAILS */}
                <div className='py-[20px] px-[16px]'>

                    <div className='flex items-center gap-[12px]'>
                        <div className='w-[24px] h-[24px] relative rounded-full flex flex-col items-center justify-center bg-moodleYellow border border-[#0000001f]'><Image width={24} height={24} alt='Store Image' className='object-cover' /><span className='text-[10px] pt-[2px] pl-[1px] text-center font-bold absolute'>{store.name[0].toUpperCase()}</span></div>
                        <div className='leading-[12px]'>
                            <div className='text-[8px] opacity-65'>Work by</div>
                            <div className='text-[10px] font-medium'>@<span>{store.name}</span></div>
                        </div>
                    </div>

                    <div>
                        <div className='line-clamp-1 text-ellipsis font-medium text-[14px] pt-[16px]'>{title}</div>
                    </div>

                    <div className='flex items-center gap-[8px] pt-[6px]'>
                        <div className='text-[20px] font-semibold'>LKR {price}</div>
                        <div className='text-[14px] font-medium line-through opacity-65'>{price + 500}</div>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Product
