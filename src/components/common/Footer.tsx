import React from 'react'
import { Raleway } from 'next/font/google'
import Link from 'next/link'

const raleway400 = Raleway({ subsets: ["latin"], weight: ["400"] })

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full bg-black'>
      <div className={`${raleway400.className} custom-screen-width px-4 md:px-20 bg-black py-5 md:py-6 mt-[40px] md:mt-[70px] flex flex-col  gap-y-5 md:flex-row justify-center md:justify-between items-center`}>
      <p className='text-xs md:text-sm text-white/80 font-medium'>
        &copy; {currentYear} | All rights reserved.
      </p>

      <ul className='flex flex-row gap-x-8 text-xs md:text-sm text-white/80'>
        <li><Link href={"/"} className='hover:underline hover:text-purple-400 transition-all ease-in-out duration-200'>Terms & Conditions</Link></li>
        <li><Link href={"/"} className='hover:underline hover:text-purple-400 transition-all ease-in-out duration-200'>Privacy Policy</Link></li>
      </ul>
    </div>
    </div>
  )
}

export default Footer
