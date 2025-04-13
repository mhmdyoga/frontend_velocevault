"use client";
import { Button } from '@/components/ui/button'
import { XCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const PaymentFailed = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-screen'>
    <XCircle className='text-red-400'/>
    <h1 className='text-white font-bold'>Transaction Failed</h1>
    <span className='text-white font-medium'>if you have to problems. just hit the email support@velocevault.com Enjoy!</span>
    <div className='mt-8'>
      <Button onClick={() => router.back()} variant="ghost" className="text-green-400 font-bold">Back</Button>
    </div>
  </div> 
  )
}

export default PaymentFailed