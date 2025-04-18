'use client';
import Link from 'next/link';
import { logo, phone, mail } from '@/untils/imgimport';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';
import { main } from '@/app/data/main';

import { Button, Dropdown, Space } from 'antd';
import { GiEarthAmerica } from "react-icons/gi";

const Header = () => {

    const items = [
        {
            key: '1',
            label: (
                <button onClick={() => changeLanguage("en")}>
                    English
                </button>
            ),
        },
        {
            key: '2',
            label: (
                <button onClick={() => changeLanguage("ar")}>
                    Arabic
                </button>
            ),
        },

    ];

    const { language, changeLanguage } = useLanguage();
    const handleScrollClick = (params) => {
        const el = document.getElementById(params)

        if (el) {
            el.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className={`bg-white/10 backdrop-blur-[25px] header z-10 text-white py-4 absolute container left-0 right-0 mx-auto mt-4 max-[1000px]:mt-0 rounded-[6px] max-[1024px]:w-full header_${language}`}>
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4 max-[700px]:-ml-2">

                {/* Logo - Left Side */}
                <div className="absolute top-24 lg:top-2 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:w-auto">
                    <Image
                        src={logo}
                        alt="logo"
                        className="w-[70px] max-[700px]:w-[4rem]"
                    />
                </div>

                {/* Nav - Right Side on Desktop, Centered on Mobile */}
                <nav className="w-auto mr-0 ml-auto">
                    <ul className="flex flex-wrap items-center justify-end max-[700px]:flex-col max-[700px]:items-center gap-4 max-[1000px]:gap-2 text-sm">

                        {/* Navigation Links */}
                        <div className="flex flex-wrap mb-2 justify-end items-center gap-4 max-[700px]:justify-center max-[700px]:order-1">
                            <li className='cursor-pointer hover:border-b-2 border-[#401A89]'>
                                <a onClick={() => handleScrollClick("luxury")}>{main[language]["luxuryCars"]}</a>
                            </li>
                            <li className='cursor-pointer hover:border-b-2 border-[#401A89]'>
                                <a onClick={() => handleScrollClick("booknow")}>{main[language]["bookNow"]}</a>
                            </li>
                            <li className='cursor-pointer hover:border-b-2 border-[#401A89]'>
                                <a onClick={() => handleScrollClick("faq")}>{main[language]["faqs"]}</a>
                            </li>
                        </div>

                        {/* Contact Info Wrapper */}
                        <div className="flex items-center gap-4 max-[700px]:flex-row max-[700px]:items-center max-[700px]:order-2">

                            {/* Phone Section */}
                            <li className="flex items-center gap-2 text-center max-[700px]:justify-center">
                                <div className="bg-[#ffffff1a] w-[4rem] h-[4rem] rounded-lg grid place-items-center max-[1000px]:w-[2rem] max-[1000px]:h-[2rem]">

                                    <a className="text-white block max-[450px]:text-[10px]" href="tel:+971505079801">
                                        <Image alt="" src={phone} className="w-[1.5rem] max-[1000px]:w-[1rem]" />
                                    </a>
                                </div>
                                <div>
                                    <div className="text-secondary leading-[1] text-sm max-[1000px]:text-xs">{main[language]["callNow"]}</div>
                                    <dd className="m-0 text-xs flex">
                                        <a className="text-white block max-[450px]:text-[10px]" href="tel:+971505079801">+971 505 079 801</a>
                                    </dd>
                                </div>
                            </li>

                            {/* Mail Section */}
                            <li className="flex items-center gap-2 text-center max-[700px]:justify-center">
                                <div className="bg-[#ffffff1a] w-[3rem] h-[3rem] rounded-lg grid place-items-center max-[1000px]:w-[2rem] max-[1000px]:h-[2rem]">
                                    <a className="text-white" href="mailto:luxe@quicklease.ae">
                                        <Image alt="" src={mail} className="w-[1.5rem] max-[1000px]:w-[1rem]" />
                                    </a>
                                </div>
                                <div>
                                    <div className="text-secondary leading-[1] text-sm max-[1000px]:text-xs">{main[language]["sayHello"]}</div>
                                    <dd className="m-0 text-xs">
                                        <a className="text-white" href="mailto:luxe@quicklease.ae">luxe@quicklease.ae</a>
                                    </dd>
                                </div>
                            </li>
                            <li className="flex items-center gap-2 text-center max-[700px]:justify-center">
                                <Space direction="vertical">
                                    <Space wrap>
                                        <Dropdown menu={{ items }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
                                            <Button
                                                type="text"
                                                style={{
                                                    backgroundColor: '#ffffff1a',
                                                    borderRadius: "8px",
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                }}
                                            >
                                                <GiEarthAmerica />
                                                <span className="capitalize">{language}</span>
                                            </Button>
                                        </Dropdown>
                                    </Space>
                                </Space>
                            </li>
                        </div>
                    </ul>
                </nav>

            </div>
        </header>

    );
};

export default Header;
