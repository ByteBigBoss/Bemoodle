"use client"
import Loading from '@/components/common/Loading'
import MoodleBadge from '@/components/common/MoodleBadge'
import MoodleButton from '@/components/common/MoodleButton'
import MoodleTitleBlock from '@/components/common/MoodleTitleBlock'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import WrapperBody from '@/components/wrappers/WrapperBody'
import { ADD_TO_CART, GET_ONE_PRODUCT } from '@/lib/endpoints'
import { sofia } from '@/lib/fonts'
import { BEMOODLE_API } from '@/lib/utils'
import axios from 'axios'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const SingleProductView = () => {

  const [value, setValue] = useState(1);
  const searchParams = useSearchParams();
  const [product, setProduct] = useState({});

    const [loading, setLoading] = useState(true);

  const id = searchParams.get('id');

  const handleChangeValue = ({ action }: { action: "minus" | "plus" }) => {

    if (action == "minus") {
      if (value != 1) {
        setValue((prev) => prev - 1);
      }
    } else if (action == "plus") {
     if(value < product.qty){
      setValue((prev) => prev + 1);
     }
    } else {
      setValue(1);
    }

  };

  const addToCart = async ()=>{

   try {
    
    const response = await axios.get(`${BEMOODLE_API}/${ADD_TO_CART}?id=${id}&qty=${value}`, {withCredentials:true});

    if(response.data.success){
      console.log(response.data)

    }else{
      console.log(response.data.content);
    }
   } catch (error) {
    
   }

  };

  useEffect(()=>{
    const fetchProduct = async ()=>{
      const response = await axios.get(`${BEMOODLE_API}/${GET_ONE_PRODUCT}?id=${id}`);

      if(response.data.success){
        setProduct(response.data.product);
        setLoading(false);
      }else{
        console.log('Error fetching product');
      }

    };
    fetchProduct();
  },[id]);

  if (loading) {
    return (
      <div><Loading /></div>
    )
  }

  return (
    <div className='pt-[78px] box-border w-full flex flex-col items-center pb-[40px]'>
      <WrapperBody>
        {/* BREADCRUMB */}
        <div className={`pt-[26px] ${sofia.className} text-[15px] font-medium`}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className='text-black'>Product</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

            </BreadcrumbList>
          </Breadcrumb>
        </div>


        {/* TOP */}
        <div className='w-full mt-[40px] flex gap-[40px] mobile:flex-col'>

          {/* IMAGES */}
          <div className='w-[460px] mobile:w-full'>
            <div className='w-full h-[460px] border border-[#0000001f] bg-[#EDEDED] rounded-[10px] relative'>
              <Image src={`${BEMOODLE_API}/stores/${product.store.name}/products/p-${id}/image1.png`} fill alt='main' className='rounded-[10px] object-cover'  />
            </div>

            <div className='grid grid-cols-2 gap-[12px] mt-[12px]'>
              <div className=' h-[142px] border relative  border-[#0000001f] bg-[#EDEDED] rounded-[10px]'>
                <Image src={`${BEMOODLE_API}/stores/${product.store.name}/products/p-${id}/image2.png`} fill alt='main' className='rounded-[10px] object-cover h-full'  />

              </div>
              <div className=' h-[142px] border relative  border-[#0000001f] bg-[#EDEDED] rounded-[10px]'>
                <Image src={`${BEMOODLE_API}/stores/${product.store.name}/products/p-${id}/image3.png`} fill alt='main' className='rounded-[10px] object-cover h-full'  />

              </div>
              {/* <div className=' h-[142px] border relative  border-[#0000001f] bg-[#EDEDED] rounded-[10px]'>
                <Image src={`${BEMOODLE_API}/stores/${product.store.name}/products/p-${id}/image1.png`} fill alt='main' className='rounded-[10px] object-cover h-full'  />

              </div> */}
            </div>
          </div>

          {/* DETAILS */}
          <div className='flex-1'>
            <div className='w-full flex flex-col justify-between h-full'>

              <div>
                {/* TITLE */}
                <div className='text-[30px] font-medium text-wrap'>{product.title}</div>

                {/* PRICE */}
                <div className='flex  gap-[13px] items-center mt-[22px]'>
                  <div className='text-[2rem] font-semibold'>LKR {product.price}</div>
                  <div className='font-medium opacity-65 line-through'>LKR {product.price + 500}</div>
                </div>

                {/* PRODUCT SPECIFIC DETAILS */}
                <div className='border-[#0000001f] border-y box-border py-[30px] mt-[30px] '>

                  {/* LINE 1 */}
                  <div className='w-full grid grid-cols-2 gap-[60px] mobile:grid-cols-1 mobile:gap-[30px]'>

                    <div className='w-full flex items-center justify-between'>
                      <div className={`font-medium ${sofia.className} opacity-65`}>Category : </div>
                      <MoodleBadge variants='badge'>{product.subCategory.category.name}</MoodleBadge>
                    </div>

                    <div className='w-full flex items-center justify-between'>
                      <div className={`font-medium ${sofia.className} opacity-65`}>Product Category : </div>
                      <MoodleBadge variants='badge'>{product.subCategory.name}</MoodleBadge>
                    </div>

                  </div>

                  {/* LINE 2 */}
                  <div className='w-full grid grid-cols-2 gap-[60px] pt-[30px] mobile:grid-cols-1 mobile:gap-[30px]'>

                    <div className='w-full flex items-center justify-between'>
                      <div className={`font-medium ${sofia.className} opacity-65`}>Special Status :</div>
                      <MoodleBadge variants='status'>{product.productStatus.name}</MoodleBadge>
                    </div>

                    {/* <div className='w-full flex items-center justify-between'>
                      <div className={`font-medium ${sofia.className} opacity-65`}>Customization: </div>
                      <MoodleBadge variants='outline' className='rounded-[6px]'>Available</MoodleBadge>
                    </div> */}

                  </div>

                </div>

                {/* ADD TO CART */}
                <div className='w-full flex items-center justify-between mt-[30px] mobile:flex-col mobile:items-start mobile:gap-[20px]'>
                  <div className='w-full flex flex-col'>
                    {/* <div className={`font-medium ${sofia.className} opacity-65`}>Shipping</div>
                    <div className='text-[20px] font-semibold pt-[6px]'>Free Shipping</div> */}
                  </div>

                  <div className='flex items-center gap-[16px] '>
                    <div className='h-[51px] w-[100px] mobile:text-start flex items-center gap-[12px] justify-center rounded-[6px] border border-[#0000002f] bg-[#F2F2F2] '>
                      <button onClick={() => handleChangeValue({ action: "minus" })} className='hover:scale-90 transform transition-transform duration-200'><Minus size={16} /></button>
                      <div className='text-[20px] font-bold w-[20px] text-center'>{value}</div>
                      <button onClick={() => handleChangeValue({ action: "plus" })} className='hover:scale-90 transform transition-transform duration-200'><Plus size={16} /></button>
                    </div>

                    <MoodleButton variants='actionLarge' onClick={()=>addToCart()}>Add to Cart</MoodleButton>
                  </div>

                </div>
              </div>

              {/* STORE DETAILS */}
              <div className='w-full border border-[#0000001f] rounded-[15px] mobile:mt-[24px]'>
                <div className='w-full bg-[#F8F8F8] h-[70px] rounded-t-[15px]  px-[20px] box-border border-b border-[#0000001f] flex gap-[16px] items-center'>
                  <div className='flex gap-[10px]'>
                    <div className='w-[30px] h-[30px] rounded-full bg-[#D9D9D9]'><Image className=' rounded-full object-cover' width={30} height={30} src={'/home/hero.jpg'} alt='Store Image' /></div>
                    <div className='leading-[14px]'>
                      <div className='text-[10px] font-medium opacity-65'>Work by</div>
                      <div className='text-[12px] font-medium'>@<span>{product.store.name}</span></div>
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full justify-between px-[20px] py-[22px] mobile:flex-col mobile:items-start mobile:gap-[14px]'>
                  <div>
                    <div className='text-[15px] font-bold'>For</div>
                    <div className='text-[12px] font-medium'>Customizations or any inquiries</div>
                  </div>

                  <div className='flex items-center gap-[12px] mobile:flex-col mobile:items-start'>
                    {/* <MoodleBadge variants='label'>+94 3837 327</MoodleBadge> */}
                    <MoodleBadge variants='info'>{product.store.artisan.user.email}</MoodleBadge>
                  </div>
                </div>
              </div>

            </div>
          </div>



        </div>

        {/* DESCRIPTION */}
        <div className='w-full rounded-[24px] shadow-md bg-white box-border p-[30px] border border-[#0000001f] mt-[40px] mobile:mt-[24px]'>
          <MoodleTitleBlock 
          badgeVariants='special' 
          title='Product Description' 
          badge='DETAILS' 
          position='left' 
          subtitle={product.description} />
        </div>

        {/* SIMILAR PRODUCT */}
        <div className='mt-[80px]'>
          <MoodleTitleBlock title='These may interest you.' viewMoreTitle='View More' subtitle='We listed similar product you looking.' badge='SIMILAR PRODUCTS' position='left' viewMore viewMoreLink='/search' />
        </div>

      </WrapperBody>

    </div>
  )
}

export default SingleProductView
