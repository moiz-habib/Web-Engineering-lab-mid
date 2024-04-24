import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Illustration from "../../assets/images/Illustration.png";

export const HeroContent = () => {
  return (
    <div className='flex px-36 bg-slate-100 h-[500px] justify-evenly items-center'>
        <div className='maintext'>
            <div className='leading-none'>
                <p className='font-black text-[68px]'>Lessons and insights</p>
                <p className='font-black text-[68px] text-[#4CAF4F]'>from 8 years</p>
            </div>
            <div className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, eaque.</div>
            <div>
                <Button variant={'default'} className='bg-[#4CAF4F] px-5 rounded-sm'>Register</Button>
            </div>
        </div>
        <div>
            <Image
            src={Illustration}
            alt=''
            className='h-[380px] object-contain'/>
            
        </div>
    </div>
  )
}
