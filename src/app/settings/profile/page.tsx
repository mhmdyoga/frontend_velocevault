/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Sidebar from '@/components/ui/sidebar';
import { useCreateAddress, useGetUserAddress } from '@/features/address/hooks/AddressHook';
import { User2Icon } from 'lucide-react';
import React, { useEffect } from 'react';
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { AddressSchema } from '@/features/address/schemas/AddressSchema';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';


const Profil = () => {
  const [username, setUsername] = React.useState("");
  const [formData, setFormData] = React.useState({
    street: "",
    city: "",
    country: "",
    zipcode: "",
    userName: "",
  });

  const { data: address } = useGetUserAddress(username);
  const { mutate: createAddress } = useCreateAddress();
  const { toast } = useToast();
  
  useEffect(() => {
    const storageName = localStorage.getItem('value-data-username');
   if(storageName){
     setUsername(storageName);
     localStorage.setItem('value-data-address-user', JSON.stringify(address?.data || ''));
     setFormData((prev) => ({ ...prev, userName: storageName }))
   }
  }, [address]);

  const handleChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
       const validateData = AddressSchema.parse(formData);
       createAddress(validateData);
       toast({
        title: "Success",
        description: "Address created successfully",
        variant: "default"
      })
    } catch (error: unknown) {
      console.log(error)
      if(error instanceof z.ZodError){
         toast({
            title: "Error",
            description: error.errors[0].message,
            variant: "destructive"
          })
      }
    }
  }

  
  
  return (
      <>
       <div className='flex flex-row justify-center items-center'>
       <Sidebar />
        <div className="bg-white md:w-full w-w-screen flex justify-center items-center md:h-96 h-40 mx-11 rounded-full shadow-md p-6">
           <div className="bg-white fixed rounded-full md:w-32 h-auto flex flex-col gap-8 justify-center -mt-[380px] items-center">
              <User2Icon  className='md:w-24 md:h-24 w-12 h-12' />
           </div>
           <div className='-mt-12 md:ml-20 ml-10 flex flex-col justify-center items-center gap-4'>
           {address?.data?.map((data: any) => (
            <div key={data?.id}>
              <div className='flex flex-col justify-center items-start mt-16 gap-2'>
                <Label className='font-bold'>UserName</Label>
                <Input type="text" placeholder={username} disabled className='outline-none hover:cursor-not-allowed'/>
              </div>
                <div className='flex flex-col justify-center items-start mt-4 gap-2'>
                  <Label className='font-bold'>Address</Label>
                  <Textarea defaultValue={data ? `${data?.street}, ${data?.city}, ${data?.zipcode}, ${data?.country}` : 'Add your address'} disabled className='outline-none hover:cursor-not-allowed w-96 h-auto' />
                </div>
                <div className='mt-8'>                 
                     <Dialog>
                    <DialogTrigger asChild>
                      <button  
                        disabled={!!(data?.street || data?.city || data?.zipcode || data?.country)}
                        className={`${(data?.street || data?.city || data?.zipcode || data?.country) ? "cursor-not-allowed opacity-50 bg-black bg-opacity-15 text-white font-bold" : "cursor-pointer bg-black hover:bg-opacity-70 transition-all text-white font-bold"} p-2 text-sm flex justify-center items-center rounded-full`}
                      >
                        Create Address
                     </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Add Address</DialogTitle>
                        <DialogDescription>
                          Add your address here. Click save when youre done.
                        </DialogDescription>
                      </DialogHeader>

                      <form onSubmit={handleSubmit}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Street
                          </Label>
                          <Input
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            City
                          </Label>
                          <Input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="col-span-3"
                          />
                        </div>
                         <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            zipCode
                          </Label>
                          <Input
                            name="zipcode"
                            value={formData.zipcode}
                            onChange={handleChange}
                            className="col-span-3"
                          />
                        </div>
                         <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Country
                          </Label>
                          <Input
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            userName
                          </Label>
                          <Input
                            disabled
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            className="col-span-3 hover:cursor-not-allowed"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Create address</Button>
                      </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
          ))}  
           </div>
        </div>
       </div>   
      </> 
  )
}
export default Profil