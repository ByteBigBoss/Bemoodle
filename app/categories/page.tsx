"use client"
import CategoryCard from '@/components/categories/CategoryCard'
import MoodleTitleBlock from '@/components/common/MoodleTitleBlock'
import WrapperBody from '@/components/wrappers/WrapperBody'
import { LOAD_CATEGORIES } from '@/lib/endpoints'
import { BEMOODLE_API } from '@/lib/utils'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Categories = () => {

  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {

    const fetchCategories = async () => {

      const response = await axios.get(`${BEMOODLE_API}/${LOAD_CATEGORIES}`);
      if (response.status === 200) {
        const data = response.data;
        setCategories(data);
        
      }

    };

    fetchCategories();

  }, []);


  return (
    <div className='w-full pt-[78px] min-h-screen'>

      {/* HERO */}
      <section className='w-full relative h-[320px] flex justify-center items-center'>
        <Image src={"/ct/ct_cover.jpg"} alt='cover' fill className='object-cover' />
        <div className='z-[100] absolute'>
          <WrapperBody>
            <div className='flex flex-col items-center text-center'>
              <div className='text-[2rem] font-bold text-white'>Discover Bemoodle&apos;s Top Categories</div>
              <div className='text-[14px] font-medium text-white'>Find the perfect moodle for your needs</div>
            </div>
          </WrapperBody>
        </div>
        <div className='absolute w-full h-full bg-black/10'></div>
      </section>

      {/* CATEGORIES */}
      <section className='w-full flex flex-col items-center py-[80px]'>
        <WrapperBody>
          <div className='flex flex-col  w-full'>

            <MoodleTitleBlock
            title='The Pool of Moodles'
            subtitle='Categorized Moodles of Bemoodle Market'
            badge='CATEGORIES'
            position='left'
            />


            {/* CATEGORY CARD LIST */}
            <div className='grid grid-cols-3 gap-x-12 pt-[30px] gap-y-16'>
              {categories.map((ct, idx)=>(
                <CategoryCard key={idx} {...ct}/>
              ))}
            </div>

          </div>
        </WrapperBody>
      </section>

    </div>
  )
}

export default Categories
