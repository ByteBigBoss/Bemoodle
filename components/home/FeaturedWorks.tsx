"use client"
import React, { useEffect, useState } from 'react'
import WrapperBody from '../wrappers/WrapperBody'
import MoodleTitleBlock from '../common/MoodleTitleBlock'
import axios from 'axios';
import { BEMOODLE_API } from '@/lib/utils';
import { GET_FEATURED_PRODUCTS } from '@/lib/endpoints';
import Product from '../product/Product';

const FeaturedWorks = () => {

  const [products, setProducts]  = useState([]);

  useEffect(()=>{

    const fetchWorks = async ()=>{

      const response = await axios.get(`${BEMOODLE_API}/${GET_FEATURED_PRODUCTS}`);

      if(response.status === 200){
        console.log(response.data)
        if(response.data.success){
          setProducts(response.data.products)
        }
      }

    };

    fetchWorks();

  },[]);

  return (
    <div className='flex flex-col items-center pt-[80px]'>
      <WrapperBody>
        <div className='flex flex-col items-center'>

            {/* == FEATURED WORKS == */}
            <MoodleTitleBlock
            title="Discover Unique Artisan Creations"
            subtitle='Explore a curated selection of handcrafted goods from local artisans.'
            badge='MARKETPLACE'
            position='middle'
          />

          <div className='flex gap-[20px] justify-center flex-wrap pt-[40px]'>
          {products.map((product, idx)=>(
            <Product 
            key={idx} 
            artisan={product.store.artisan}
            created_at={product.created_at}
            description={product.description}
            id={product.id}
            price={product.price}
            productStatus={product.productStatus}
            qty={product.qty}
            store={product.store}
            subCategory={product.subCategory}
            title={product.title}
            />
          ))}
          </div>
          

        </div>
      </WrapperBody>
    </div>
  )
}

export default FeaturedWorks
