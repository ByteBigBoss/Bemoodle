import { BEMOODLE_API } from '@/lib/utils';
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'



const CategoryCard = ({ id, name, description, sub }: Categories) => {
  return (
    <div className='w-full min-h-7 '>

      {/* CATEGORY IMAGE */}
      <div className='w-full relative h-[200px] rounded-lg'>
        <Image src={`${BEMOODLE_API}/category/${id}/main.jpg`} fill alt='category' className='object-cover rounded-lg' />
      </div>

      {/* CATEGORY NAME & DESCRIPTION */}
      <div className='pt-4'>
        <div className='text-[1.4rem] font-bold'>{name}</div>
        <div className='text-[14px] font-medium text-black/60'>{description}</div>
      </div>

      <div className='flex flex-col gap-5 pt-8'>
        {sub.map((s, idx) => (
          <Button key={idx} className='min-h-0 min-w-0 h-auto p-0 m-0 rounded-md bg-transparent text-black'>
            <div className='w-full flex gap-3 items-center' >

              {/* IMAGE */}
              <div className='relative w-[100px] h-[100px] rounded-md flex-shrink-0'>
                <Image src={`${BEMOODLE_API}/sub-category/${s.id}/main.jpg`} fill alt='sub-category' className='object-cover rounded-md' />
              </div>

              {/* SUB CATEGORY NAME & DESCRIPTION */}
              <div className=' flex flex-col items-start text-start'>
                <div className='text-[1rem] font-bold'>{s.name}</div>
                <div className='text-[12px] font-medium text-black/60 text-wrap pt-2'>{s.description}</div>
              </div>

            </div>
          </Button>
        ))}
      </div>

    </div>
  )
}

export default CategoryCard
