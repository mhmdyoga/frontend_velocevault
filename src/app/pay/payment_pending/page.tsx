"use client";
import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const PaymentPending = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-screen'>
    <Clock className='text-amber-400'/>
    <h1 className='text-white font-bold'>Transaction Pending</h1>
    <span className='text-white font-medium'>if you hve to consult or ask w our team. just hit the email support@velocevault.com Enjoy!</span>
    <div className='mt-8'>
      <Button onClick={() => router.back()} variant="ghost" className='text-green-400 font-bold'>Back</Button>
    </div>
  </div>
  )
}

export default PaymentPending