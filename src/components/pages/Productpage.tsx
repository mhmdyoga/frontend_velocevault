/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/slices/cartSlices/cartSlices';
import { useToast } from '@/hooks/use-toast';

 const Productpage = ({item}: any) => {
  const dispatch = useDispatch();
  const {toast} = useToast();

const handleAddToCart = () => {
  const getUserName = localStorage.getItem('value-data-username');
    try {
    if(getUserName) {
      dispatch(addToCart(item));
      toast({
        title: "Item added to cart",
        description: "Item has been added to your cart",
      });
    } else {
      toast({
        title: "Please login to add item to cart",
        description: "Please login to add item to cart",
        variant: "destructive",
      });
    }
    } catch (error: unknown) {
      toast({
        title: "Error adding item to cart",
        description: (error as Error).message,
      });
    }
  };
  return (
    <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
    <div className="ml-[320px] -mt-4">
      <Image src="/porsche-logo.png" alt="logo porsche company" width={60} height={60} className="w-auto h-auto p-2"/>
    </div>
    <Image src={item.image} alt={item.title} width={300} height={200} className="w-auto h-auto object-cover rounded-lg mb-4" priority/>
    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
    <p className="text-gray-600">{item.description}</p>
    <p className="text-gray-600">Price: ${item.price}</p>
    <div className="mt-4">
      <Button variant="default" className="flex flex-row gap-2" onClick={handleAddToCart}>
        <ShoppingCart />
        Add Cart
      </Button>
    </div>
  </div>
  )
}

export default Productpage