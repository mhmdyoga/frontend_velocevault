/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from 'react';
import { useGetProducts } from '@/features/products/hook/hookProduct'
import Productpage from '../../components/pages/Productpage';
import SecondNav from '@/components/ui/secondNav';
import Footer from '@/components/ui/footer';

const CarsPage = () => {
    const { data } = useGetProducts();
  return (
    <>
    <SecondNav />
     <div className="grid grid-cols-1 md:grid-cols-3 mt-32 gap-3 p-6">
        {data?.data?.map((item: any) => (
            <Productpage key={item.id} item={item} />
        ))}
    </div>
    <Footer />
    </>
   
  )
}

export default CarsPage