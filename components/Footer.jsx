"use client"
import { useState } from "react";
import { logo, footerbg, farrow, whatsapp } from '@/untils/imgimport';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault(); // Form submit prevent kar raha hai

    if (!email) {
      setMessage("Please enter an email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://testqds.com/new_quicklease/api/subscription/new_subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Subscription successful!");
        setEmail(""); // Success ke baad input clear
      } else {
        setMessage(data.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }

    setLoading(false);
  };
  return (
    <>
      <div className='relative bg-[#1F1E21] px-8 max-[1000px]:px-4' id="contact">
        <div className='absolute inset-0 '>
          <Image src={footerbg} alt='' className='w-full h-full object-cover ' />
        </div>
        <div className="container mx-auto text-white py-12 max-[1000px]:text-center z-50 relative">
          <Image src={logo} alt='' className='max-[1000px]:mx-auto' />
          <div className=''>
            <span className='font-extralight '>let’s talk</span>
            <div className='flex justify-between max-[1000px]:flex-col'>
              <div className='text-[2rem] max-[1000px]:text-[1.5rem]'>bookings@quicklease.ae</div>
              <div className='flex gap-8 max-[1000px]:flex-col max-[1000px]:gap-4 max-[1000px]:mt-4'>
                <ul className='font-extralight'>
                  <Link href="https://www.facebook.com/QuickLeaseCarRental/" ><li>Facebook</li></Link>
                  <Link href="https://www.instagram.com/quickleasecarrental/"><li>Instagram</li></Link>
                  <Link href="https://www.linkedin.com/company/quick-lease-car-rental/about/"><li>Linkedln</li></Link>
                </ul>
                <ul >
                  <li className='font-bold text-[1.2rem]'>Working hours</li>
                  <li className='font-extralight'>Mon - Sat: 8:30 - 8:30</li>
                  <li className='font-extralight'>Sunday: 10:00 - 8:30</li>
                </ul>
              </div>
            </div>
            <div className='flex gap-8 max-[1000px]:flex-col max-[1000px]:mt-4 '>
              <div className='w-[30%] max-[1000px]:w-full'>
                <div className='font-bold text-[1.2rem]'>Address</div>
                <p className='font-extralight '>Shop no. 18, Al Raha Building, Opposite City Max Hotel Behind Mall Of Emirates, Al Barsha 1, Dubai
                  P.O. Box: 88152 – Dubai – UAE</p>
              </div>
              <div>
                <div className='font-bold text-[1.2rem]'>Branches</div>
                <ul className='font-extralight'>
                  <li>Barsha H.O: +971 (4) 40-87-300</li>
                  <li>Emergency: +971 (56) 50-76-010</li>
                  <li>Emergency: +971 (50) 30-27-866</li>
                </ul>
              </div>
            </div>
            <div className='flex justify-between items-end mt-8 max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:text-center '>
              <form onSubmit={handleSubscribe} className='max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:justify-center max-[1000px]:mx-auto border-white border-b-2'>
                <div className='max-[1000px]:text-center'>Hey There! Subscribe to Our Newsletter!</div>
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-transparent py-4 w-full text-white border-b border-gray-400 outline-none'
                  />
                  <button type="submit" disabled={loading} className="ml-2">
                    <Image src={farrow} alt='' className='w-[2.5rem] h-[2.5rem]' />
                  </button>
                </div>
                {message && <p className="text-sm mt-2 text-gray-300">{message}</p>}
              </form>
              <div className='w-[30%] font-extralight max-[1000px]:w-full max-[1000px]:mt-4'>
                © 2025. Copyright Quick Lease Car RentalsAll Rights Reserved.
              </div>
            </div>
          </div>
        </div>
        <button className="fixed bottom-8 right-8 max-[700px]:right-4 z-50">
          <Link href="https://api.whatsapp.com/send?phone=97144087300" ><Image src={whatsapp} className='w-[5rem] max-[700px]:w-[3.5rem] ' alt='whatsapp' /> </Link>
        </button>
      </div>
    </>
  );
};

export default Footer;
