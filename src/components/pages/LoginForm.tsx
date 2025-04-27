"use client";
import { LoginSchema } from '@/features/auth/schemas/AuthSchemas';
import { useLogin } from '@/features/auth/hooks/hookAuth';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Micro_5 } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import {z} from 'zod';


// font-micro5
const Micro5 = Micro_5({
  subsets: ["latin"],
  weight: ["400"],
});

 const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { mutate: Login } = useLogin();
    const router = useRouter();
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
           [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
          const validateUser = LoginSchema.parse(formData);
          Login(validateUser, {
            onSuccess(data) {
              toast({
                title: "Success",
                description: "You've been successfully login"
              });
              router.push('/');
              localStorage.setItem('value-data-username', data.data)
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onError(err: any) {
              toast({
                title: "Error",
                variant: "destructive",
                description: err.response.data.msg
              })
            },
          });
        }catch(err){
          if(err instanceof z.ZodError){
              toast({
                title: "Error",
                variant: "destructive",
                description: err.errors[0].message
              });
          };

          if(err instanceof Error && 'response' in err){
            toast({
              title: "Error",
              variant: "destructive",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              description: (err as any).response.data.msg
            })
          }
        }
    }
  return (
    <>
        <div className='flex md:flex-row flex-col gap-4 rounded-lg w-[664px] md:h-[384px] h-auto bg-white justify-between items-center p-4'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col space-y-2'>
            <Label className="font-bold">E-mail</Label>
            <Input className='w-64' type="email" name="email" value={formData.email} onChange={handleChange} placeholder='example@gmail.com' />
            </div>
            <div className='flex flex-col space-y-2'>
                <Label className="font-bold">Password</Label>
                <Input className='w-64' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='JhonDoe123' />
             </div>
             <div className='flex flex-row gap-3 justify-center items-center'>
               <button type='submit' className='bg-[#111]  text-white font-bold text-sm rounded-lg w-[120px] h-[36px]'>Sign-in</button>
               <div className='flex flex-col gap-2'>
                <p className={`text-black font-semibold italic text-xs`}>{`Don't have an account?`}</p>
                <Link href="/auth/register" className={`text-blue-700 font-semibold italic underline text-xs`}>Sign-up Now!</Link>
               </div>
             </div>
          </form>
          <div className="-mt-4 p-2 justify-center items-center flex">
            <div className="bg-[#111] rounded-lg w-[240px] h-[320px] flex flex-col gap-2 justify-center items-center">
               <h2 className={`font-bold text-white text-5xl ${Micro5.className}`}>VeloceVault</h2>
                <Image src="/porsche-gt3-top.png" alt="hyper car rent" width={170} height={170} className='rotate-180' />
            </div>
          </div>
        </div>
    </>
  )
}

export default LoginForm