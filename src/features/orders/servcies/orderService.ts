import baseApi from "@/lib/baseApi"


export const getOrders = async (userName: string) => {
    const response = await baseApi.get(`/order/username/${userName}`);
    return response.data
}
