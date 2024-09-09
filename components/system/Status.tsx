"use client"
import { getSystemStatus } from "@/api/direct/getSystemStatus";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "lucide-react"
import AnimatedBemoodle from "@/components/animations/AnimatedBemoodle";

export default function Status() {

  const [status, setStatus] = useState<SystemStatus>();

  const handleReq = async () => {
    try {
      const json = await getSystemStatus();
      setStatus(json);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    handleReq();
    const interval = setInterval(() => {
      handleReq();
    }, 300000); // Adjust interval time as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);


  if (!status) {
    return <div className="min-h-screen w-full flex flex-col items-center justify-center"><span>SERVER NOT CONNECTED</span></div>
  }

  return (
    <section className="min-h-screen w-full  flex flex-col items-center">

      <div className="flex flex-col items-center text-center pt-[100px] pb-[40px] w-full border-b border-b-[#0000001f]">
        <div className="flex flex-row-reverse ">
          <div className=""><AnimatedBemoodle className="stroke-black fill-black " width={20} height={20} /></div>
          <div className="text-[4rem] font-bold">{status.status}</div>
        </div>
        <div className="text-[1.4rem] font-medium">{status.msg}</div>
        <div className="flex items-center gap-2 text-[14px]">STATUS UPDATED AT: <span className="font-mono">{status.time}</span> <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div></div></div>
      </div>


      <div className="text-[2rem]  font-semibold mt-6">{status.appName} Servlets</div>
      <div className="mt-[26px] flex flex-col gap-[16px] w-full items-center pb-[40px]">
        {status?.servlets.map((item, key) => {
          const [left, right] = item.split("#");
          return (
            <div key={key} className="w-[556px] mobile:w-[90%] h-[78px] px-[30px] border border-[#0000001f] rounded-md shadow-md flex items-center justify-between">
              <div className="text-[20px] flex items-center gap-3 font-medium"><Container size={24} /> {left}</div>
              <div className="font-medium opacity-65">{right}</div>
            </div>
          )
        })}
      </div>


    </section>
  );
}
