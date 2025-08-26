import React from 'react'
import { Raleway, Open_Sans } from "next/font/google";
import { MdOutlineDone } from "react-icons/md";
import { FaStar } from 'react-icons/fa';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { tooltipItems } from '@/constants/data';
import Phone from './Phone';

const raleway700 = Raleway({ subsets: ["latin"], weight: ["700"] });
const raleway400 = Raleway({ subsets: ["latin"], weight: ["400"] });
const openSans600 = Open_Sans({ subsets: ["latin"], weight: ["600"] })

// Hero benefits data
const heroBenefits = ["High quality - durable material", "3 years print guarantee", "iPhone and Android models support"]

const Hero = () => {
    return (
        <div className="custom-screen-width mt-[35px] md:mt-[75px] px-4 md:px-20 flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-32">
            <div className={`${raleway400.className}`}>
                <h1 className={`${raleway700.className} capitalize text-4xl md:text-5xl lg:text-6xl leading-[60px] md:leading-relaxed text-center md:text-start`} style={{ wordSpacing: "0.3rem" }}>
                    Your image on a <span className="bg-purple-900 p-2 rounded">custom</span> phone case
                </h1>
                <p className="mt-[30px] md:mt-[50px] text-base md:text-[18px] leading-snug tracking-widest text-center md:text-start" style={{ wordSpacing: "0.1rem" }}>Capture your favorite memories with your own, <span className="font-semibold">one-of-one</span> phone case. Velvet allows you to protect your memories, not just your phone case.</p>

                <div className="flex flex-col gap-y-2 mt-[30px] md:mt-[35px]">
                    {heroBenefits.map((benefit, index) => (
                        <div className="flex flex-row items-center gap-x-5 font-semibold text-base md:text-[18px]" key={index}>
                            <MdOutlineDone className="text-green-500 text-base md:text-[18px]" />
                            <p> {benefit} </p>
                        </div>
                    ))}
                </div>

                {/* Animated tooltip */}
                <div className='mt-[50px] md:mt-[60px] flex flex-row items-center gap-x-14 md:gap-x-18 justify-center md:justify-start'>
                    <div className='flex flex-row items-center'>
                        <AnimatedTooltip items={tooltipItems} />
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <div className='flex flex-row gap-x-2.5'>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className='text-yellow-300' />
                            ))}
                        </div>
                        <p className='text-sm md:text-base'> <span className={`${openSans600.className}`}>1,350+</span> happy clients</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[400px]">
                    <Phone />
            </div>

        </div>
    )
}

export default Hero
