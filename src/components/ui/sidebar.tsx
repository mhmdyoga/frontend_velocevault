"use client";
import { LogOut, Settings2Icon, User2Icon } from 'lucide-react'
import { Micro_5 } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { Button } from './button';
import { useLogout } from '@/features/auth/hooks/hookAuth';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';


const Micro5 = Micro_5({
    subsets: ["latin"],
    weight: ["400"],
})

const Sidebar = () => {
  const [username, setUsername] = React.useState('');

  const {mutate: Logout} = useLogout();
  const router = useRouter();
  const { toast } = useToast();

  React.useEffect(() => {
    const storedName = localStorage.getItem('value-data-username');
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  const handleLogout = () => {
    try{
     Logout();
      localStorage.removeItem('value-data-username');
        toast({
              title: "Logout Success",
              description: "You have successfully logged out.",
            });
            router.push('/');
    }catch(err){
            toast({
                title: "Logout Failed",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                description: (err as any).response.data.message,
            })
    }
  }

  return (
    <div className="bg-white w-56 h-screen flex flex-col">
        <div className="flex justify-center items-center">
          <h2 className={`font-bold p-6 text-5xl text-black ${Micro5.className}`}>VeloceVault</h2>
        </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <User2Icon className="w-10 h-10 text-black font-bold" />
        <h2 className="font-bold text-black">{username}</h2>
      </div>
      <div className='flex flex-col gap-3 p-6'>
         <Link href="/settings/profile" className='flex hover:bg-black- flex-row gap-2 items-center'>
             <User2Icon className='w-6 h-6 text-black font-bold' />  
             <h2 className='font-bold text-sm text-black'>Profile</h2>
         </Link>
         <Link href="/settings/profile" className='flex hover:bg-black- flex-row gap-2 items-center'>
             <Settings2Icon className='w-6 h-6 text-black font-bold' />  
             <h2 className='font-bold text-sm text-black'>Settings</h2>
         </Link>  
      </div>
      <div className='mt-[320px] p-6'>
        <Button onClick={handleLogout} variant="destructive" className='bg-red-500 hover:bg-red-600 text-white font-bold w-full flex flex-row gap-2'>
          <LogOut className='text-white font-bold'/>    Logout
        </Button>
      </div>
    </div>
  )
}

export default Sidebar