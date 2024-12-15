'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { gugi } from '@/lib/fonts';

interface CountdownTimerProps {
  targetDate: string; // Format: 'YYYY-MM-DD'
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateInitialCountdown = (): number => {
    const targetTime = new Date(targetDate).getTime();
    const currentTime = new Date().getTime();
    const initialCountdown = Math.floor((targetTime - currentTime) / 1000);

    return initialCountdown > 0 ? initialCountdown : 0;
  };

  // Use useMemo to avoid recalculating the initial countdown on every render
  const initialCountdown = useMemo(calculateInitialCountdown, [targetDate]);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    // Set countdown when component mounts
    setCountdown(initialCountdown);

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown && prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialCountdown]);

  const formatTime = (seconds: number): { days: number; hours: number; minutes: number; seconds: number } => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return { days, hours, minutes, seconds: remainingSeconds };
  };

  if (countdown === null) return null; // Prevent rendering on server-side

  const { days, hours, minutes, seconds } = formatTime(countdown);

  return (
    <div className='flex items-center gap-[12px] mt-[43px] mobile:grid mobile:grid-cols-4 px-[30px] mobile:text-[6px]'>
      {/* Days */}
      <div className='w-[100px] h-[100px] py-[4px] px-[8px] mobile:w-auto mobile:h-auto flex justify-center items-center flex-col gap-[0px] rounded-[4px] border backdrop-blur-[6px]'>
        <div className='text-[3em] font-bold leading-[64px] text-center'>{String(days).padStart(2, '0')}</div>
        <div className={`text-[14px] mobile:text-[12px]  ${gugi.className}`}>DAYS</div>
      </div>

      {/* Hours */}
      <div className='w-[100px] h-[100px] py-[4px] px-[8px] mobile:w-auto mobile:h-auto flex justify-center items-center flex-col gap-[0px] rounded-[4px] border backdrop-blur-[6px]'>
        <div className='text-[3em] font-bold leading-[64px] text-center'>{String(hours).padStart(2, '0')}</div>
        <div className={`text-[14px] mobile:text-[12px]  ${gugi.className}`}>HOURS</div>
      </div>

      {/* Minutes */}
      <div className='w-[100px] h-[100px] py-[4px] px-[8px] mobile:w-auto mobile:h-auto flex justify-center items-center flex-col gap-[0px] rounded-[4px] border backdrop-blur-[6px]'>
        <div className='text-[3em] font-bold leading-[64px] text-center'>{String(minutes).padStart(2, '0')}</div>
        <div className={`text-[14px] mobile:text-[12px]  ${gugi.className}`}>MIN</div>
      </div>

      {/* Seconds */}
      <div className='w-[100px] h-[100px] py-[4px] px-[8px] mobile:w-auto mobile:h-auto flex justify-center items-center flex-col gap-[0px] rounded-[4px] border backdrop-blur-[6px]'>
        <div className='text-[3em] font-bold leading-[64px] text-center'>{String(seconds).padStart(2, '0')}</div>
        <div className={`text-[14px] mobile:text-[12px]  ${gugi.className}`}>SEC</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
