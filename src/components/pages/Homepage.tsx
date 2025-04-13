/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Micro_5 } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { ChevronsDown } from 'lucide-react';
import Navbar from '../ui/navbar';
import YoutubeVideo from '../video/youtubeVideo';
import { useGetProducts } from '@/features/products/hook/hookProduct';
import Productpage from './Productpage';
import Footer from '../ui/footer';

const Micro5 = Micro_5({
  subsets: ["latin"],
  weight: ["400"],
});

const Homepage = () => {
  const DataCarousel = [
  {
    id: 1,
    image: "/pagani-zonda.png",
  },
  {
    id: 2,
    image: "/porschespyder-1.png",
  },
  {
    id: 3,
    image: "/ferarif1 1.png",
  },
  {
    id: 4,
    image: "/ferari80 1.png",
  },
];  

const { data } = useGetProducts();
   
  return (
    <>
      <div className='bg-white md:w-full w-screen md:h-screen h-[540px] absolute  top-0 rounded-b-full md:rounded-b-[220px]'>
        <Navbar />
        <div className='flex justify-center items-center md:mt-[-40px] mt-[80px]'>
            <h2 className={`font-bold lg:text-[325px] md:text-[125px] text-[80px] mt-[-20px] ${Micro5.className}`}>VeloceVault</h2>
        </div>
        <div>
        <Carousel>
          <CarouselContent>
            {DataCarousel.map((item) => (
              <CarouselItem key={item.id} className='lg:mt-[-200px] md:mt-[-100px] mt-[-28px] items-center flex justify-center'>
               <Image src={item.image} alt="image" width={700} height={630} className="lg:w-[700px] md:w-[500px] w-[300px]"/>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className='flex justify-center items-center md:mt-[-185px] mt-[110px]'>
        <div className="md:w-16 md:h-16 w-12 h-12 bg-white rounded-full p-2 flex justify-center items-center">
           <ChevronsDown className="text-black" size={35}/>
        </div>
        </div>
         </div> 
      </div>
      {/* recommendation product*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:mt-[700px] mt-[710px] p-6">
         {data?.data?.map((item: any) => (
          <Productpage key={item.id} item={item} />
          ))}
      </div>
      <div className="md:mt-[60px] p-4 mt-[80px]">
         <div className=''>
           <YoutubeVideo />
         </div>
         <div className="mt-40 flex md:flex-row flex-col gap-4 items-center md:justify-evenly">
          {/* desc-1 */}
          <div className="flex flex-col md:gap-40 gap-6">
          <div className='flex flex-col'>
            <h3 className={`font-bold text-white md:text-xl text-lg`}>Porsche GTR3 </h3>
           </div>
           <div className='flex flex-col'>
            <h3 className={`font-bold text-white md:text-xl text-lg`}>Porsche GTR3 is sportcar model and<br/> he has 240km/h just in 12.5 second it just<br/> bit of porsche another model.</h3>
           </div>  
          </div>
           
           <Image src="/porsche-gt3-top.png" alt="logo porsche company" width={528} height={630} className="w-auto h-auto rotate-180"/>

           {/* desc-2 */}
           <div className="flex flex-col md:gap-40 gap-6">
              <div className='flex flex-col'>
                <h3 className={`font-bold text-white md:text-xl text-lg `}>Porsche GT3RS top speed 296km/h<br/> acceleration 0-100km in 3.2 max.Engine<br/> speed 9000 1/min</h3>
              </div>
              <div className='flex flex-col'>
                <h3 className={`font-bold text-white md:text-xl text-lg`}>Porsche GTR3 386kW/525 PS and in-gear acceleration <br/> {`(80-120km/h) [50-75mph]`} in just 1.8 second </h3>
              </div>  
          </div>
         </div>
         <Footer/>
      </div>

    </>
  )
}
export default Homepage