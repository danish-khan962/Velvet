"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { Raleway } from 'next/font/google'
import { LuChevronRight } from "react-icons/lu";
import { FaGripLines, FaX } from "react-icons/fa6";

const raleway400 = Raleway({ subsets: ["latin"], weight: ["400"] })

const Navbar = () => {

  // States for Menu toggle
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`${raleway400.className} px-4 md:px-20 bg-black py-3 md:py-4 flex flex-row justify-between items-center`}>
      <Link href={"/"} className='text-base md:text-[18px] font-semibold tracking-widest'>
        Velvet
      </Link>

      {/* Desktop Navigations */}
      <div className='hidden sm:flex flex-row items-center'>
        <div className='flex flex-row gap-x-8'>
          <p className='text-sm text-white/80 hover:cursor-pointer hover:text-white transition-colors ease-in-out duration-200'> Sign up </p>
          <p className='text-sm text-white/80 hover:cursor-pointer hover:text-white transition-colors ease-in-out duration-200'> Login </p>
        </div>
        <Link href={"/"} className='ml-[50px]'>
          <button className='flex flex-row items-center justify-between bg-violet-900 py-1.5 px-6 rounded-sm hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer text-sm'>Build case <LuChevronRight className='ml-[12px] text-[18px]'/> </button>
        </Link>
      </div>

      {/* Mobile Navigations */}
      <div className='flex flex-row items-center gap-x-3 sm:hidden'>
        <Link href={"/"} className='ml-[50px]'>
          <button className='flex flex-row items-center justify-between bg-violet-900 py-1.5 px-6 rounded-sm hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer text-sm'>Build case <LuChevronRight className='ml-[12px] text-[18px]'/> </button>
        </Link>
        {isOpen ? (<FaX onClick={handleToggle} className='cursor-pointer transition ease-in-out duration-200'/>) : (<FaGripLines onClick={handleToggle} className='cursor-pointer transition ease-in-out duration-200'/>)}
      </div>
    </div>
  )
}

export default Navbar
