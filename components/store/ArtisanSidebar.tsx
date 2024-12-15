"use client"
import { SidebarContent } from '@/config/artisan-sidebar'
import { rajdhani, righteous, sofia } from '@/lib/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { ModeToggle } from '../theme/theme-toggle'
import { Boxes, CornerDownRight } from 'lucide-react'
import DashboardIcon from '../icons/Dashboard'
import ProfileIcon from '../icons/Profile'
import ProductsIcon from '../icons/Products'

const ArtisanSidebar = () => {

    const [id, setId] = useState(0);

    const [selected, setSelected] = useState("Dashboard");

    const path = usePathname();
    const storeMatch = path.match(/\/stores\/([^\/]*)/);
    const storeName = storeMatch ? storeMatch[1] : null;

    return (
        <div className='flex flex-col w-full pb-[40px]'>
            <div className='w-full h-[144px] border-b border-[#808080] flex items-center justify-center uppercase'><Link href={'/'} className={`${righteous.className} font-bold text-[32px] `}>Bemoodle</Link></div>
            {SidebarContent.map((data, key) => {
                const hrefWithStore = data.href.replace("[store]", storeName || "");
                const endPath = data.end.replace("[store]", storeName || "");
                return (
                    <div key={key}
                        onClick={() => setSelected(data.end)}
                        className={`
                        ${path.endsWith(endPath) && "bg-moodleYellow text-black"} 
                    text-start h-[72px] group flex justify-center border-b border-[#808080] hover:bg-moodleShadeYellow hover:text-black cursor-pointer
                    `}>
                        <Link
                            href={hrefWithStore}
                            onClick={() => setId(data.ID)}
                            className={`${sofia.className} w-full text-[20px] line-clamp-2  flex items-center pl-[16px] gap-[12px]`}
                        >
                            {hrefWithStore.endsWith("/") ? <DashboardIcon className={`${path.endsWith(endPath) ? "fill-black" : "fill-white"} group-hover:fill-black`} />
                                : hrefWithStore.endsWith("/profile") ? <ProfileIcon className={`${path.endsWith(endPath) ? "fill-black" : "fill-white"} group-hover:fill-black`} />
                                    : hrefWithStore.endsWith("/products") ? <ProductsIcon className={`${path.endsWith(endPath) ? "fill-black" : "fill-white"} group-hover:fill-black`} />
                                        : <Boxes size={24} />
                            }
                            {data.name}</Link>
                    </div>
                )
            })}


        </div>
    )
}

export default ArtisanSidebar
