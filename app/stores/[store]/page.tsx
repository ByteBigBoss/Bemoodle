"use client"
import MoodleButton from '@/components/common/MoodleButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Dashboard = ({ params }: { params: { store: string } }) => {

  const storeName = params.store;

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      
        <div className='text-[1.5rem] font-semibold text-center mobile:text-[1.2rem] mobile:w-8/12'>Hello {storeName}, Welcome to your Artisan Store!</div>
        <div className='text-[14px] mt-1 mobile:text-[12px]'>Sell your talented works to valued customers.</div>
       <Link href={"/stores/"+storeName+"/products"}> <MoodleButton variants='action' className='mt-6'>Add Product</MoodleButton></Link>

    </div>
  )
}

export default Dashboard
