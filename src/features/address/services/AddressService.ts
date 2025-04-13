import baseApi from "@/lib/baseApi";

interface Address {
  id?: number;
  street?: string;
  city?: string;
  zipcode?: string;
  country?: string;
  userName: string
}


export const getUserAddress = async (userName: string) => {
  const response = await baseApi.get(`/address/${userName}`);
  return response.data;
};

export const createAddress = async(address: Address) => {
  const response = await baseApi.post('/address', address);
  return response.data;
};

export const updateAddress = async(address: Address) => {
  const response = await baseApi.put(`/address/${address.id}`, address);
  return response.data;
};


