"use client"
import { useQuery } from "@tanstack/react-query"
import { getOrders } from "../servcies/orderService"

export const useGetOrders = (userName: string) => {
    return useQuery({
        queryKey: ["orders", userName],
        queryFn: () => getOrders(userName)
    })
}
