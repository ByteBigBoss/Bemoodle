"use client"
import AnimatedBemoodle from '@/components/animations/AnimatedBemoodle'
import FadeIn from '@/components/animations/fade-in'
import Bemoodle from '@/components/icons/Bemoodle'
import { Input } from '@/components/ui/input'
import { k2d, righteous } from '@/lib/fonts'
import { Image } from '@nextui-org/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Input as NextInput } from "@nextui-org/input";
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { ScrollPanel } from 'primereact/scrollpanel';
        
const Login = () => {
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <div className='w-full min-h-screen flex box-border pr-[480px] wide:pr-[680px] mobile:pr-0 mid:pr-0'>

      {/* LOGIN FORM */}
      <div className='flex-1 min-h-screen box-border p-[80px] mobile:px-[40px]'>
        <div className='flex flex-col justify-between h-full items-center'>
          <div className='flex flex-col items-center w-full max-w-[466px] justify-center h-full'>

            {/* LOGO */}
            <AnimatedBemoodle className="stroke-black fill-black " width={36} height={36} />
            <FadeIn
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className='mt-5 text-center flex flex-col items-center'>
                <div className='text-[20px]'>Login to your <span className={`${righteous.className} `}>Bemoodle</span> Account</div>
                <div className='text-[14px] line-clamp-2 w-8/12 mt-2 opacity-60 mobile:w-10/12'>Become Bemoodle Member and Explore & Buy Millions of Artisan Works.</div>
              </div>
            </FadeIn>

            {/* FIELDS */}
            <FadeIn
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className='w-full'
            >
              <div className='w-full flex flex-col mt-12 gap-5 '>

                {/* EMAIL */}
                <div>
                  <div className='text-[14px] pb-2 opacity-60'>Username</div>
                  <Input type='email' placeholder='Email or Username' className='font-medium' />
                </div>

                <div>
                <div className='text-[14px] pb-2 opacity-60'>Password</div>
                <div className='w-full relative'>
                  <Input
                    type={viewPassword ? "text" : "password"}
                    placeholder="Must be least 8 characters"
                    onChange={(evt) => {
                      evt.preventDefault;
                      setPassword(evt.target.value as string);
                    }}
                  />
                  {viewPassword ?
                    <EyeOff onClick={() => setViewPassword(false)} className="w-[1rem] h-[1rem] absolute right-3 top-[10px] hover:opacity-60 transform transition-transform duration-300 cursor-pointer" />
                    :
                    <Eye onClick={() => setViewPassword(true)} className="w-[1rem] h-[1rem] absolute right-3 top-[10px] hover:opacity-60 transform transition-transform duration-300 cursor-pointer" />
                  }
                </div>
                </div>


                <div className='flex items-center justify-between pt-6'>
                  <Link href={"/auth/signup"} className='text-[12px] font-medium text-[#262626]'>Not a member?</Link>
                  <Button className='text-[12px]'>Login</Button>
                </div>

              </div>
            </FadeIn>

          </div>


          {/* SIGNUP FOOTER */}
          <FadeIn
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='w-full'
          >
            <div className='w-full flex items-center justify-between text-[12px] opacity-50 h-fit pt-20'>
              <Link href={"/"}>Bemoodle</Link>
              <div className='gap-8 flex items-center'>
                <Link href={"/#"}>Privacy</Link>
                <Link href={"/#"}>Terms</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* IMAGE */}
      <div className='mobile:hidden mid:hidden fixed right-0'>
        <Image src='/auth/auth.png' alt='SignUp' className='min-h-screen w-[480px] wide:w-[680px] rounded-none object-cover' />
      </div>

    </div>
  )
}


export default Login
