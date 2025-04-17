"use client";
import { Quotation_Icon, avatar, star, test, user, user1 } from '@/untils/imgimport';
import React, { useRef, useEffect } from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';
import { main } from '@/app/data/main';



const Section4 = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null); // Store Swiper instance

    const { language } = useLanguage()

    const data = {
        en: [
            {
                review: "Renting a car was so easy! I experienced a rapid booking process from them that led to direct car delivery at my hotel. Excellent service and great prices!",
                name: "James R., UAE",
                user: avatar
            },
            {
                review: "The team assisted me in selecting my ideal car for my journey. This entire rental experience worked without any problems as the vehicle arrived in flawless condition.",
                name: "Aisha M., UAE",
                user: user1
            },
            {
                review: "This rental experience stood out from all previous car rentals I have used as the best one. No hidden fees, easy booking, and great vehicle options.",
                name: "Omar K., Saudi Arabia",
                user: user
            },
            {
                review: "They have Great selection of cars at affordable rates. The pick-up and drop-off service made everything so convenient. Will definitely rent again!",
                name: "Sophia L., Germany",
                user: user
            }
        ],
        ar: [
            {
                review: "كان استئجار سيارة في غاية السهولة! لقد استمتعت بعملية حجز سريعة منهم، مما أدى إلى تسليم السيارة مباشرةً إلى فندقي. خدمة ممتازة وأسعار رائعة!",
                name: "جيمس ر.، الإمارات العربية المتحدة",
                user: avatar
            },
            {
                review: "استمع إلى آراء عملائنا السعداء! ساعدني الفريق في اختيار السيارة المثالية لرحلتي. كانت تجربة التأجير مثالية، حيث وصلت السيارة بحالة ممتازة.",
                name: "عائشة م.، الإمارات العربية المتحدة",
                user: user1
            },
            {
                review: "كانت تجربة استئجار السيارات هذه مميزة عن جميع تجارب استئجار السيارات السابقة التي جربتها، فهي الأفضل. لا رسوم خفية، وسهولة الحجز، وخيارات سيارات رائعة.",
                name: "عمر ك.، المملكة العربية السعودية",
                user: user
            },
            {
                review: "لديهم تشكيلة رائعة من السيارات بأسعار معقولة. خدمة الاستلام والتوصيل جعلت كل شيء مريحًا للغاية. سأستأجر سيارة مرة أخرى بالتأكيد!",
                name: "صوفيا ل.، ألمانيا",
                user: user
            }
        ]
    }

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, []);

    return (
        <section className={`container mx-auto my-20 pt-20 max-[1024px]:pt-[13rem] relative max-[1024px]:my-[6rem] sectionFour_${language}`}>
            <div className='grid grid-cols-2 max-[1024px]:grid-cols-1 gap-4 absolute top-0'>
                <div className='text-[#401B89] font-MODERNIZ text-[2rem] leading-[1] max-[1024px]:text-[1.5rem] max-[1024px]:text-center max-[370px]:text-[1.5rem] min-[1024px]:hidden'>{main[language]["testimonialHeader"]}</div>
                <div><Image src={test} alt='' className='w-full object-cover h-full rounded-[20px]' /></div>
                <div className='text-[#401B89] font-MODERNIZ text-[2rem] leading-[1] max-[1000px]:text-[2rem] max-[370px]:text-[1.7rem] max-[1024px]:hidden'>{main[language]["testimonialHeader"]}</div>
            </div>

            <div className='w-[80%] max-[1024px]:w-[95%] ar_content max-[1024px]:mx-auto max-[1024px]:p-2 max-[1024px]:rounded-[10px] ml-auto relative p-8 bg-white'>
                <div className='absolute inset-0 bg-white max-[1024px]:rounded-[10px]'></div>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Autoplay]}
                    slidesPerView={2}
                    spaceBetween={20}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1, // 1 slide on small screens
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1, // 2 slides on tablets
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2, // 3 slides on larger screens
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 2, // 4 slides on desktops
                            spaceBetween: 40,
                        },
                    }}
                >
                    {Array.isArray(data[language]) && data[language].map((item, index) => {
                        const { review, name, user } = item
                        return (
                            <SwiperSlide key={index}>
                                <div className="p-8 bg-[#FBF9FF] max-[1000px]:p-4">
                                    <Image src={Quotation_Icon} alt='' className='w-[5rem] ' />
                                    <p className='text-[#401A89] text-[1rem] ml-auto leading-[1.4] w-[93%] max-[1000px]:w-full max-[1000px]:text-[1rem] max-[1000px]:leading-[1]'>
                                        {review}
                                    </p>
                                    <div className='flex items-center gap-4 ml-auto w-[93%] mt-6 max-[1000px]:w-full'>
                                        <div className='w-[5rem] h-[5rem] '>
                                            <Image src={user} className='w-full h-full rounded-[1rem] object-cover ' alt='' />
                                        </div>
                                        <div>
                                            <div className='text-[#482B7F] font-MODERNIZ'>{name}</div>
                                            {/* <div>Nissan Sunny 2019</div> */}
                                            <div className='flex items-center gap-2'>
                                                <Image src={star} alt='' />
                                                <span>5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            {/* Custom Navigation Buttons at Bottom Right */}
            <div className="absolute bottom-[1.25rem] buttonGroup left-[4.25rem] z-20 flex gap-4 max-[1024px]:left-0 max-[1024px]:right-0 max-[1024px]:mx-auto max-[1024px]:bottom-[-60px]">
                <button ref={prevRef} className="w-[3rem] h-[3rem] prevBtn rounded-[10px] bg-[#FBF9FF] grid place-items-center cursor-pointer ">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.491 11.119L5.58797 11.119L14.5029 2.20413L12.4296 0.130898L-0.00976562 12.5703L12.4296 25.0097L14.5029 22.9365L5.58797 14.0216L25.491 14.0216V11.119Z" fill="#401A89" />
                    </svg>
                </button>

                <button ref={nextRef} className="w-[3rem] h-[3rem] nextBtn rounded-[10px] bg-[#FBF9FF] grid place-items-center cursor-pointer ">
                    <svg className='scale-x-[-1]' width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.491 11.119L5.58797 11.119L14.5029 2.20413L12.4296 0.130898L-0.00976562 12.5703L12.4296 25.0097L14.5029 22.9365L5.58797 14.0216L25.491 14.0216V11.119Z" fill="#401A89" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Section4;
