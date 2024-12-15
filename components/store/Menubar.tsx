"use client"
import { SidebarContent } from '@/config/artisan-sidebar';
import { righteous, sofia } from '@/lib/fonts';
import Link from 'next/link';
import React, { useState } from 'react'
import ProfileIcon from '../icons/Profile';
import ProductsIcon from '../icons/Products';
import { Boxes } from 'lucide-react';
import { usePathname } from 'next/navigation';
import DashboardIcon from '../icons/Dashboard';

const Menubar = () => {

    const [id, setId] = useState(0);

    const [selected, setSelected] = useState("Dashboard");

    const path = usePathname();
    const storeMatch = path.match(/\/stores\/([^\/]*)/);
    const storeName = storeMatch ? storeMatch[1] : null;

    return (
        <div className='menubar bg-black flex items-center'>
            <div className=' text-white  flex items-center justify-center uppercase pl-[20px]'><Link href={'/'} className={`${righteous.className} font-bold text-[18px] `}>Bemoodle</Link></div>

            <div className='flex'>
                {SidebarContent.map((data, key) => {
                    const hrefWithStore = data.href.replace("[store]", storeName || "");
                    const endPath = data.end.replace("[store]", storeName || "");
                    return (
                        <div key={key}
                            onClick={() => setSelected(data.end)}
                            className={`
        ${path.endsWith(endPath) && "bg-moodleYellow text-black"} 
    text-start h-[56px] group flex justify-center border-l border-[#ffffff1f] hover:bg-moodleShadeYellow hover:text-black cursor-pointer
    `}>
                            <Link
                                href={hrefWithStore}
                                onClick={() => setId(data.ID)}
                                className={`${sofia.className} w-full text-[20px] line-clamp-2  flex items-center px-[12px] gap-[12px]`}
                            >
                                {hrefWithStore.endsWith("/") ? <DashboardIcon className={`${path.endsWith(endPath) ? "fill-black" : "fill-white"} group-hover:fill-black`} />
                                    : hrefWithStore.endsWith("/profile") ? <ProfileIcon className={`${path.endsWith(endPath) ? "fill-black" : "fill-white"} group-hover:fill-black`} />
                                        : hrefWithStore.endsWith("/products") ? <ProductsIcon className={`${path.endsWith(endPath) ? "fill-black" : "fill-white"} group-hover:fill-black`} />
                                            : <Boxes size={24} />
                                }
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menubar
