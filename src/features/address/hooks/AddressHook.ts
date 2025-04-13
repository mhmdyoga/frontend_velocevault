import { useQuery, useMutation } from "@tanstack/react-query";
import { createAddress, getUserAddress, updateAddress } from "../services/AddressService";

export const useGetUserAddress = (userName: string) => {
  return useQuery({
    queryKey: ["address", userName],
    queryFn: () => getUserAddress(userName),
  });
};

export const useCreateAddress = () => {
  return useMutation({
    mutationFn: createAddress,
  });
};

export const useUpdateAddress = () => {
  return useMutation({
    mutationFn: updateAddress,
  });
};