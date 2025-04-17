'use client';
import React, { useEffect } from 'react';
import { back, banner } from '@/untils/imgimport';
import Image from 'next/image';
import { SplashCursor } from '../ui/splash-cursor';
import { useLanguage } from '@/app/context/LanguageContext';
import { main } from '@/app/data/main';

const Banner = () => {

  const { language, changeLanguage } = useLanguage();
  // {main[language]["sayHello"]}
  return (
    <>
      <SplashCursor className='hidden' />
      <div className={`relative h-screen max-[1024px]:h-[60vh] max-[1024px]:mb-[7rem] banner_${language}`}>
        <Image src={back} alt='back' className='absolute inset-0 w-full h-full object-cover ' />
        <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent '></div>
        <div className='absolute container max-[1000px]:w-full max-[1000px]:px-4 left-0 right-0 top-[27%] max-[1024px]:top-[37%] max-[700px]:top-[40%] mx-auto pb-4'>
          <div className='w-[70%] max-[1024px]:w-full mt-4 max-[1024px]:text-center'>
            <h1 className=' text-white text-[3rem] uppercase font-extrabold max-[1000px]:w-full leading-[1] mx-auto [text-shadow:0px_3.73388px_21.6462px_rgba(255,255,255,0.5)] max-[1000px]:text-[2rem] max-[700px]:text-[1.5rem] font-MODERNIZ'>
              {main[language]["bannerHeading"]}
            </h1>
            <p className=' text-white w-[75%] font-light mt-7 max-[700px]:mt-1 text-[18px] max-[1000px]:w-full max-[1024px]:leading-[1]'>
              {main[language]["bannerText"]}
            </p>
          </div>
        </div>
        <div className='absolute container pt-5 bottom-[-7rem] right-[4rem] max-[1024px]:left-0 max-[1024px]:right-0 max-[1024px]:mx-auto max-[1024px]:px-2 ml-auto'>
          <Image src={banner} alt='banner' className='w-[70%] img_carbanner max-[1024px]:w-full max-[1024px]:mx-auto ml-auto h-full object-cover ' />
        </div>
      </div>
    </>
  );
};

export default Banner;
