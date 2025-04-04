'use client';
import { useState, useEffect } from 'react';
import { carbg, icon1, icon2, icon3, icon4, id, pass } from '@/untils/imgimport';
import Image from 'next/image';

const Section3 = () => {

    return (
        <>
            <div className='bg-[#FBF9FF] py-12 my-8'>
                <div className="container mx-auto ">
                    <div className='text-[#401A89] font-MODERNIZ text-[2rem] text-center leading-[1] mx-auto max-[1000px]:w-full w-[50%] max-[1024px]:text-[1.5rem]'>Required Documents for a Hassle-Free Car Rental
                    </div>
                    <div className='text-[#667085] text-center leading-[1] mx-auto max-[1000px]:w-full w-[65%] mt-4'>The necessary documents for renting a car within Dubai differ between residents and tourists. Here’s what you’ll need!
                    </div>
                    <div className="w-full grid grid-cols-2 max-[1024px]:grid-cols-1 gap-4 mt-4">
                        <div className='p-8 max-[700px]:py-8 max-[700px]:px-4 bg-white shadow-md rounded-[25px] '>
                            <div className="w-[60%] max-[1024px]:w-full font-MODERNIZ text-[#401A89] leading-[1] text-[1.5rem]">For UAE Residents 
                            </div>
                            <div className='flex max-[1024px]:flex-col gap-4'>
                                <ul className='w-1/2 max-[1024px]:w-full max-[1024px]:py-8 px-8 max-[700px]:px-4 m-auto'>
                                    <li className='leading-[1] py-[5px] relative bullet'>Emirates ID
                                    </li>
                                    <li className='leading-[1] py-[5px] relative bullet'>Driving License
                                    </li>
                                    <li className='leading-[1] py-[5px] relative bullet'>Visa Copy.
                                    </li>
                                </ul>
                                <div className='w-1/2 max-[1024px]:w-full'>
                                    <Image src={id} alt='' className='w-full h-full  object-cover' />
                                </div>
                            </div>
                        </div>
                        <div className='p-8 max-[700px]:py-8 max-[700px]:px-4 bg-white shadow-md rounded-[25px]'>
                            <div className="w-[60%] max-[1024px]:w-full font-MODERNIZ text-[#401A89] leading-[1] text-[1.5rem] pb-4">For Tourists 
                            </div>
                            <div className='flex max-[1024px]:flex-col gap-4'>
                                <ul className='w-1/2 max-[1024px]:w-full max-[1024px]:py-4 px-8 max-[700px]:px-4 m-auto'>
                                    <li className='leading-[1] py-[5px] relative bullet'>Passport
                                    </li>
                                    <li className='leading-[1] py-[5px] relative bullet'>Visa
                                    </li>
                                    <li className='leading-[1] py-[5px] relative bullet'>International Driving Permit (IDP).
                                    </li>
                                </ul>
                                <div className='w-1/2 max-[1024px]:w-full'>
                                    <Image src={pass} alt='' className='w-[9rem] object-cover ml-auto rotate-[15deg] max-[1024px]:rotate-0 max-[1024px]:mr-auto max-[1024px]:ml-0' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section3;