import { Button } from '@nextui-org/react';
import { Box, MapPin, Phone, Pin, UserIcon } from 'lucide-react'
import React from 'react'

interface AddressProps {
    id: number;
    fname: string;
    lname: string;
    line1: string;
    line2: string;
    pcode: string;
    mobile: string;
    country: string;
    state: string;
    city: string;
}

const AddressCard = ({ id, fname, lname, line1, line2, pcode, mobile, country, state, city }: AddressProps) => {
    return (
       <Button className='min-h-0 min-w-0 bg-transparent rounded-[12px] p-0 m-0 w-full h-auto text-black '>
         <div className='w-full bg-white drop-shadow-sm border rounded-[12px] p-[16px] flex flex-col items-start'>
            <div className='font-semibold pb-2'>Address {id}</div>

            {/* FIRST NAME & LAST NAME & MOBILE*/}
            <div className='flex gap-5 flex-wrap'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 text-[12px] font-medium opacity-40'>
                        <UserIcon size={14} />
                        <span>First Name: </span>
                    </div>
                    <div className='text-[12px] font-medium opacity-80'>{fname}</div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 text-[12px] font-medium opacity-40'>
                        <UserIcon size={14} />
                        <span>Last Name: </span>
                    </div>
                    <div className='text-[12px] font-medium opacity-80'>{lname}</div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 text-[12px] font-medium opacity-40'>
                        <Phone size={14} />
                        <span>Mobile Number: </span>
                    </div>
                    <div className='text-[12px] font-medium opacity-80'>{mobile}</div>
                </div>
            </div>


            {/* Address */}
            <div className='flex flex-col gap-2 mt-2'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 text-[12px] font-medium opacity-40'>
                        <MapPin size={14} />
                    </div>
                    <div className='text-[12px] font-medium opacity-80'>{line1}, {line2}, {city}, {pcode}, {state}, {country}</div>
                </div>
            </div>

        </div>
       </Button>
    )
}

export default AddressCard
