/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetOrders } from "@/features/orders/hook/Ordershook";
import { ArrowDownIcon, ArrowUpIcon, CheckCheck, Clock, Eye, Loader, ShoppingBagIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";


const OrdersPage = () => {
  const [userName, setUserName] = useState("");
  const { data: orders, isLoading } = useGetOrders(userName);

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
                    <div className="flex flex-col gap-2 mt-6"><Dialog>
                      <DialogTrigger>
                        <Button variant="outline">Details Order</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <span>Transaction Details</span>
                            <Badge variant={order.status === "SUCCESS" ? "default" : "outline"}>{order.status}</Badge>
                          </DialogTitle>
                          <DialogDescription>Complete information about this order</DialogDescription>
                        </DialogHeader>
                        <div className="mt-6 space-y-6">
                          <div className="flex flex-col items-center justify-center gap-2 py-2">
                            <div className={`rounded-full p-3 ${order.amount > 0 ? "bg-green-100" : "bg-gray-100"}`}>
                              {order.amount > 0 ? (
                                <ArrowUpIcon className="h-6 w-6 text-green-600" />
                              ) : (
                                <ArrowDownIcon className="h-6 w-6 text-gray-600" />
                              )}
                            </div>
                            <h2 className="text-2xl font-bold flex flex-col gap-2 items-center justify-center">
                              {order.amount > 0 ? "-" : ""}${Math.abs(order.amount).toFixed(2)}
                              <span className="text-xs font-semibold text-muted-foreground">You has been ordered products, <br /> we hope you enjoy your new car</span>
                            </h2>
                          </div>
                        </div>

                        <Separator />

                        <div className="flex flex-col gap-6">
                          <div className="flex items-start gap-3">
                            <Eye className="mt-0.5 h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium">OrderId</p>
                              <p className="text-sm text-muted-foreground">{order.id}</p>
                            </div>
                          </div>
                          {order.status === "SUCCESS" ? (
                            <div className="flex items-start gap-3">
                              <CheckCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="text-sm font-medium">Status</p>
                                <p className="text-sm text-muted-foreground">{order.status}</p>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-start gap-3">
                              <Clock className="mt-0.5 h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="text-sm font-medium">Status</p>
                                <p className="text-sm text-muted-foreground">{order.status}</p>
                              </div>
                            </div>
                          )}

                          <div className="flex items-start gap-3">
                            <ShoppingBagIcon className="mt-0.5 h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium">Product Ordered</p>
                              <div className="flex flex-col gap-8">
                                <Image src={product.image} alt="porsche.png" width={75} height={46} />
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <UserIcon className="mt-0.5 h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium">To</p>
                              <p className="text-sm text-muted-foreground">VeloceVault Corporation.</p>
                            </div>

                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
