import React from 'react'
import { Raleway } from 'next/font/google'
import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';
import { MdOutlineDone } from 'react-icons/md';
import { testimonialData } from '@/constants/data';

const raleway700 = Raleway({ subsets: ["latin"], weight: ["700"] });
const raleway400 = Raleway({ subsets: ["latin"], weight: ["400"] });

const Testimonial = () => {
    return (
        <div className={`${raleway400.className} custom-screen-width px-4 md:px-20 mt-[80px] md:mt-[160px]`}>
            <h1 className={`${raleway700.className} relative text-3xl md:text-5xl text-center`}> Hear from our clients </h1>

            <div className='mt-[80px] md:mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-8'>
                {testimonialData.map((testimonial, index) => (
                    <div className='max-w-[550px] w-full flex flex-col gap-y-[20px] md:gap-y-[30px] bg-gradient-to-br from-purple-900 to-black/80 p-3 md:p-4 rounded-xl backdrop-blur-md' key={testimonial.id}>

                        {/* Rating stars */}
                        <div className='flex flex-row gap-x-2.5'>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className='text-yellow-300' />
                            ))}
                        </div>

                        {/* Testimonial review paragraph */}
                        <p className='text-base md:text-[18px] leading-relaxed'>
                            "{testimonial.review}"
                        </p>

                        {/* Profile icon and name div */}
                        <div className='flex flex-row gap-x-6 md:gap-x-8 items-center'>
                            <Image
                                src={testimonial.image}
                                alt="customer_icon"
                                width={100}
                                height={100}
                                className="h-14 w-14 rounded-full border-2 border-white object-cover object-top !m-0 !p-0"
                            />
                            <div className='flex flex-col gap-y-1 md:gap-x-1'>
                                <p className='font-medium text-base md:text-[18px]'> {testimonial.name} </p>
                                <div className='flex flex-row items-center gap-x-2 text-sm'>
                                    <MdOutlineDone className="text-green-500 text-base md:text-[18px]" />
                                    <p className='text-white/70 tracking-wide'>Confirmed Purchase</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Testimonial
