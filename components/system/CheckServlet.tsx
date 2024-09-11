"use client"
import { getHomeContent } from '@/api/direct/getHomeContent';
import React, { useEffect, useState } from 'react'
import WrapperBody from '@/components/wrappers/WrapperBody';
import MoodleBadge from '@/components/common/MoodleBadge';

const CheckServlet = () => {

    const [homeContent, setHomeContent] = useState<HomeContent>();

    const handleReq = async () => {
      try {
        const json = await getHomeContent();
        setHomeContent(json);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    useEffect(() => {
        handleReq();
    }, []);

    if (!homeContent) {
        return <div className="min-h-screen w-full flex flex-col items-center justify-center"><span>SERVER NOT CONNECTED</span></div>
    }

    const [msg, time]= homeContent.content.split("SERVER CONNECTED:");

    return (
        <div className=' w-full  flex flex-col items-center   text-white py-[40px]'>
            <WrapperBody>
                <div className='w-full h-[400px] bg-black rounded-xl box-border p-20 flex flex-col items-center justify-center'>
                <div className='text-[1.2rem] font-medium'>{msg}</div>
                <div className='text-[1.2rem] opacity-80'>{time}</div>
                <div className='opacity-60 text-[14px]'>{homeContent.Servlet}</div>
                <MoodleBadge className='bg-moodleYellow px-5 py-2 text-[12px] font-medium rounded-md text-black mt-4'>Servlet Passed!</MoodleBadge>
                </div>
            </WrapperBody>
        </div>
    )
}

export default CheckServlet
