import React from 'react'
import Link from 'next/link'
import { Raleway } from 'next/font/google'
import { LuChevronRight } from "react-icons/lu";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const raleway400 = Raleway({ subsets: ["latin"], weight: ["400"] })

const Navbar = async() => {

  // USER authentication and server session + Admin dashboard
  const {getUser} = getKindeServerSession()
  const user = await getUser();

  const ADMIN = user?.email === process.env.ADMIN_EMAIL;

  return (
    <div className='w-full bg-black'>
      <div className={`${raleway400.className} custom-screen-width px-4 md:px-20  bg-black py-3 md:py-4 flex flex-row justify-between items-center`}>
        <Link href={"/"} className='text-base md:text-[18px] font-semibold tracking-widest'>
          Velvet
        </Link>

        {/* Desktop Navigations */}
        <div className='flex flex-row items-center'>
          {user ? (
            <>
              <div className='flex flex-row gap-x-8 items-center'>
                <Link href={"/api/auth/logout"} className='text-sm text-white/80 hover:cursor-pointer hover:text-white transition-colors ease-in-out duration-200'> Logout </Link>

              {ADMIN ? (
                <Link href={"/api/auth/logout"} className='text-sm text-indigo-400 hover:cursor-pointer hover:text-white transition-colors ease-in-out duration-200'> Dashboard </Link>
              ) : (null)}

              <Link href={"/configure/upload"} className='hidden sm:block ml-[15px]'>
                <button className='flex flex-row items-center justify-between bg-violet-900 py-1.5 px-6 rounded-sm hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer text-sm'>Build case <LuChevronRight className='ml-[12px] text-[18px]' /> </button>
              </Link>
              </div>
            </>
          ) : (
            <>
              <div className='flex flex-row gap-x-8 items-center'>
                <Link href={"/api/auth/register"} className='text-sm text-white/80 hover:cursor-pointer hover:text-white transition-colors ease-in-out duration-200'> Sign up </Link>

                <Link href={"/api/auth/login"} className='text-sm text-white/80 hover:cursor-pointer hover:text-white transition-colors ease-in-out duration-200'> Login </Link>

                <Link href={"/configure/upload"} className='hidden sm:block ml-[15px]'>
                  <button className='flex flex-row items-center justify-between bg-violet-900 py-1.5 px-6 rounded-sm hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer text-sm'>Build case <LuChevronRight className='ml-[12px] text-[18px]' /> </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
