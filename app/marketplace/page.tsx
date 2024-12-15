"use client"
import MoodleButton from '@/components/common/MoodleButton'
import { AppSidebar } from '@/components/marketplace/app-sidebar'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import WrapperBody from '@/components/wrappers/WrapperBody'
import { Button } from '@nextui-org/react'
import { Badge, ChartBar, ChartColumnStacked, ChevronLeft, ChevronUp, Clock, Currency, DollarSign, Filter, Package, Search, Settings2, X } from 'lucide-react'
import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"

const Marketplace = () => {

  //*** APPLIED FILTERS ==============>
  const [getAppliedFilters, setAppliedFilters] = useState([]);

  //PRICE
  const [getPrice, setPrice] = useState<number[]>([10000]);

  const handlePriceValueChange = (newValue: number[]) => {
    setPrice(newValue); 
  };

  return (
    <div className='w-full pt-[78px] min-h-screen'>

      {/* SEARCHBAR */}
      <section className='w-full border-b py-[16px]'>
        <WrapperBody>
          <div className='w-full bg-white drop-shadow-sm flex items-center rounded-[6px] border h-[46px]'>

            {/* CHOOSE CATEGORY */}
            <div className='h-full w-[160px] border-r border-[#0000001f]'>
            <Select >
                  <SelectTrigger className="w-full rounded-r-none h-full border-none">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
            </div>

            <div className='flex-1 h-full px-[18px]'>
              <div className='w-full h-full flex items-center'>
                <input type="text" className='bg-white text-[14px] font-medium w-full focus:outline-none' placeholder='Searh all moodles' />
              </div>
            </div>

            <div className='py-[8px] pr-[6px]'>
              <MoodleButton IconDirection='left' Icon={<Search size={16} />} variants='icon'>Search</MoodleButton>
            </div>

          </div>
        </WrapperBody>
      </section>

      <section className='w-full '>

        {/* SIDEBAR => ADVANCED SEARCH OPTIONS */}
        <div className='w-[300px] border-r flex-1 min-h-[calc(100vh-156px)]'>

          {/* TITLE & TRIGGER */}
          <div className='flex items-center justify-between border-b px-[20px] py-[30px]'>
            <div className='flex items-center gap-2'>
              <Filter size={20} />
              <div className='text-[1.2rem] font-bold'>Filters</div>
            </div>
            <Button className='min-h-0 min-w-0 h-auto p-0 m-0 bg-transparent text-black'>
              <ChevronLeft size={20} />
            </Button>
          </div>

          {/* APPLIED FILTERS */}
          <div className='border-b px-[20px] py-[30px]'>
            <div className='flex items-center justify-between '>
              <div className='flex items-center gap-2'>
                <div className='text-[12px] font-semibold'>Applied filters</div>
              </div>
              <Button className='min-h-0 min-w-0 h-fit w-fit p-0 m-0 rounded-full pr-1 pl-2 border  bg-transparent text-black'>
                <div className='text-[10px] text-black/65'>Clear All</div>
                <X size={13} />
              </Button>
            </div>

            <div className='flex gap-[10px] flex-wrap pt-[12px]'>
              {Array.from({ length: 2 }).map((f, idx) => (
                <div key={idx} className='bg-black text-white px-2 py-1 rounded-[8px] flex items-center gap-[6px]'>
                  <div className='text-[12px] font-semibold'>Woodworking </div>
                  <Button className='min-h-0 min-w-0 h-fit w-fit p-0 m-0 bg-transparent'>
                    <X size={15} />
                  </Button>
                </div>
              ))}
            </div>

          </div>

          {/* OPTIONS */}
          <div className='flex flex-col'>

            {/* CATEGORY */}
            <div className='flex flex-col  px-[20px] py-[26px]'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                  <ChartColumnStacked size={14} />
                  <div className='text-[14px] font-semibold'>Category</div>
                </div>
                <Button className='min-h-0 min-w-0 h-auto p-0 m-0 bg-transparent text-black'>
                  <ChevronUp size={16} />
                </Button>
              </div>

              {/* SELECT */}
              <div className="pt-3">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* SUB CATEGORY */}
            <div className='flex flex-col  px-[20px] pb-[26px]'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                  <ChartBar size={14} />
                  <div className='text-[14px] font-semibold'>Sub Category</div>
                </div>
                <Button className='min-h-0 min-w-0 h-auto p-0 m-0 bg-transparent text-black'>
                  <ChevronUp size={16} />
                </Button>
              </div>

              {/* SELECT */}
              <div className="pt-3">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>


            {/* SPECIAL STATUS */}
            <div className='flex flex-col  px-[20px] pb-[26px]'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                  <Badge size={14} />
                  <div className='text-[14px] font-semibold'>Special Status</div>
                </div>
                <Button className='min-h-0 min-w-0 h-auto p-0 m-0 bg-transparent text-black'>
                  <ChevronUp size={16} />
                </Button>
              </div>

              {/* OPTIONS */}
              <div className="pt-3 flex flex-wrap gap-x-2 gap-y-[6px]">
                {["Limited Edition", "Special Edition", "Best Seller", "New Arrival"].map((st, idx) => (
                  <Button key={idx} className='min-h-0 min-w-0 p-0 m-0 h-auto bg-transparent rounded-[6px] text-black'>
                    <div className='border rounded-[6px] border-black px-2 py-[6px]'>
                      <div className='text-[10px] font-medium'>{st}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>


            {/* AVAILABILITY */}
            <div className='flex flex-col  px-[20px] pb-[26px]'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                  <Clock size={14} />
                  <div className='text-[14px] font-semibold'>Availability</div>
                </div>
                <Button className='min-h-0 min-w-0 h-auto p-0 m-0 bg-transparent text-black'>
                  <ChevronUp size={16} />
                </Button>
              </div>

              {/* OPTIONS */}
              <div className="pt-3 flex flex-wrap gap-x-2 gap-y-[6px]">
                {["In Stock", "Out of Stock"].map((st, idx) => (
                  <Button key={idx} className='min-h-0 min-w-0 p-0 m-0 h-auto bg-transparent rounded-[6px] text-black'>
                    <div className='border rounded-[6px] border-black px-2 py-[6px]'>
                      <div className='text-[10px] font-medium'>{st}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* CUSTOMIZATION */}
            <div className='flex flex-col  px-[20px] pb-[26px]'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                  <Settings2 size={14} />
                  <div className='text-[14px] font-semibold'>Customization</div>
                </div>
                <Button className='min-h-0 min-w-0 h-auto p-0 m-0 bg-transparent text-black'>
                  <ChevronUp size={16} />
                </Button>
              </div>

              {/* OPTIONS */}
              <div className="pt-3 flex flex-wrap gap-x-2 gap-y-[6px]">
                {["Available for Custom Orders"].map((st, idx) => (
                  <Button key={idx} className='min-h-0 min-w-0 p-0 m-0 h-auto bg-transparent rounded-[6px] text-black'>
                    <div className='border rounded-[6px] border-black px-2 py-[6px]'>
                      <div className='text-[10px] font-medium'>{st}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* SHIPPING */}
            <div className='flex flex-col  px-[20px] pb-[26px]'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                  <Package size={14} />
                  <div className='text-[14px] font-semibold'>Shipping</div>
                </div>
                <Button className='min-h-0 min-w-0 h-auto p-0 m-0 bg-transparent text-black'>
                  <ChevronUp size={16} />
                </Button>
              </div>

              {/* OPTIONS */}
              <div className="pt-3 flex flex-wrap gap-x-2 gap-y-[6px]">
                {["Cash On Delivery", "Same Day Delivery", "Free Shipping", "Ships Internationally"].map((st, idx) => (
                  <Button key={idx} className='min-h-0 min-w-0 p-0 m-0 h-auto bg-transparent rounded-[6px] text-black'>
                    <div className='border rounded-[6px] border-black px-2 py-[6px]'>
                      <div className='text-[10px] font-medium'>{st}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>


             {/* PRICE */}
             <div className='flex flex-col  px-[20px] pb-[26px]'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                  <DollarSign size={14} />
                  <div className='text-[14px] font-semibold'>Price</div>
                </div>
                <Button className='min-h-0 min-w-0 h-auto p-0 m-0 bg-transparent text-black'>
                  <ChevronUp size={16} />
                </Button>
              </div>

              {/* OPTIONS */}
              <div className="pt-3 flex flex-wrap gap-x-2 gap-y-[6px] w-full">

              <Slider defaultValue={getPrice} onValueChange={handlePriceValueChange} max={1000000} min={0} step={10} />

                  <div className='flex items-center justify-between w-full text-[12px] font-medium pt-2'>
                    <div>LKR 0.00</div>
                    <div>LKR {getPrice.toLocaleString()}</div>
                  </div>
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Marketplace
