"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { main } from "@/app/data/main";
import React, { useState, useRef } from "react";

const FAQs = () => {

  const [faqActive, setFaqActive] = useState(null);
  const contentRefs = useRef([]);
  const { language } = useLanguage();

  const handleTab = (index) => {
    setFaqActive(faqActive === index ? null : index);
  };
  const data = {
    en: [
      {
        question: " What documents are required to rent a luxury car?",
        answer: "A UAE resident can rent luxury cars through presenting their valid driving license together with their Emirates ID. All visitors need to present their passport together with their visa and their International Driving Permit (IDP).",
      },
      {
        question: "Is there a security deposit required for luxury car rentals?",
        answer: "Yes, Luxury car rental requires a security deposit which the renter can get refunded. The security deposit amount depends both on the type of vehicle and the length of the rental period.",
      },
      {
        question: "Can I rent a luxury car without a credit card?",
        answer: "Luxury car rental companies need customers to use a credit card both for payments and security deposits. However, contact us directly to determine alternative payment options which some rental companies might allow.",
      },
      {
        question: "Are there mileage limits on luxury car rentals?",
        answer: "Luxury car rentals impose a daily mileage restriction on their services. However, additional mileage is charged separately. Always review the rental terms before making reservations.",
      },
      {
        question: "Do you offer delivery and pickup for luxury cars?",
        answer: "Absolutely! Our company offers doorstep services for your convenience which makes your experience both hassle-free and convenient.",
      }
    ],
    ar: [
      {
        question: "ما هي المستندات المطلوبة لاستئجار سيارة فاخرة؟",
        answer: "يمكن للمقيمين في دولة الإمارات العربية المتحدة استئجار سيارات فاخرة من خلال إبراز رخصة قيادة سارية المفعول وبطاقة الهوية الإماراتية. أما الزوار، فيحتاجون إلى إبراز جواز سفرهم مع تأشيرتهم ورخصة القيادة الدولية.",
      },
      {
        question: "هل يُشترط دفع وديعة تأمين لاستئجار السيارات الفاخرة؟",
        answer: "نعم، يتطلب استئجار السيارات الفاخرة دفع وديعة تأمين، ويمكن للمستأجر استردادها. يعتمد مبلغ الوديعة على نوع السيارة ومدة الاستئجار.",
      },
      {
        question: "هل يمكنني استئجار سيارة فاخرة بدون بطاقة ائتمان؟",
        answer: "تشترط شركات تأجير السيارات الفاخرة على العملاء استخدام بطاقة ائتمان للدفعات ودفع الوديعة التأمينية. مع ذلك، تواصل معنا مباشرةً لتحديد خيارات الدفع البديلة التي قد تتيحها بعض شركات التأجير.",
      },
      {
        question: "هل هناك حدود لعدد الأميال المقطوعة لاستئجار السيارات الفاخرة؟",
        answer: "تفرض شركات تأجير السيارات الفاخرة قيودًا على عدد الأميال المقطوعة يوميًا على خدماتها. مع ذلك، تُفرض رسوم إضافية على المسافة المقطوعة بشكل منفصل. يُرجى مراجعة شروط التأجير دائمًا قبل الحجز",
      },
      {
        question: "هل توفرون خدمة توصيل واستلام السيارات الفاخرة؟",
        answer: "بالتأكيد! تُقدم شركتنا خدمات التوصيل إلى باب المنزل لراحتكم، مما يجعل تجربتكم مريحة وسهلة.",
      },
    ]
  };
  return (
    <section className={`faq sectionFaq_${language}`} id='faq'>
      <div className="container mx-auto flex max-[1024px]:flex-col gap-8 mb-8">
        <div className="faqHeading mt-4">
          <h2 className="h2 text-[2.5rem] leading-[1.3] text-[#401B89] font-MODERNIZ text-primary max-[1024px]:text-center max-[1350px]:text-[3rem] max-[1000px]:text-[1.5rem]">
            {main[language]["faqHeader"]}
          </h2>
          <div className="text-[#667085] max-[1024px]:leading-[1] max-[1024px]:text-center">
            {main[language]["faqText"]}
          </div>
        </div>
        <div className="faqBody py-4 px-4 bg-[#FBF9FF] rounded-3xl grid grid-cols-1 items-start gap-4 max-[1000px]:grid-cols-1 max-[1000px]:p-4">
          {Array.isArray(data[language]) &&
            data[language].map((item, index) => {
              const { question, answer } = item
              return (
                <div className={`faqBodyBox bg-white rounded-2xl  py-4 px-4 ${faqActive === index ? "activee" : ""}`} key={index}>
                  <div className="faqBodyBox_ grid grid-cols-[1fr,auto] gap-[2rem] items-start ">
                    <div className="faqBodyBoxl">
                      <div className="h4 text-[1.7rem] font-medium leading-[1] max-[1350px]:text-[1.4rem] max-[1000px]:text-[1.1rem]" onClick={() => handleTab(index)}>{question}</div>
                    </div>
                    <div className="faqBodyBoxr">
                      <div onClick={() => handleTab(index)} className={`${faqActive === index ? "bg-primary" : "bg-[#FBF9FF]"} faqBodyBoxrv cursor-pointer w-[3.2rem] h-[3.2rem] rounded-2xl grid place-items-center max-[1000px]:w-[2rem] max-[1000px]:h-[2rem]`}>
                        <svg className="max-[1000px]:w-[1rem]" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" >
                          <path className={`${faqActive === index ? "hidden" : ""}`} d="M12.9538 0.251949C12.0689 0.251949 11.3516 0.969299 11.3516 1.8542V24.1463C11.3516 25.0312 12.0689 25.7486 12.9538 25.7486C13.8387 25.7486 14.5561 25.0312 14.5561 24.1463V1.8542C14.5561 0.969299 13.8387 0.251949 12.9538 0.251949Z" fill="#6F6C90" stroke="#6F6C90" strokeWidth="0.417978" strokeLinecap="round" />
                          <path className={`${faqActive === index ? "fill-[#401A89]" : ""}`} d="M1.80732 11.4004C0.922424 11.4004 0.205074 12.1177 0.205074 13.0026C0.205074 13.8875 0.922424 14.6049 1.80732 14.6049H24.0995C24.9844 14.6049 25.7017 13.8875 25.7017 13.0026C25.7017 12.1177 24.9844 11.4004 24.0995 11.4004H1.80732Z" fill="#6F6C90" stroke="#6F6C90" strokeWidth="0.417978" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div ref={(el) => (contentRefs.current[index] = el)} className="overflow-hidden transition-all ease-in-out duration-300" style={{ maxHeight: faqActive === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0" }}>
                    <div className="text-[1.4rem] mt-6 text-[#667085] leading-[1.2] max-[1000px]:text-[1rem] justify-start">{answer}</div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
