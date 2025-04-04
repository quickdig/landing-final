'use client';
import Link from 'next/link';
import { logo, phone, mail } from '@/untils/imgimport';
import Image from 'next/image';

const Header = () => {

    const handleScrollClick = (params) => {
        const el = document.getElementById(params)

        if (el) {
            el.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className="bg-white/10 backdrop-blur-[25px] header z-10 text-white py-4 absolute container left-0 right-0 mx-auto mt-4 max-[1000px]:mt-0 rounded-[6px] max-[1024px]:w-full">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4">

                {/* Logo - Left Side */}
                <div className="w-auto">
                    <Image
                        src={logo}
                        alt="logo"
                        className="w-[70px] max-[700px]:w-[4rem]"
                    />
                </div>

                {/* Nav - Right Side on Desktop, Centered on Mobile */}
                <nav className="w-auto">
                    <ul className="flex flex-wrap items-center justify-end max-[700px]:justify-center gap-4 max-[1000px]:gap-2 text-sm">
                        <li className='cursor-pointer hover:border-b-2 border-[#401A89]'>
                            <a onClick={() => handleScrollClick("luxury")}>Luxury Cars</a>
                        </li>
                        <li className='cursor-pointer hover:border-b-2 border-[#401A89]'>
                            <a onClick={() => handleScrollClick("booknow")}>Book Now</a>
                        </li>

                        <li className='cursor-pointer hover:border-b-2 border-[#401A89]'>
                            <a onClick={() => handleScrollClick("faq")}>FAQs</a>
                        </li>
                        {/* Phone Section */}
                        <li className="flex items-center gap-2 max-[700px]:flex-wrap text-center">
                            <div className="bg-[#ffffff1a] w-[4rem] h-[4rem] rounded-lg grid place-items-center max-[1000px]:w-[2rem] max-[1000px]:h-[2rem]">
                                <Image alt="" src={phone} className="w-[1.5rem] max-[1000px]:w-[1rem]" />
                            </div>
                            <div>
                                <div className="text-secondary leading-[1] text-sm max-[1000px]:text-xs">Call Us Now</div>
                                <dd className="m-0 text-xs flex">
                                    <a className="text-white block max-[450px]:text-[10px]" href="tel:97180078425">800 78425</a>
                                    <span className="text-secondary px-2 max-[450px]:hidden">|</span>
                                    <a className="text-white block max-[450px]:text-[10px]" href="tel:97144087300">971 4 408 7300</a>
                                </dd>
                            </div>
                        </li>

                        {/* Mail Section */}
                        <li className="flex items-center gap-2 max-[700px]:flex-wrap text-center max-[400px]:hidden">
                            <div className="bg-[#ffffff1a] w-[3rem] h-[3rem] rounded-lg grid place-items-center max-[1000px]:w-[2rem] max-[1000px]:h-[2rem]">
                                <Image alt="" src={mail} className="w-[1.5rem] max-[1000px]:w-[1rem]" />
                            </div>
                            <div>
                                <div className="text-secondary leading-[1] text-sm max-[1000px]:text-xs">Say Hello!</div>
                                <dd className="m-0 text-xs">
                                    <a className="text-white" href="">bookings@quicklease.ae</a>
                                </dd>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    );
};

export default Header;
