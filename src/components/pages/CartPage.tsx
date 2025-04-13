/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { Trash2Icon } from 'lucide-react';
import { CartType, removeItem, updateQuantity,  } from '@/slices/cartSlices/cartSlices';
import { useToast } from '@/hooks/use-toast';


const CartPage = ({product}: any) => {
    const dispatch = useDispatch();
    const {toast} = useToast(); 

   const handleRemoveItem = (item: CartType) => {
        dispatch(removeItem({id: item.id}));
        toast({
            title: "Item removed from cart",
            description: "Item has been removed from your cart",
        })
    }

  return (
    <div className='flex flex-col'>
        <div className='flex flex-col gap-2'>
         <Image src={product.image} alt="" width={65} height={65} />
         <div className='flex flex-col gap-2'>
            <h2 className='font-bold'>{product.title}</h2>
            <span className='font-medium'>{product.price}</span>
         </div>
        </div>
        <div className="flex flex-row gap-3">
         <Button variant={"outline"} onClick={() => dispatch(updateQuantity({id: product.id, quantity: product.quantity - 1}))}>-</Button>
         <span className='font-bold'>{product.quantity}</span>
         <Button variant={"outline"} onClick={() => dispatch(updateQuantity({id: product.id, quantity: product.quantity + 1}))}>+</Button>
        </div>
        <div className="mt-4">
         <Button variant={"destructive"} onClick={() => handleRemoveItem(product)}>
            <Trash2Icon />
         </Button>
        </div>
    </div>
  )
}
export default CartPage