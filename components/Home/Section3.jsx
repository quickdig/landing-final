'use client';
import { useState, useEffect } from 'react';
import { carbg, icon1, icon2, icon3, icon4, id, pass } from '@/untils/imgimport';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';
import { main } from '@/app/data/main';

const Section3 = () => {

    const { language } = useLanguage();

    return (
        <>
            <div className={`bg-[#FBF9FF] py-12 my-8 sectionThree_${language}`}>
                <div className="container mx-auto ">
                    <div className='text-[#401A89] font-MODERNIZ text-[2rem] text-center leading-[1] mx-auto max-[1000px]:w-full w-[50%] max-[1024px]:text-[1.5rem]'>
                        {main[language]["requiredDocs"]}
                    </div>
                    <div className='text-[#667085] text-center leading-[1] mx-auto max-[1000px]:w-full w-[65%] mt-4'>
                        {main[language]["neccessaryDocs"]}
                    </div>
                    <div className="w-full grid grid-cols-2 max-[1024px]:grid-cols-1 gap-4 mt-4">
                        <div className='p-8 max-[700px]:py-8 max-[700px]:px-4 bg-white shadow-md rounded-[25px] '>
                            <div className="w-[60%] max-[1024px]:w-full font-MODERNIZ text-[#401A89] leading-[1] text-[1.5rem]">{main[language]["forUAE"]}
                            </div>
                            <div className='flex max-[1024px]:flex-col gap-4'>
                                <ul className='w-1/2 max-[1024px]:w-full max-[1024px]:py-8 px-8 max-[700px]:px-4 m-auto ar_ul'>
                                    <li className='leading-[1] py-[5px] relative bullet'>{main[language]["EID"]}
                                    </li>
                                    <li className='leading-[1] py-[5px] relative bullet'>{main[language]["drivingLic"]}
                                    </li>
                                    <li className='leading-[1] py-[5px] relative bullet'>{main[language]["visaCopy"]}
                                    </li>
                                </ul>
                                <div className='w-1/2 max-[1024px]:w-full'>
                                    <Image src={id} alt='' className='w-full h-full object-cover' />
                                </div>
                            </div>
                        </div>
                        <div className='p-8 max-[700px]:py-8 max-[700px]:px-4 bg-white shadow-md rounded-[25px]'>
                            <div className="w-[60%] max-[1024px]:w-full font-MODERNIZ text-[#401A89] leading-[1] text-[1.5rem] pb-4">
                                {main[language]["forTourist"]}
                            </div>
                            <div className='flex max-[1024px]:flex-col gap-4'>
                                <ul className='w-1/2 max-[1024px]:w-full max-[1024px]:py-4 px-8 max-[700px]:px-4 m-auto ar_ul'>
                                    <li className='leading-[1] py-[5px] relative bullet'>
                                        {main[language]["passport"]}
                                    </li>
                                    <li className='leading-[1] py-[5px] relative bullet'>
                                        {main[language]["validVisa"]}
                                    </li>
                                    <li className='leading-[1] py-[5px] relative bullet'>
                                        {main[language]["IDP"]}
                                    </li>
                                </ul>
                                <div className='w-1/2 max-[1024px]:w-full ar_img'>
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