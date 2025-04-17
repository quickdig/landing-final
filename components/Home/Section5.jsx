import { cars, line1, line2 } from '@/untils/imgimport'
import Image from 'next/image'
import React from 'react'
import { carLeft, carRight } from '@/untils/imgimport'
import { useLanguage } from '@/app/context/LanguageContext'
import { main } from '@/app/data/main'


const Section5 = () => {

    const { language } = useLanguage()

    return (
        <>
            <div className={`container mx-auto px-4 sectionFive_${language}`}>
                <div className="relative space-y-8 px-10">

                    {/* Top Row */}
                    <div className="top_row flex flex-col md:flex-row justify-center pt-12 items-center md:items-start gap-6">
                        <div className="w-full md:w-1/2">
                            <p className="text-lg pl-5 font-medium text-[#525252] capitalize mb-2">{main[language]["secFourLeftHeadingOne"]}</p>
                            <div className="box_leftBorder border_headerAR border-l-2 border-[#401A89] pl-4 mb-2">
                                <h3 className="text-xl md:text-2xl font-MODERNIZ text-[#401A89] font-bold">
                                    {main[language]["secFourLeftHeadingTwo"]}
                                </h3>
                            </div>
                            <p className="text-sm pl-5 md:text-base text-[#525252] leading-normal">
                                {main[language]["secFourLeftPara"]}
                            </p>

                            {/* <button className='bg-[#401A89] ml-5 px-4 py-3 font-extralight text-white rounded-md mt-4'>Explore Now</button> */}
                        </div>

                        <div className="w-full md:w-1/2 h-[200px] md:h-[200px] object-contain rounded-t-3xl overflow-hidden">
                            <Image
                                src={carRight}
                                alt="carRight"
                                className="w-full h-full object-contain rounded-t-3xl"
                            />
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="bottom_row relative flex flex-col pt-12 md:flex-row justify-center items-center md:items-start gap-6 max-[700px]:flex-col-reverse">
                        <div className='absolute svg_ar -left-16 -top-12 max-[700px]:-z-10'>
                            <svg width="169" height="330" viewBox="0 0 169 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M79.2733 1.2968C24.8369 30.7159 -55.3389 102.259 59.4498 153.077C174.239 203.896 175.276 291.746 161.445 329.319" stroke="black" stroke-width="1.13386" stroke-dasharray="11.34 11.34" />
                            </svg>
                        </div>
                        <div className="w-full relative md:w-1/2 h-[200px] md:h-[300px] object-contain rounded-t-3xl overflow-hidden">
                            <Image
                                src={carLeft}
                                alt="carRight"
                                className="w-full h-full -ml-1 object-contain rounded-t-3xl"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <p className="text-lg pl-5 font-medium text-[#525252] capitalize mb-2">{main[language]["secFourRightHeadingOne"]}</p>
                            <div className="box_leftBorder border-l-2 border-[#401A89] pl-4 mb-2 border_headerAR">
                                <h3 className="text-xl md:text-2xl font-MODERNIZ text-[#401A89] font-bold">
                                    {main[language]["secFourRightHeadingTwo"]}
                                </h3>
                            </div>
                            <p className="text-sm pl-5 md:text-base text-[#525252] leading-normal">
                                {main[language]["secFourRightPara"]}
                            </p>

                            {/* <button className='bg-[#401A89] ml-5 px-4 py-3 font-extralight text-white rounded-md mt-4'>Explore Now</button> */}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Section5