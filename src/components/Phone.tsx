import React from 'react'
import Image from 'next/image'
import iPhone_14_pro_max from "../../public/images/iPhone_14_pro_max.png"
import arrow_vector from "../../public/images/arrow_vector_phone.png"
import { Indie_Flower } from 'next/font/google'

const indie_Flower = Indie_Flower({ subsets: ["latin"], weight: ["400"] })

const Phone = () => {
  return (
    <div className='w-full relative'>
      <Image
        src={iPhone_14_pro_max}
        alt="iPhone_14_pro_max"
        width={1000}
        height={1000}
        className='max-h-[450px] max-w-[500px] w-full h-full object-contain'
      />
      
      <Image
        src={arrow_vector}
        alt="arrow vector"
        height={1000}
        width={1000}
        className='h-[40px] w-[40px] absolute right-12 sm:right-0 lg:right-6 top-0'
      />
      <p className={`${indie_Flower.className} absolute text-[22px] font-semibold -top-16 -right-1 sm:-right-6 rotate-[20deg] leading-tight`}>Your image <br /> goes here..</p>
    </div>
  )
}

export default Phone
