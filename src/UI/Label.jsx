import { HighlighterIcon, Verified, VerifiedIcon } from 'lucide-react'
import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";



export default function Label() {
  return (
    <div className='py-16 my-20 bg-orange-200 md:flex-row flex flex-col items-center gap-8 md:justify-evenly'>
        <div className='flex gap-2 items-center'>
            <TfiCup className='size-10 text-black'/>
            <div>
                <h1 className=' text-black font-bold text-xl'>High Quality</h1>
                <p className='text-gray-500'>crafted from top materials</p>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <VerifiedIcon className='size-10 text-black'/>
            <div>
                <h1 className=' text-black font-bold text-xl'>Warranty Protection</h1>
                <p className='text-gray-500'>Over 2 years</p>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <FaShippingFast className='size-10 text-black'/>
            <div>
                <h1 className=' text-black font-bold text-xl'>Free Shipping</h1>
                <p className='text-gray-500'>Order over $150 </p>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <MdOutlineSupportAgent className='size-10 text-black'/>
            <div>
                <h1 className=' text-black font-bold text-xl'>24/7 Support</h1>
                <p className='text-gray-500'>Dedicated Support</p>
            </div>
        </div>
    </div>
  )
}
