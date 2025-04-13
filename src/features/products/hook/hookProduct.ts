"use client";
import  { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/productService';

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
};
