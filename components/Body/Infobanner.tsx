import Image from 'next/image'
import React from 'react'
import logo1 from "../../assets/images/Logo-1.png";
import logo2 from "../../assets/images/Logo-2.png";
import logo3 from "../../assets/images/Logo-3.png";
import logo4 from "../../assets/images/Logo-4.png";
import logo5 from "../../assets/images/Logo-5.png";
import logo6 from "../../assets/images/Logo-6.png";
import icon1 from "../../assets/images/Icon.png";
import icon2 from "../../assets/images/Icon-1.png";
import icon3 from "../../assets/images/Icon-2.png";

export const Infobanner = () => {
  return (
    <div className='flex flex-col py-4 gap-20'>
        <div className='flex flex-col items-center '>
            <div className='text-[40px] font-medium text-slate-700'>Our Client</div>
            <div className='text-slate-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, maxime!</div>
        </div>
        <div className='flex items-center justify-evenly'>
            <div>
                <Image
                src={logo1}
                alt=''
                className='h-[40px] object-contain ' />
            </div>
            <div>
                <Image
                src={logo2}
                alt=''
                className='h-[40px] object-contain ' />
            </div>
             <div>
                <Image
                src={logo3}
                alt=''
                className='h-[40px] object-contain ' />
            </div>
            <div>
                <Image
                src={logo4}
                alt=''
                className='h-[40px] object-contain ' />
            </div>
            <div>
                <Image
                src={logo5}
                alt=''
                className='h-[40px] object-contain ' />
            </div>
            <div>
                <Image
                src={logo6}
                alt=''
                className='h-[40px] object-contain ' />
            </div>
        </div>
        
        <div className='flex flex-col items-center '>
            <div className='text-[40px] font-bold text-slate-700 text-center leading-tight'>Manage your Entire community<br></br>in a single system</div>
            <div className='text-slate-700'>Lorem ipsum dolor sit amet consectetur.</div>
        </div>
        <div className='px-8 flex items-center justify-evenly gap-5'>
            <div className='flex flex-col items-center'>
                <div>
                    <Image 
                    src={icon1}
                    alt=''/> 
                </div>
                <div className='text-[#4D4D4D] font-bold text-[20px] text-center'>Membership<br></br>Organisations</div>
                <div className='text-[#717171] text-center'>Our membership management software provides full automation of membership renewals and payments</div>
            </div>
            <div className='flex flex-col items-center'>
                <div>
                    <Image 
                    src={icon2}
                    alt=''/> 
                </div>
                <div className='text-[#4D4D4D] font-bold text-[20px] text-center'>National<br></br>Associations </div>
                <div className='text-[#717171] text-center'>Our membership management software provides full automation of membership renewals and payments</div>
            </div>
            <div className='flex flex-col items-center'>
                <div>
                    <Image 
                    src={icon3}
                    alt=''/> 
                </div>
                <div className='text-[#4D4D4D] font-bold text-[20px] text-center'>Clubs And<br></br>Groups</div>
                <div className='text-[#717171] text-center'>Our membership management software provides full automation of membership renewals and payments</div>
            </div>
        </div>
    </div>
  )
}
