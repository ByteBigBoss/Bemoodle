"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import MoodleTitleBlock from '@/components/common/MoodleTitleBlock'
import WrapperBody from '@/components/wrappers/WrapperBody'
import axios from "axios"
import MoodleCategoryCard from '../common/MoodleCategoryCard'
import { BEMOODLE_API, cn } from '@/lib/utils'
import { LOAD_CATEGORIES } from '@/lib/endpoints'
import { Button } from '@nextui-org/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"
import MoodleSubCategoryCard from '../common/MoodleSubCategoryCard'

const MoodleCategories = () => {

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState<any>([]);
  const [step, setStep] = useState(0);
  const [maxSteps, setMaxSteps] = useState(1);

  const [worksStep, setWorksStep] = useState(0);
  const [worksMaxSteps, setWorksMaxSteps] = useState(1);


  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);


  useEffect(() => {

    const fetchCategories = async () => {

      const response = await axios.get(`${BEMOODLE_API}/${LOAD_CATEGORIES}`);
      if (response.status === 200) {
        const data = response.data;
        setCategories(data);
        setSubCategories(data.flatMap((category: any) => (category.sub || []).map((sub: any) => ({
          ...sub,
          category: category.name
        }))
        ))
      }

    };

    fetchCategories();

  }, []);




  useEffect(() => {
    const calculateSteps = () => {
      if (ref.current) {

        const containerWidth = ref.current.offsetWidth;
        const cardWidth = 210 + 20;
        const visibleCards = Math.floor(containerWidth / cardWidth);
        const totalSteps = Math.max(0, categories.length - visibleCards);
        setMaxSteps(totalSteps);
      }
      if (ref2.current) {
        const containerWidth = ref2.current.offsetWidth;
        const cardWidth = 210 + 20;
        const visibleCards = Math.floor(containerWidth / cardWidth);
        const totalSteps = Math.max(0, subCategories.length - visibleCards);
        setWorksMaxSteps(totalSteps);
      }
    };
    calculateSteps();

    window.addEventListener('resize', calculateSteps);
    return () => window.removeEventListener('resize', calculateSteps);

  }, [categories]);

  const handleNext = () => {
    if (step < maxSteps) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };


  const handleWorksNext = () => {
    if (worksStep < worksMaxSteps) {
      setWorksStep((prev) => prev + 1);
    }
  };

  const handleWorksPrev = () => {
    if (worksStep > 0) {
      setWorksStep((prev) => prev - 1);
    }
  };


  return (
    <div className='flex flex-col items-center pt-[80px]'>
      <WrapperBody>

        {/* == BEMOODLE CATEGORIES == */}
        <MoodleTitleBlock viewMore viewMoreTitle='View All' viewMoreLink='/categories' title='Bemoodle Categories' subtitle='Explore the different categories of artisan works.' badge='CATEGORIES' position='left' />

        {/* == CATEGORIES == */}
        <div ref={ref} className='flex relative items-center'>
          <motion.div
            className='flex gap-[20px] pt-[30px] overflow-x-hidden'>
            {categories.map((ct, idx) => (
              <MoodleCategoryCard offset={226} step={step} key={idx} id={ct.id} title={ct.name} description={ct.description} />
            ))}
          </motion.div>
          {/* NEXT */}
          <Button onClick={handleNext} className='min-h-0 min-w-0 p-0 m-0 h-auto rounded-full  bg-transparent absolute right-[-18px] drop-shadow-md'>
            <div className='bg-white  rounded-full text-black/60 w-[36px] h-[36px] flex items-center justify-center'>
              <ChevronRight size={24} />
            </div>
          </Button>
          {/* PREV */}
          <Button onClick={handlePrev} className={cn(
            'min-h-0 min-w-0 p-0 m-0 h-auto rounded-full  bg-transparent absolute left-[-18px] drop-shadow-md',
            step === 0 ? 'opacity-0' : ''
          )}>
            <div className='bg-white  rounded-full text-black/60 w-[36px] h-[36px] flex items-center justify-center'>
              <ChevronLeft size={24} />
            </div>
          </Button>
        </div>
        {/* == BEMOODLE CATEGORIES == */}

        <div className='pt-[80px]'>
          {/* == ARTISAN'S WORKS == */}
          <MoodleTitleBlock
            viewMore
            viewMoreTitle='View All'
            viewMoreLink='/categories'
            title="Our Artisan's Works"
            subtitle='Discover the unique works our artisans offer.'
            badge='WORKS'
            position='left'
          />

          {/* == WORKS == */}
          <div ref={ref2} className='flex relative items-center'>
            <motion.div
              className='flex gap-[20px] pt-[30px] overflow-x-hidden'>
              {subCategories.map((ct, idx) => (
                <MoodleSubCategoryCard
                  offset={229.1}
                  step={worksStep}
                  key={idx}
                  id={ct.id}
                  title={ct.name}
                  description={ct.description}
                  categoryId={ct.id}
                  ctName={ct.category}
                />
              ))}
            </motion.div>
            {/* NEXT */}
            <Button onClick={handleWorksNext} className='min-h-0 min-w-0 p-0 m-0 h-auto rounded-full  bg-transparent absolute right-[-18px] drop-shadow-md'>
              <div className='bg-white  rounded-full text-black/60 w-[36px] h-[36px] flex items-center justify-center'>
                <ChevronRight size={24} />
              </div>
            </Button>
            {/* PREV */}
            <Button onClick={handleWorksPrev} className={cn(
              'min-h-0 min-w-0 p-0 m-0 h-auto rounded-full  bg-transparent absolute left-[-18px] drop-shadow-md',
              step === 0 ? 'opacity-0' : ''
            )}>
              <div className='bg-white  rounded-full text-black/60 w-[36px] h-[36px] flex items-center justify-center'>
                <ChevronLeft size={24} />
              </div>
            </Button>
          </div>
          {/* == ARTISAN'S WORKS == */}
        </div>


      </WrapperBody>
    </div>
  )
}

export default MoodleCategories
