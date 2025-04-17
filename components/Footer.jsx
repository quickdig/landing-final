"use client"
import { useState } from "react";
import { logo, footerbg, farrow, whatsapp } from '@/untils/imgimport';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";
import { main } from "@/app/data/main";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { language } = useLanguage();

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
        setMessage(main[language]["subscriptionSuccess"]);
        setEmail(""); // Success ke baad input clear
      } else {
        setMessage(data.message || main[language]["subscriptionFail"]);
      }
    } catch (error) {
      setMessage(main[language]["subscriptionError"]);
    }

    setLoading(false);
  };
  return (
    <>
      <div className={`relative bg-[#1F1E21] px-8 max-[1000px]:px-4 sectionFooter_${language}`} id="contact">

        <div className="absolute inset-0 z-0">
          <Image src={footerbg} alt="Footer background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 text-white container mx-auto lg:px-20 items-center py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="space-y-4">
            <Image src={logo} alt="Logo" className="w-20" />
            <span className="font-extralight block">{main[language]["letsTalk"]}</span>
            <div className="text-2xl md:text-3xl break-words">
              <a href="mailto:luxe@quicklease.ae">luxe@quicklease.ae</a>
            </div>

            <div>
              <div className="font-bold text-lg mt-4">{main[language]["address"]}</div>
              <p className="font-extralight text-sm leading-relaxed">
                {main[language]["addressLineOne"]}
                {main[language]["addressLineTwo"]}<br />
                {main[language]["addressLineThree"]}
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="mt-8 border-b-2 border-white pb-2">
              <div className="text-sm mb-2">{main[language]["subscribeHeader"]}</div>
              <div className="flex items-center gap-2 flex-wrap">
                <input
                  type="email"
                  placeholder={main[language]["emailAddress"]}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent py-2 w-full md:w-auto flex-1 text-white outline-none placeholder-gray-400"
                />
                <button type="submit" disabled={loading} className="shrink-0 mt-2 md:mt-0">
                  <Image src={farrow} alt="Submit" className="w-10 h-10 img_ar" />
                </button>
              </div>
              {message && <p className="text-sm mt-2 text-gray-300">{message}</p>}
            </form>
          </div>

          <div className="space-y-4">
            <div className="font-bold text-lg">{main[language]["branches"]}</div>
            <ul className="font-extralight text-sm space-y-1">
              <li>{main[language]["headOffice"]}: <Link dir="ltr" href={"tel:+971505079801"} className="flip_number">+971 505 079 801</Link></li>
              <li>{main[language]["emergancy"]}: <Link dir="ltr" href={"tel:+971505079801"} className="flip_number">+971 505 079 801</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between gap-4">

              <ul className="font-extralight text-left text-sm space-y-1">
                <li className="font-bold text-lg">{main[language]["socialLinks"]}</li>
                <li className="flex items-center"><FaFacebookSquare />&nbsp;
                  <Link className="ml-2" href="https://www.facebook.com/QuickLeaseCarRental/" target="_blank">
                    Facebook
                  </Link>
                </li>
                <li className="flex items-center"><FaInstagramSquare />&nbsp;
                  <Link className="ml-2" href="https://www.instagram.com/quickleasecarrental/" target="_blank">
                    Instagram
                  </Link>
                </li>
                <li className="flex items-center">
                  <FaLinkedin />&nbsp;
                  <Link className="ml-2" href="https://www.linkedin.com/company/quick-lease-car-rental/about/" target="_blank">
                    LinkedIn
                  </Link>
                </li>
              </ul>


              <ul className="space-y-1 text-sm">
                <li className="font-bold text-lg">{main[language]["workingHours"]}</li>
                <li className="font-extralight">{main[language]["service24Available"]}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-white font-extralight text-sm mt-6 px-2 pb-2 max-w-screen-xl mx-auto text-center">
          {main[language]["copyrights"]}
        </div>

        <button className="fixed bottom-8 right-8 max-[700px]:right-4 z-50 WhatsApp_ar">
          <Link href="https://api.whatsapp.com/send?phone=971505079801" target="_blank">
            <Image src={whatsapp} alt="WhatsApp" className="w-20 max-[700px]:w-14" />
          </Link>
        </button>
      </div>

    </>
  );
};

export default Footer;
