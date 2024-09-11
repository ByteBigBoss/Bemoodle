"use client"
import AnimatedBemoodle from '@/components/animations/AnimatedBemoodle'
import FadeIn from '@/components/animations/fade-in'
import { righteous } from '@/lib/fonts'
import { Image } from '@nextui-org/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { useRouter } from 'next/navigation'
import { doVerifyAccount } from '@/api/direct/VerifyAccount'

const Verify = () => {

  const [verification, setVerification] = useState('');

  //ERROR MESSAGE
  const [msg, setMsg] = useState<any>("Please enter the verification code sent to your inbox.");
  const [isError, setIsError] = useState(false);

  //NAVIGATION
  const router = useRouter();

  const handleVerification = async () => {

    console.log(verification);
    const VerifyDTO = {
      verification
    }

    const json: ResDTO = await doVerifyAccount(VerifyDTO);

    if (json.success) {
      console.log(json);
      router.push("/", { scroll: true });
    } else {

      if (json.content as any === "Unverified") {
        router.push("/auth/signin", { scroll: true });
      }
      setIsError(true);
      setMsg(json.content);
      console.log(json);
    }
  }


  return (
    <div className='w-full min-h-screen flex box-border pr-[480px] wide:pr-[680px] mobile:pr-0 mid:pr-0'>

      {/* LOGIN FORM */}
      <div className='flex-1 min-h-screen box-border p-[80px] mobile:px-[40px]'>
        <div className='flex flex-col justify-between h-full items-start'>
          <div className='flex flex-col items-start w-full max-w-[466px] justify-center h-full'>

            {/* LOGO */}
            <AnimatedBemoodle className="stroke-black fill-black " width={36} height={36} />
            <FadeIn
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className='mt-5 text-center flex flex-col items-start'>
                <div className='text-[20px]'>Verify Your <span className={`${righteous.className} `}>Bemoodle</span> Account</div>
                <div className='text-[14px] text-start   mt-2 opacity-60 mobile:w-10/12'>Please verify your email to secure your account and unlock all features. Click the button below to complete the process.</div>
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
                  <div className={`text-[14px] pb-3  font-medium ${isError && "text-rose-500 border-rose-500"}`}>Verification Code</div>
                  <InputOTP
                    maxLength={6}
                    value={verification}
                    onChange={(value) => setVerification(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <div className={`text-[12px] font-medium  pt-4 ${isError ? "text-rose-500 border-rose-500 opacity-100" : "opacity-60"}`}>{msg}</div>
                </div>


                <div className='flex items-center gap-4 pt-8'>
                  <Link href={"/auth/signin"} className='text-[12px] font-medium text-[#262626]'><Button className='text-[12px]'>SigIn</Button></Link>
                  <Button className='text-[12px] bg-moodleYellow text-black hover:text-white' onClick={handleVerification}>Verify & Continue</Button>
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


export default Verify


