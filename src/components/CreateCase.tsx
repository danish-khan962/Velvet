import React from 'react'
import { Raleway } from 'next/font/google'
import Image from 'next/image';
import owl_image from "../../public/images/owl_img.jpg"
import iPhone_14_pro_max from "../../public/images/iPhone_14_pro_max.png"
import { MdOutlineDone } from 'react-icons/md';
import { HiArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';
import arrow from "../../public/images/arrow_2.png"

const raleway400 = Raleway({ subsets: ["latin"], weight: ["400"] });
const raleway700 = Raleway({ subsets: ["latin"], weight: ["700"] });

// benefits data
const benefits = ["High quality - durable material", "Scratch and fingerprint resistant coating", "3 years print guarantee", "Discount on prepaid orders"]

const CreateCase = () => {
    return (
        <div className={`${raleway400.className} w-full relative custom-screen-width px-4 md:px-20 mt-[120px] md:mt-[160px]`}>
            <h1 className={`${raleway700.className} relative text-3xl md:text-5xl text-center bottom-3 leading-loose md:leading-[95px]`} style={{wordSpacing: "0.2rem"}}>
                Make it yours – <br />
                <span className="bg-purple-900 p-3 rounded">personalize</span> your case with a photo
            </h1>

            <div className='flex flex-col sm:flex-row justify-between gap-x-12 gap-y-16 items-center mt-[30px] md:mt-[80px]'>
                <Image
                    src={owl_image}
                    alt="cat_bg"
                    width={1000}
                    height={1000}
                    className='max-w-[420px] w-full max-h-[550px] h-full object-cover rounded-xl'
                />

                <Image
                src={arrow}
                alt="alt"
                height={1000}
                width={1000}
                className='w-[120px] md:w-[140px] lg:w-[200px] h-[30px] rotate-90 sm:rotate-0'
                />

                <Image
                    src={iPhone_14_pro_max}
                    alt="iPhone_14_pro_max"
                    width={1000}
                    height={1000}
                    className='max-w-[400px] w-full max-h-[500px] h-full object-contain'
                />
            </div>

            <div className='w-full flex justify-center items-center mt-[40px] md:mt-[60px]'>
                <div className="flex flex-col gap-y-2">
                    {benefits.map((benefit, index) => (
                        <div className="flex flex-row items-center gap-x-5 font-semibold text-base md:text-[18px]" key={index}>
                            <MdOutlineDone className="text-green-500 text-base md:text-[18px]" />
                            <p> {benefit} </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-center items-center mt-[30px] md:mt-[40px]'>
                <Link href={"/"}>
                    <button className='flex flex-row items-center justify-between bg-violet-900 py-2 px-6 rounded-sm hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer text-sm md:text-base hover:bg-violet-900/80'>Customize your case now <HiArrowLongRight className='ml-[12px] text-[18px]' /> </button>
                </Link>
            </div>


        </div>
    )
}

export default CreateCase
