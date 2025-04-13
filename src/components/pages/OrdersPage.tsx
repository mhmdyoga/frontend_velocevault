/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetOrders } from "@/features/orders/hook/Ordershook";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const OrdersPage = () => {
  const [userName, setUserName] = useState("");
  const { data: orders, isLoading } = useGetOrders(userName);
  const router = useRouter();

  useEffect(() => {
    const StorageName = localStorage.getItem("value-data-username");
    if (StorageName) {
      setUserName(StorageName);
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader className="animate-spin transition-all text-white font-bold" />
      ) : (
        <div>
          <div className="flex justify-center items-center p-4">
            <h2 className="text-xl font-bold text-white text-center">
              Your Orders
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:p-24 p-8"> 
            {orders.data.length === 0 ? (
              <div className="flex justify-center items-center">
                <h2 className="text-white font-bold text-xl text-center">Your not ordered anything</h2>
              </div>
            ) : (
              orders?.data?.map((order: any) => (
                order.products.map((product: any) => (
                  <div key={product.id} className="bg-white md:w-full h-auto p-4 flex md:flex-row flex-col md:gap-4 gap-2 md:justify-between items-center rounded-md">
                    <div className="flex md:flex-row flex-col gap-3 justify-center items-center">
                      <Image
                        src={product.image}
                        alt="porsche.png"
                        width={165}
                        height={96}
                      />
                      <div className="flex flex-col">
                        <h2 className="font-bold text-lg italic">{product?.title}</h2>
                        <span className="font-medium text-sm">${product.price}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-6">
                      <Button variant="outline" onClick={() => router.push(`/transaction_details/${order.id}`)}>Details Order</Button>
                      <div className="ml-16">
                        <span className="text-slate-400 text-sm">qty: {product.quantity}</span>  
                      </div> 
                    </div>
                  </div>
                ))
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default OrdersPage;
