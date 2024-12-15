"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import {
  File,
  ListFilter,
  PlusCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useParams, useRouter} from 'next/navigation'
import { getStoreProducts } from '@/api/direct/artisan/LoadStoreProducts'
import Product from '@/components/store/Product'

export const description =
  "Add New Artisan Product to Your Store."



const StoreProducts = () => {

  const [products, setProducts] = useState<StoreProduct[] | null>(null);

  const router = useRouter();

  const params = useParams(); // Get dynamic route parameters

  const store = params.storeName; // From dynamic route

  useEffect(() => {

    const LoadStoreProducts = async () => {
      const storeDTO = {
        store
      }
      
      const response:StoreProductsResponse  = await getStoreProducts(storeDTO);

      console.log(response);

      if (response.success) {
        setProducts(response.storeProductList);
      } else {
        if(response.message ==="SignIn"){
          router.push("/auth/signin", {scroll:true});
        }
        console.log("Error loading products");
      }

    };

    LoadStoreProducts();

  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">


        <section className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-7 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-7 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Link href={"/stores/" + store + "/products/new"}>
                  <Button size="sm" className="h-7 gap-1" >
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add Product
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            <TabsContent value='all'>
             <div className='w-full flex flex-wrap gap-[20px]'>
             {products && products.map((product)=>(
                <div key={product.id}>
                  <Product {...product}/>
                </div>
              ))}
             </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}

export default StoreProducts

