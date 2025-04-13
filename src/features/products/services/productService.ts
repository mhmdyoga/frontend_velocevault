import baseApi from '@/lib/baseApi';

export const getProducts = async () => {
  const response = await baseApi.get("/products");
  return response.data;
};
