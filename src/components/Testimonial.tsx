'use client';

import React from 'react'
import { Raleway } from 'next/font/google'
import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';
import { MdOutlineDone } from 'react-icons/md';
import { testimonialData } from '@/constants/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import wavyLine_1 from "../../public/images/wavy-line-1.png"

const raleway700 = Raleway({ subsets: ["latin"], weight: ["700"] });
const raleway400 = Raleway({ subsets: ["latin"], weight: ["400"] });

const Testimonial = () => {
    return (
        <div className={`${raleway400.className} custom-screen-width px-4 md:px-20 mt-[80px] md:mt-[160px]`}>
            <div className='w-full'>
                <h1 className={`${raleway700.className} relative text-3xl md:text-5xl text-center bottom-3`}> Hear from our clients</h1>
                <Image src={wavyLine_1} alt="wavyLine" height={1000} width={1000} className='h-[20px] sm:h-[30px] md:h-[40px] lg:h-[50px] w-fit object-cover absolute right-[18%] sm:right-[25%] md:right-[28%] lg:right-[35%]'/>
            </div>

            <div className='mt-[80px] md:mt-[100px] relative'>
                <Swiper
                    modules={[ Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{delay: 2000, disableOnInteraction: false}}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    className='testimonial-swiper'
                >
                    {testimonialData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className='max-w-[750px] w-full flex flex-col gap-y-[20px] md:gap-y-[30px] bg-gradient-to-br from-[#6441A5] to-[#2a0845] p-3 md:p-4 rounded-xl backdrop-blur-md'>

                                <div className='flex flex-row gap-x-2.5 pt-6'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className='text-yellow-300' />
                                    ))}
                                </div>

                                <p className='text-base md:text-[18px] leading-relaxed'>
                                    <span className='font-bold text-[22px]'> &quot; </span>
                                        {testimonial.review} 
                                    <span className='font-bold text-[22px]'> &quot; </span>
                                </p>

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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonial
