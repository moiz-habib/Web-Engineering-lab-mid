import Image from 'next/image'
import React from 'react'
import Mainlogo from '../../assets/images/mainlogo.png'
import { Button } from '../ui/button'

export const Navbar = () => {
  return (
    <main className=' flex px-12 py-8 justify-between'>
        <div className='flex items-center gap-4 '>
            <div>
                <Image src={Mainlogo}
                alt=''
                className=''/>
            </div>
            <div className='text-[25px] font-bold'>Nexcent</div>
        </div>
        <div className='flex gap-4'>
          <Button variant={'link'}>Home</Button> 
          <Button variant={'link'}>Features</Button> 
          <Button variant={'link'}>Community</Button> 
          <Button variant={'link'}>Blog</Button> 
          <Button variant={'link'}>Pricing</Button> 
          <Button variant={'default'} className='bg-[#4CAF4F] px-5 rounded-sm'>Register Now </Button> 
        </div>
    </main>
  )
}
