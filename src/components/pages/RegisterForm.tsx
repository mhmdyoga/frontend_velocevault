"use client"
import { RegisterSchema } from '@/features/auth/schemas/AuthSchemas';
import { useRegister } from '@/features/auth/hooks/hookAuth';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { Micro_5 } from 'next/font/google';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

const Micro5 = Micro_5({
  subsets: ["latin"],
  weight: ["400"],
});

const RegisterForm = () => {
    const [formData, setFormdata] = useState({
        username: '',
        email: '',
        password: '',
        confPassword: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const { mutate: Register } = useRegister();
    const { toast } = useToast();
    const router  = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
 
      // validasi jika password dan confrim password tidak sama;

        if(formData.password !== formData.confPassword){
           toast({
                title: "Error",
                variant: "destructive",
                description: "Password and confirm password do not match",
            });
        }

        try {

            // parse formData object with zod validation

            const validateUser = RegisterSchema.parse(formData);
            
            // function hook register

            Register(validateUser, {
              onSuccess: () => {
                toast({
                    title: "Success",
                    description: "Register Successfully",
                });
            },
            onError: (err: unknown) => {
              if(err instanceof Error && 'response' in err) {
                toast({
                  title: "Error",
                  variant: "destructive",
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  description: (err as any).response?.data?.error || 'Unknown server error'
                });
              }
            },
           });

          //  notification if user success to registered

           toast({
            title: "Success",
            description: "You've been successfully registered"
           })

           // direct to sign-in page if user successfully registered 

           router.push('/auth/login');

          } catch (err: unknown) {
           if(err instanceof z.ZodError) {
            toast({ 
                title: "Error",
                variant: "destructive",
                description: err.errors[0].message,
            })
           };
           console.log(err);
        }
    }
  
  return (
     <>
          <div className='flex md:flex-row flex-col gap-4 rounded-lg w-[664px] md:h-[384px] h-auto bg-white justify-between items-center p-4'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

            <div className='flex flex-col space-y-2'>
            <Label className="font-bold">Username</Label>
            <Input className='w-64' type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Jhon Doe' />
            </div>

            <div className='flex flex-col space-y-2'>
                <Label className="font-bold">E-mail</Label>
                <Input className='w-64' type="email" name="email" value={formData.email} onChange={handleChange} placeholder='JhonDoe@gmail.com' />
             </div>

             <div className='flex flex-col space-y-2'>
                <Label className="font-bold">Password</Label>
                <Input className='w-64' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='JhonDoe123' />
             </div>

             <div className='flex flex-col space-y-2'>
                <Label className="font-bold">Confirm Password</Label>
                <Input className='w-64' type="password" name="confPassword" value={formData.confPassword} onChange={handleChange} placeholder='JhonDoe123' />
             </div>

             <div className='flex flex-row gap-3 justify-center items-center'>
               <button className='bg-[#111]  text-white font-bold text-sm rounded-lg w-[120px] h-[36px]'>Sign-up</button>
               <div className='flex flex-col gap-2'>
                <p className={`text-black font-semibold italic text-xs`}>{`Have an account?`}</p>
                <Link href="/auth/login" className={`text-blue-700 font-semibold italic underline text-xs`}>Sign-in Now!</Link>
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

export default RegisterForm