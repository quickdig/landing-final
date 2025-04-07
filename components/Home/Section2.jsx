// "use client";
// import { car, whatsapp, cardphone, e200, g63, range } from '@/untils/imgimport';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Section2 = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     mobileNo: '',
//     email: '',
//     carModel: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [formKey, setFormKey] = useState(Date.now());

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     // ✅ Required fields check
//     if (!formData.fullName || !formData.mobileNo || !formData.email || !formData.carModel) {
//       setMessage('All fields are required!');
//       setLoading(false);
//       return;
//     }

//     const form = new FormData();
//     form.append('full_name', formData.fullName);
//     form.append('mobile', formData.mobileNo);
//     form.append('email', formData.email);
//     form.append('modal', formData.carModel);


//     axios
//       .post("https://testqds.com/new_quicklease/api/enquiries/request_form", form)
//       .then((response) => {
//         console.log(response);
//         setMessage('Form submitted successfully!');
//       });



//     // ✅ Form Reset
//     setFormData({ fullName: '', mobileNo: '', email: '', carModel: '' });
//     setFormKey(Date.now()); // Form ko re-render trigger karega

//     setLoading(false);
//   };

//   // ✅ Message 5 sec baad hide ho jayega
//   useEffect(() => {
//     if (message) {
//       const timer = setTimeout(() => {
//         setMessage('');
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [message]);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [modeldata, setModeldata] = useState("")

//   const data = [
//     {
//       title: "Mercedes Benz C200 2025",
//       image: car,
//       wicon: whatsapp,
//       picon: cardphone,
//       rate1: "AED 600/day",
//       rate2: "AED 4000/week",
//       rate3: "AED 14000/month",
//     },
//     {
//       title: "Mercedes E200 2025",
//       image: e200,
//       wicon: whatsapp,
//       picon: cardphone,
//       rate1: "AED 600/day",
//       rate2: "AED 4000/week",
//       rate3: "AED 14000/month",
//     },
//     {
//       title: "Mercedes G63 2025",
//       image: g63,
//       wicon: whatsapp,
//       picon: cardphone,
//       rate1: "AED 2500/day",
//       rate2: "AED 15000/week",
//       rate3: "AED 45000/month",
//     },
//     {
//       title: "Range Rover Vogue 2025",
//       image: range,
//       wicon: whatsapp,
//       picon: cardphone,
//       rate1: "AED 2300/day",
//       rate2: "AED 14000/week",
//       rate3: "AED 44000/month",
//     },
//   ]
//   const handleModelOpen = (item) => {
//     setIsModalOpen(true)
//     setModeldata(item)
//   }
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <section>

//         <div onClick={handleCloseModal} className={`fixed inset-0 z-[29] bg-[#000000d8] w-full h-full   ${isModalOpen ? 'block' : 'hidden'}`}></div>
//         <div className={`model fixed max-[1000px]:overflow-auto h-[95vh] bg-white inset-0 z-[99999] w-[80%] my-auto p-8 mx-auto max-[1000px]:w-[95%] max-[1000px]:p-4 max-[1000px]:h-full ${isModalOpen ? 'block' : 'hidden'}`}>
//           <div className='w-[90%] mx-auto relative max-[1000px]:w-full'>
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-black font-extrabold w-[40px] h-[40px] flex justify-center items-center py-2 px-4 rounded-full max-[1000px]:top-0 max-[1000px]:right-[-.5rem]"
//             >
//               ✕
//             </button>

//             <div className='pt-12 max-[1000px]:pt-4'>
//               <form onSubmit={handleSubmit} key={formKey} action="" className='flex gap-4 justify-between max-[1000px]:flex-col'>
//                 <div className='w-full'>
//                   <label htmlFor="" className='text-[10px] mb-[5px] max-[1000px]:block '>Full Name</label>
//                   <input type="text" placeholder='Enter Full Name' className='px-4 w-full py-2 border-[#EAECF0] border-2 rounded-[10px] max-[1000px]:w-full' value={formData.fullName}
//                     onChange={handleChange}
//                     required />
//                 </div>
//                 <div className='w-full'>
//                   <label htmlFor="" className='text-[10px] mb-[5px] max-[1000px]:block '>Mobile No</label>
//                   <input type="text" placeholder='Enter Mobile No' className='px-4 w-full py-2 border-[#EAECF0] border-2 rounded-[10px] max-[1000px]:w-full' value={formData.mobileNo}
//                     onChange={handleChange}
//                     required />
//                 </div>
//                 <div className='w-full'>
//                   <label htmlFor="" className='text-[10px] mb-[5px] max-[1000px]:block '>Email Address</label>
//                   <input type="text" placeholder='Enter Email Address' className='px-4 w-full py-2 border-[#EAECF0] border-2 rounded-[10px] max-[1000px]:w-full' value={formData.email}
//                     onChange={handleChange}
//                     required />
//                 </div>
//                 <div className='w-full'>
//                   <label htmlFor="" className='text-[10px] mb-[5px] max-[1000px]:block '>Select</label>
//                   <select
//                     name="carModel"
//                     id="carModel"
//                     className="px-4 w-full py-2 border-[#EAECF0] border-2 rounded-[10px] max-[1000px]:w-full"
//                     value={formData.carModel}
//                     onChange={handleChange}
//                     required
//                   >
//                     {modeldata.title && <option value="" selected>{modeldata.title}</option>}
//                     {modeldata.title !== "Mercedes Benz C200 2025" && <option value="c200">Mercedes Benz C200 2025</option>}
//                     {modeldata.title !== "Mercedes E200 2025" && <option value="e200">Mercedes E200 2025</option>}
//                     {modeldata.title !== "Mercedes G63 2025" && <option value="g63">Mercedes G63 2025</option>}
//                     {modeldata.title !== "Range Rover Vogue 2025" && <option value="vogue">Range Rover Vogue 2025</option>}
//                   </select>
//                 </div>
//               </form>
//               <button className='bg-[#401A89] text-white max-[1000px]:mx-auto flex justify-center px-20 rounded-full py-4 max-[1000px]:py-2 mt-12 max-[1000px]:mt-8'>{loading ? 'Sending...' : 'Send'}</button>
//             </div>
//           </div>

//         </div>

//       </section>
//     </>
//   );
// };

// export default Section2;


"use client";
import { car, whatsapp, cardphone, e200, g63, range, azhar } from '@/untils/imgimport';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// c200
import { c200One, c200Two, c200Three, c200Four } from '@/untils/imgimport';
import { e200One, e200Two, e200Three, e200Four } from '@/untils/imgimport';
import { G63One, G63Two, G63Three, G63Four } from '@/untils/imgimport';
import { RangeOne, RangeTwo, RangeThree, RangeFour } from '@/untils/imgimport';
import { bentlyOne, bentlyTwo, bentlyThree, bentlyFour } from '@/untils/imgimport';

const Section2 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    carModel: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modeldata, setModeldata] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Form Submited Successfully');
  const [formKey, setFormKey] = useState(Date.now());

  // ✅ Proper handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!formData.fullName || !formData.mobileNo || !formData.email) {
      setMessage('All fields are required!');
      setLoading(false);
      return;
    }

    const form = new FormData();
    form.append('full_name', formData.fullName);
    form.append('mobile', formData.mobileNo);
    form.append('email', formData.email);
    form.append('modal', modeldata.title);

    console.log(...form);

    try {
      const response = await axios.post("https://testqds.com/new_quicklease/api/enquiries/request_form", form);
      console.log(response);
      setMessage('Form submitted successfully!');
    } catch (error) {
      console.log(error)
      console.error('Axios Error:', error);
      setMessage('Submission failed. Please try again.');
    }

    setFormData({ fullName: '', mobileNo: '', email: '' });
    setFormKey(Date.now());
    setLoading(false);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setIsModalOpen(false)
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);



  const data = [
    {
      title: "Mercedes Benz C200 2025",
      image: c200One,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        c200One,
        c200Two,
        c200Three,
        c200Four
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 800",
      dis1: "AED 3700",
      dis2: "AED 15000",
      rate1: "AED 600",
      rate2: "AED 4000",
      rate3: "AED 14000",
    },
    {
      title: "Mercedes E200 2025",
      image: e200One,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        e200One,
        e200Two,
        e200Three,
        e200Four
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 700",
      dis1: "AED 3700",
      dis2: "AED 15000",
      rate1: "AED 600",
      rate2: "AED 4000",
      rate3: "AED 14000",
    },
    {
      title: "Mercedes G63 2025",
      image: G63One,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        G63One,
        G63Two,
        G63Three,
        G63Four
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 16000",
      dis2: "AED 46000",
      rate1: "AED 2500",
      rate2: "AED 15000",
      rate3: "AED 45000",
    },
    {
      title: "Range Rover Vogue 2025",
      image: RangeOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        RangeOne,
        RangeTwo,
        RangeThree,
        RangeFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 2300",
      rate2: "AED 14000",
      rate3: "AED 44000",
    },
    {
      title: "Bentley Bentayga S V8",
      image: bentlyOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        bentlyOne,
        bentlyTwo,
        bentlyThree,
        bentlyFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 2650",
      rate2: "AED 18000",
      rate3: "AED 58000",
    },
  ];

  const handleModelOpen = (item) => {
    setIsModalOpen(true);
    setModeldata(item);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id='luxury'>
        <div className='container mx-auto'>
          <div className="grid grid-cols-3 max-[1280px]:grid-cols-2 gap-4 py-20 max-[1024px]:py-8 max-[1024px]:grid-cols-1 max-[800px]:grid-cols-1 ">
            {Array.isArray(data) && data.map((item, index) => {
              const { title, image, images, rate1, rate2, rate3, day, month, week, dis, dis1, dis2 } = item
              const [selectedImage, setSelectedImage] = useState(image);
              return (
                <div key={index} className="flex flex-col justify-between items-center border-2 rounded-3xl border-[#401A89] w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                  <div className="image_box relative w-full h-[300px] rounded-t-3xl object-cover overflow-hidden">
                    <Image src={selectedImage} alt="car" className='w-full h-full object-cover rounded-t-3xl' />
                  </div>

                  <div className="content_box px-2 w-full">
                    <div className="other_images flex justify-center gap-2 mt-4">
                      {
                        images.map((_v, idx) => (
                          <div className="lower_image_box relative w-[100px] h-[50px] object-cover" key={idx + 10} onClick={() => setSelectedImage(_v)}>
                            <Image src={_v} alt="car" className='w-full h-full object-cover rounded-md border-2 border-transparent cursor-pointer hover:border-[#401A89] transition' />
                          </div>
                        ))
                      }
                    </div>

                    <div className="title_box flex flex-row justify-between items-center w-full my-2">
                      <span className="heading text-[#1C1C1C] font-bold font-MODERNIZ text-sm">{title}</span>
                      <div className='flex gap-2'>
                        <Link href="tel:971505079801"><Image src={cardphone} className='w-8' alt='phone' /></Link>
                        <Link href="https://api.whatsapp.com/send?phone=971505079801"><Image src={whatsapp} className='w-8' alt='whatsapp' /></Link>
                      </div>
                    </div>

                    <ul className='flex flex-wrap justify-start pb-4'>
                      <li className='text-[#401A89] flex text-[11px] px-4 my-1 relative max-[400px]:text-[12px]'>
                        <svg width="35" height="13" viewBox="0 0 35 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M27.6179 6.37342L27.8076 6.87584C27.928 6.91545 28.0395 6.89091 28.1497 6.8922C28.3997 6.89607 28.5675 7.03944 28.6231 7.29086C28.6997 7.63743 28.6424 7.97969 28.565 8.31249C28.467 8.73655 28.35 9.15631 28.2284 9.57477C28.0437 10.2249 27.4458 10.7075 26.7814 10.7238C26.1435 10.7393 25.5052 10.729 24.8673 10.7273C24.7973 10.722 24.7277 10.712 24.6591 10.6971C24.2842 11.6972 23.5844 12.2819 22.5279 12.2974C21.4642 12.3129 20.7607 11.7287 20.3441 10.7169H8.65649C8.28369 11.6787 7.60457 12.2784 6.54761 12.2965C5.45362 12.315 4.74294 11.7153 4.34406 10.7139C3.64643 10.7225 2.95553 10.7746 2.26548 10.6898C1.29772 10.5701 0.468805 9.183 0.937538 8.16266C1.09953 7.8105 1.14792 7.43508 1.21188 7.06613C1.38397 6.04622 1.96 5.44436 2.92145 5.17743C4.16818 4.83302 5.40102 4.42574 6.65701 4.12094C7.62477 3.88716 8.4196 3.3404 9.25776 2.8608C9.9474 2.46644 10.6286 2.05659 11.3094 1.6463C12.0247 1.21578 12.8023 1.02463 13.6236 0.957469C14.7054 0.868782 15.7868 0.770624 16.8635 0.64362C18.5487 0.447464 20.2447 0.365773 21.9405 0.399084C22.8864 0.415874 23.8339 0.401237 24.7794 0.402098C25.6335 0.402098 26.1944 0.86706 26.3716 1.7182C26.3817 1.76728 26.3939 1.8155 26.4057 1.86415C26.4873 2.1978 26.2794 2.49098 25.9453 2.50605C25.7661 2.5138 25.5864 2.50605 25.3887 2.50605C25.3966 2.54283 25.4075 2.57884 25.4215 2.61368C25.7334 3.1636 26.0467 3.71438 26.3615 4.26602C26.7662 4.26602 27.1584 4.26602 27.5506 4.26602C27.8754 4.26817 28.042 4.4124 28.1047 4.73184C28.1611 5.019 28.2179 5.30659 28.2802 5.59289C28.3929 6.10951 28.2406 6.32133 27.7302 6.34888C27.6924 6.35499 27.6549 6.36318 27.6179 6.37342ZM4.25485 9.73363C4.45851 8.63279 5.06904 7.88239 6.14031 7.73989C7.58774 7.54659 8.44064 8.32885 8.7701 9.72029H20.2637C20.4375 8.54841 21.2992 7.84623 22.1799 7.72224C22.6924 7.65035 23.1851 7.73516 23.6366 8.00983C24.2783 8.39988 24.6309 8.99228 24.7554 9.73622C25.4286 9.73622 26.0808 9.74224 26.733 9.73363C27.0212 9.72976 27.2379 9.53775 27.3221 9.23509C27.4155 8.89842 27.5047 8.56003 27.5872 8.22035C27.6133 8.11358 27.6667 8.00725 27.6423 7.89359C27.1247 7.71234 27.0393 7.62365 26.8496 7.08852C26.7949 6.93353 26.7347 6.78112 26.6754 6.62786C26.4747 6.11123 26.64 5.66952 27.1256 5.4323C27.1916 5.40001 27.2623 5.37935 27.2097 5.26009C26.9409 5.26009 26.6627 5.26311 26.3825 5.26009C26.0211 5.25493 25.724 5.11113 25.5372 4.78867C25.1842 4.17906 24.8333 3.56772 24.5008 2.94604C24.2164 2.41392 24.471 1.78364 25.0289 1.57957C25.0815 1.5602 25.161 1.58474 25.1972 1.45558C24.5055 1.32901 23.8171 1.43104 23.1085 1.38799C23.135 1.46721 23.1477 1.51499 23.167 1.5602C23.5036 2.3304 23.8381 3.10146 24.1769 3.87037C24.4411 4.46966 24.0119 5.16753 23.3745 5.17571C23.061 5.17959 22.7471 5.19896 22.4336 5.20843C20.3315 5.27186 18.2293 5.33429 16.1272 5.39571C14.2985 5.44608 12.4695 5.48181 10.6408 5.53907C10.5047 5.54567 10.3687 5.52247 10.242 5.47102C10.1153 5.41957 10.0008 5.34106 9.90616 5.24072C9.77201 5.1046 9.64703 4.95933 9.5321 4.80589C9.36674 4.58848 9.21358 4.36117 9.05327 4.13557C8.99899 4.16743 8.96281 4.18896 8.92704 4.20962C8.59043 4.40164 8.27317 4.64402 7.9172 4.77318C7.31929 4.98844 6.69698 5.13352 6.08393 5.3096C5.50664 5.47578 4.92935 5.64412 4.35879 5.80901C4.34726 5.83349 4.33714 5.85865 4.32849 5.88435C4.20731 6.3915 4.08445 6.89822 3.96621 7.40624C3.93867 7.53247 3.88115 7.64981 3.79873 7.74788C3.71631 7.84595 3.61154 7.92172 3.49369 7.9685C3.27573 8.06407 3.05189 8.14587 2.83098 8.23585C2.48259 8.37836 2.13462 8.52215 1.80053 8.65992C1.71638 9.19462 2.1119 9.72589 2.57979 9.73191C3.13183 9.73923 3.68556 9.73363 4.25485 9.73363ZM17.0003 1.6463C16.9632 2.55815 16.8909 3.46525 16.6982 4.37064C16.7693 4.37451 16.8034 4.37882 16.8374 4.37796C17.5725 4.35729 18.3076 4.33146 19.0427 4.31639C20.3306 4.28927 21.6182 4.22555 22.907 4.23029C23.0273 4.23029 23.1561 4.24622 23.2718 4.14418C22.8199 3.23794 22.4509 2.29768 22.0255 1.40048C20.3332 1.34623 18.6716 1.40263 17.0003 1.6463ZM16.0224 1.73886C15.9614 1.73886 15.9206 1.73542 15.8802 1.73886C15.1276 1.81033 14.3746 1.88208 13.6211 1.95413C13.1532 1.99718 12.6908 2.06563 12.2574 2.26884C11.7605 2.50218 11.3039 2.81043 10.8268 3.08166C10.518 3.25731 10.2154 3.4433 9.90111 3.62928C10.1212 3.96078 10.3219 4.26947 10.5966 4.54371L15.6854 4.4025C15.9105 3.5238 15.9841 2.64683 16.0216 1.73886H16.0224ZM5.22177 10.0087C5.22347 10.1823 5.25869 10.3539 5.32539 10.5136C5.39209 10.6732 5.48896 10.8178 5.61044 10.939C5.73193 11.0602 5.87562 11.1557 6.03327 11.2199C6.19093 11.2841 6.35943 11.3158 6.5291 11.3132C7.22546 11.3059 7.79644 10.7032 7.79139 9.98161C7.78631 9.63814 7.64941 9.31048 7.41024 9.0694C7.17108 8.82831 6.84884 8.69314 6.51311 8.69307C6.34338 8.69082 6.17493 8.72328 6.01762 8.78854C5.86032 8.85379 5.71734 8.95053 5.59706 9.07307C5.47678 9.19562 5.38163 9.34151 5.31719 9.50218C5.25274 9.66285 5.2203 9.83507 5.22177 10.0087ZM22.4921 8.69307C21.7676 8.70813 21.205 9.2958 21.2155 10.0277C21.2256 10.7367 21.8273 11.3317 22.5254 11.3149C22.6986 11.3106 22.8692 11.2708 23.0271 11.1979C23.185 11.1249 23.327 11.0203 23.4447 10.8902C23.5624 10.7601 23.6534 10.6072 23.7123 10.4405C23.7712 10.2738 23.7968 10.0966 23.7876 9.91962C23.7468 9.24628 23.1729 8.68101 22.4921 8.69479V8.69307ZM2.15355 7.44757C2.46071 7.29258 2.78049 7.23231 3.06325 7.04848C3.09733 6.7385 3.22103 6.44833 3.24123 6.13018C2.45061 6.28301 2.19521 6.77983 2.15355 7.44929V7.44757Z" fill="#401A89" />
                          <path d="M29.368 2.00087C28.6325 2.00087 27.897 2.00087 27.1615 2.00087C26.8421 2.00087 26.6309 1.81317 26.6242 1.5273C26.6174 1.24143 26.8404 1.01068 27.1535 1.01068C28.6312 1.00637 30.1091 1.00637 31.5871 1.01068C31.8543 1.01068 32.042 1.15275 32.103 1.37059C32.1308 1.47488 32.126 1.58549 32.0891 1.68682C32.0523 1.78815 31.9853 1.87511 31.8976 1.93543C31.8038 2.00001 31.7007 2.0013 31.5955 2.0013L29.368 2.00087Z" fill="#401A89" />
                          <path d="M31.6362 8.98849H29.3641C29.0241 8.98849 28.8226 8.80854 28.8213 8.50674C28.8213 8.18773 29.0199 8.00002 29.3683 7.99959C30.8881 7.99959 32.408 7.99887 33.9281 7.99744C34.2475 7.99744 34.457 8.18557 34.4654 8.47101C34.4747 8.77582 34.2782 8.97859 33.9462 8.98118C33.1758 8.9872 32.4054 8.98118 31.635 8.98118L31.6362 8.98849Z" fill="#401A89" />
                          <path d="M30.1754 5.5315C29.8956 5.5315 29.6162 5.53409 29.3368 5.5315C29.02 5.5272 28.8244 5.33519 28.8252 5.03683C28.826 4.73848 29.0255 4.54174 29.3381 4.53915C29.9036 4.53399 30.4694 4.53399 31.0355 4.53915C31.3338 4.54131 31.5577 4.76173 31.5568 5.03942C31.556 5.3171 31.3414 5.5272 31.0355 5.5315C30.7485 5.53495 30.462 5.5315 30.1754 5.5315Z" fill="#401A89" />
                          <path d="M15.1007 5.94951C15.2825 5.94951 15.4642 5.94693 15.6477 5.94951C15.89 5.95382 16.0684 6.12473 16.0794 6.35291C16.0874 6.56257 15.8989 6.79376 15.6797 6.80065C15.2812 6.814 14.8802 6.81443 14.4838 6.80065C14.2524 6.79204 14.0929 6.58109 14.1051 6.34688C14.1173 6.11268 14.2802 5.9564 14.5158 5.95166C14.7089 5.9465 14.905 5.94951 15.1007 5.94951Z" fill="#401A89" />
                        </svg>
                        &nbsp;Free Delivery
                      </li>
                      <li className='text-[#401A89] flex text-[11px] px-4 relative my-1 max-[400px]:text-[12px]'>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.0292969 16.2917C0.530013 15.7956 1.0281 15.296 1.5332 14.8035C2.11196 14.2397 2.81875 14.2263 3.39926 14.8035C4.85318 16.241 6.29921 17.6865 7.73734 19.14C8.22841 19.6361 8.22753 20.3504 7.72945 20.8946C7.29099 21.372 6.81746 21.8129 6.36235 22.2724C6.22818 22.4078 6.07998 22.48 5.88969 22.4256L5.77218 22.5459L0.0292969 16.5625V16.2917ZM6.04929 21.7051C6.4781 21.2206 6.81659 20.8314 7.16209 20.4493C7.47865 20.0993 7.49882 19.89 7.17963 19.5711C5.74325 18.1366 4.3019 16.7071 2.85558 15.2826C2.59689 15.027 2.31014 15.0226 2.04181 15.2826C1.66035 15.6496 1.28503 16.0219 0.977237 16.3229L6.04929 21.7051Z" fill="#401A89" />
                          <path d="M8.67676 18.9194C8.32599 18.8419 8.34265 18.6201 8.35318 18.385C8.64431 18.0697 9.01788 18.0759 9.37654 18.0742C11.1304 18.0661 12.8842 18.0519 14.638 18.0786C15.4132 18.1008 16.1711 17.8429 16.7768 17.351C18.8226 15.7478 20.4011 13.7527 21.677 11.4932C21.7139 11.4179 21.7458 11.3403 21.7725 11.2607C21.6296 10.8207 21.2622 10.5963 20.6992 10.6221C20.1362 10.6479 19.6706 10.8644 19.3417 11.3239C18.9506 11.8699 18.7428 12.5512 18.1544 12.9511C17.6072 13.3225 17.0144 13.604 16.4085 13.8952C16.42 14.0732 16.42 14.2517 16.4085 14.4296C16.3024 15.2526 15.7324 15.8137 14.9081 15.8271C13.4173 15.852 11.9266 15.8333 10.4358 15.8369C10.1824 15.8369 10.0176 15.7398 9.95881 15.4806C9.96845 15.3363 10.0526 15.2392 10.2043 15.1243C11.6355 15.1243 13.1104 15.1243 14.5889 15.1243C14.7631 15.1304 14.9373 15.1133 15.1071 15.0736C15.2872 15.0305 15.4443 14.9192 15.5463 14.7624C15.6484 14.6057 15.6876 14.4153 15.6561 14.2301C15.6 13.8347 15.343 13.6218 14.9703 13.6067C14.2688 13.5808 13.5673 13.5817 12.8658 13.5915C11.9161 13.6058 11.0435 13.4134 10.3227 12.7303C10.0919 12.5176 9.7933 12.3968 9.48177 12.39C8.68027 12.366 7.87439 12.3526 7.07377 12.4016C6.58884 12.431 6.15827 12.6688 5.80137 13.0313C5.42868 13.4072 5.03758 13.7643 4.65612 14.1321C4.52897 14.2551 4.41059 14.3895 4.21065 14.4038C3.93355 14.3441 3.8327 14.1669 3.90987 13.8026C4.76574 13.0999 5.40764 11.9233 6.66425 11.7541C8.2234 11.5466 9.83779 11.2865 11.2496 12.3918C11.6162 12.6804 12.0722 12.7543 12.5352 12.7481C13.1779 12.7481 13.8207 12.7597 14.4644 12.7481C15.0352 12.7347 15.5719 12.8095 16.0139 13.2281C17.0732 12.7534 18.0571 12.2787 18.592 11.1039C19.098 9.99331 20.5519 9.57916 21.6612 10.069C22.3627 10.3798 22.6398 11.0986 22.275 11.7488C20.9351 14.1669 19.2339 16.2706 17.0548 17.9655C16.3803 18.4944 15.5478 18.7726 14.6959 18.7537C13.0017 18.7537 11.3066 18.7537 9.60979 18.7537C9.28621 18.7608 8.96526 18.7626 8.67676 18.9194Z" fill="#401A89" />
                          <path d="M12.9768 0.980861C12.5924 0.932321 12.2036 0.932321 11.8193 0.980861C11.5562 1.37186 11.5913 1.81896 11.5255 2.22777C11.3501 3.34642 10.0593 3.92534 9.15081 3.28051C8.81846 3.0436 8.52557 2.74613 8.10817 2.58937C7.69339 2.76038 7.43645 3.10505 7.18916 3.47289C7.34262 3.88259 7.62762 4.1676 7.85474 4.48823C8.57994 5.51693 8.01872 6.85468 6.79455 7.0337C6.42713 7.08714 6.03252 7.06487 5.67824 7.30624C5.56951 7.7008 5.59669 8.10783 5.65632 8.49971C5.98253 8.77314 6.37013 8.73217 6.72001 8.79185C7.76441 8.96998 8.31775 9.71366 8.15026 10.7744C7.77932 11.047 7.55045 10.9659 7.48819 10.5402C7.37594 9.77156 7.24529 9.62994 6.51394 9.48388C6.485 9.47853 6.4587 9.46428 6.42625 9.45894C5.04512 9.19175 4.76012 8.79185 4.94164 7.36681C4.97219 7.13786 5.07019 6.92365 5.22277 6.7523C5.37536 6.58095 5.5754 6.46047 5.79663 6.40669C6.06672 6.34434 6.34295 6.26151 6.61391 6.26864C7.20407 6.28289 7.31544 5.83845 7.46714 5.42697C7.53028 5.25686 7.44084 5.11258 7.33736 4.98165C7.15672 4.7483 6.98046 4.51139 6.80508 4.27448C6.73736 4.1959 6.67854 4.10986 6.6297 4.01797C6.1965 3.03113 7.01466 2.60451 7.51187 2.05854C7.84772 1.68803 8.27215 1.72455 8.77549 2.08615C8.9722 2.21422 9.16001 2.35587 9.3376 2.5101C9.6489 2.8058 9.95143 2.80402 10.3338 2.62856C10.6293 2.49229 10.7722 2.31238 10.8003 2.00511C10.8283 1.73791 10.8564 1.47072 10.9055 1.21332C10.9296 1.03745 10.9836 0.867163 11.0651 0.7101C11.5299 -0.0701077 12.2928 0.180167 12.9689 0.189073C13.4214 0.195308 13.7809 0.622819 13.8756 1.13583C13.9501 1.54197 14.0142 1.94989 14.0791 2.33821C14.3369 2.57601 14.6438 2.63568 14.9261 2.77017C15.3076 2.66685 15.5759 2.38096 15.8785 2.1583C16.6046 1.62391 17.0702 1.65419 17.6884 2.29011C17.8112 2.41748 17.9392 2.53949 18.0593 2.66953C18.4724 3.11485 18.5127 3.60827 18.1751 4.12396C18.0794 4.29073 17.9655 4.44608 17.8357 4.58709C17.3376 5.0627 17.3569 5.55434 17.791 6.1012C18.1146 6.26329 18.5162 6.25439 18.9003 6.31673C19.5957 6.42895 19.9298 6.77631 19.9807 7.49239C19.9956 7.7145 19.9956 7.93738 19.9807 8.15948C19.9351 8.89427 19.5966 9.23895 18.8793 9.36275C18.5074 9.42688 18.1181 9.39036 17.7463 9.5578C17.5709 9.80184 17.4832 10.0966 17.3754 10.3736C17.4359 10.6702 17.7007 10.8537 17.7261 11.1521C17.6525 11.4237 17.4946 11.5511 17.2131 11.4638C16.3424 10.672 16.6203 10.0325 17.15 9.13207C17.3499 8.79362 17.77 8.78561 18.1295 8.71792C18.489 8.65023 18.8626 8.69031 19.1818 8.44182C19.2809 8.07754 19.2195 7.70881 19.223 7.37304C19.0897 7.0818 18.8319 7.0916 18.6092 7.04261C18.3864 6.99363 18.1479 6.97403 17.9173 6.93752C16.8545 6.77007 16.309 5.42341 16.9369 4.53277C17.1807 4.18541 17.4718 3.86834 17.6384 3.49071C17.4395 3.08067 17.1062 2.75379 16.6958 2.56621C16.3527 2.68092 16.046 2.88662 15.8074 3.16206C15.0358 4.01084 13.1846 3.21193 13.253 2.05765C13.2732 1.71653 13.253 1.31396 12.9768 0.980861Z" fill="#401A89" />
                          <path d="M12.3837 11.5C10.3519 11.492 8.70072 9.8318 8.72089 7.82161C8.74105 5.81142 10.401 4.17619 12.432 4.18153C14.4629 4.18688 16.0904 5.83458 16.0808 7.86703C16.0712 9.89949 14.4287 11.5089 12.3837 11.5ZM12.3995 10.7946C14.0288 10.7946 15.3617 9.47822 15.3661 7.8706C15.3714 6.23358 14.0323 4.8887 12.4022 4.89048C11.6285 4.88907 10.8861 5.19978 10.338 5.75429C9.78986 6.3088 9.48104 7.06171 9.47942 7.84744C9.47765 8.23654 9.55211 8.62212 9.69846 8.98172C9.84481 9.34132 10.0601 9.66776 10.3319 9.94203C10.6036 10.2163 10.9264 10.4329 11.2814 10.5793C11.6363 10.7257 12.0164 10.7989 12.3995 10.7946Z" fill="#401A89" />
                        </svg>
                        &nbsp;Free Service and Maintenance</li>
                      <li className='text-[#401A89] flex text-[11px] px-4 relative my-1 max-[400px]:text-[12px]'>
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.1926 2.27897C3.1926 1.96361 3.18876 1.67046 3.1926 1.3758C3.19741 1.12926 3.29469 0.89312 3.46584 0.712588C3.63698 0.532057 3.86996 0.419817 4.12016 0.397353C4.62709 0.352194 5.11369 0.690133 5.21377 1.17559C5.2709 1.45294 5.23102 1.74008 5.23831 2.02006C5.24022 2.09533 5.23831 2.17059 5.23831 2.26166H11.5104C11.5104 1.97227 11.507 1.67949 11.5104 1.38671C11.5099 1.18476 11.573 0.987584 11.6911 0.82224C11.8093 0.656896 11.9767 0.531484 12.1703 0.463209C12.3623 0.390186 12.5724 0.376278 12.7726 0.423337C12.9728 0.470397 13.1537 0.576191 13.2912 0.726636C13.4604 0.90119 13.5547 1.13296 13.5546 1.37391C13.5546 1.66745 13.5546 1.96098 13.5546 2.24661C13.6347 2.29817 13.708 2.27897 13.7743 2.27935C14.4197 2.28123 15.065 2.27935 15.7107 2.27935C16.2376 2.27935 16.506 2.53788 16.506 3.0478C16.506 7.651 16.506 12.2547 16.506 16.8589C16.506 17.3421 16.2445 17.5988 15.7483 17.5988C10.8279 17.5988 5.90692 17.5988 0.985452 17.5988C0.504221 17.5988 0.239258 17.338 0.239258 16.8672C0.239258 12.2577 0.239258 7.64824 0.239258 3.03877C0.239258 2.54955 0.511893 2.28236 1.00808 2.28123C1.65995 2.28123 2.31181 2.28123 2.96368 2.28123L3.1926 2.27897ZM0.937521 7.16743V16.9112H15.8116V7.16743H0.937521ZM0.937521 2.95937V6.47198H15.8101V2.96388H13.5561C13.5561 3.29091 13.5584 3.6089 13.5561 3.9269C13.5519 4.41838 13.1961 4.83534 12.7217 4.90835C12.191 4.99039 11.7129 4.70401 11.553 4.21403C11.497 4.04168 11.5146 3.86631 11.512 3.69207C11.5081 3.44972 11.512 3.20774 11.512 2.96539H5.23754C5.23754 3.30747 5.24559 3.63826 5.23754 3.96867C5.22335 4.44698 4.84719 4.85416 4.38168 4.90948C3.85789 4.97383 3.39468 4.69573 3.24015 4.22645C3.16729 4.00555 3.2018 3.77863 3.19681 3.55434C3.19106 3.35677 3.19681 3.1592 3.19681 2.95749L0.937521 2.95937ZM3.87821 2.64288H3.8759C3.8759 3.04404 3.8759 3.44558 3.8759 3.84712C3.8759 4.09662 4.00014 4.2464 4.20222 4.25392C4.41235 4.26183 4.55998 4.10339 4.56075 3.85351C4.56279 3.05069 4.56177 2.24786 4.55768 1.44504C4.55768 1.21435 4.42041 1.07248 4.21795 1.0706C4.0059 1.06834 3.87897 1.20984 3.87782 1.45708C3.87667 1.85222 3.87782 2.24736 3.87782 2.6425L3.87821 2.64288ZM12.8713 2.66433C12.8713 2.25715 12.874 1.84959 12.8713 1.4424C12.8694 1.2072 12.7424 1.07248 12.5338 1.07135C12.3314 1.07135 12.1949 1.20946 12.1933 1.44278C12.188 2.25113 12.1867 3.05947 12.1895 3.86782C12.1895 4.10452 12.3402 4.25581 12.545 4.24903C12.7497 4.24226 12.8701 4.10264 12.8717 3.86744C12.8728 3.4659 12.8713 3.06549 12.8709 2.66395L12.8713 2.66433Z" fill="#401A89" />
                          <path d="M11.2702 8.98755L12.4673 10.1654L7.70713 14.8349L4.9248 12.0994C5.29445 11.737 5.6848 11.355 6.08206 10.9663L7.66878 12.5412L11.2702 8.98755Z" fill="#401A89" />
                        </svg>
                        &nbsp;Contract terms apply</li>
                      <li className='text-[#401A89] flex text-[11px] px-4 relative my-1 max-[400px]:text-[12px]'>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.06458 18.1387C1.78797 18.1387 1.5538 18.1527 1.32277 18.1387C0.808836 18.1015 0.502369 17.7913 0.501583 17.2857C0.496868 13.15 0.496868 9.01563 0.501583 4.88252C0.500727 4.75966 0.525391 4.63793 0.574045 4.52483C0.6227 4.41174 0.694323 4.30968 0.784487 4.22495C1.83225 3.19103 2.87818 2.15865 3.92228 1.12783C4.00954 1.04038 4.11423 0.971733 4.22974 0.926221C4.34525 0.880708 4.46907 0.85932 4.59337 0.863408C7.23846 0.863408 9.88275 0.863408 12.5302 0.868836C13.107 0.868836 13.3836 1.17203 13.3946 1.74431C13.3946 1.8994 13.3946 2.05449 13.3946 2.20492C13.6217 2.33365 13.8488 2.26618 14.0641 2.27394C14.6558 2.29487 14.9552 2.58411 14.9568 3.16492C14.9607 4.48317 14.9568 5.79677 14.9568 7.2135C15.1698 7.01344 15.3183 6.86533 15.4755 6.72652C15.8747 6.3737 16.3108 6.37835 16.6998 6.74281C16.9088 6.93822 17.1108 7.14061 17.3119 7.34455C17.7182 7.75786 17.7268 8.15411 17.3214 8.56122C16.5866 9.29789 15.8432 10.0253 15.1038 10.7573C15.0574 10.8022 15.015 10.8511 14.9568 10.9124V12.4904C14.9568 14.5701 14.9568 16.6501 14.9568 18.7304C14.9568 19.3972 14.681 19.6865 14.0138 19.6873C10.3466 19.6929 6.67946 19.6929 3.01229 19.6873C2.35927 19.6873 2.07558 19.3771 2.0693 18.7211C2.0638 18.538 2.06458 18.3605 2.06458 18.1387ZM1.07681 4.84452C0.98487 5.01202 1.0108 5.14307 1.0108 5.26947C1.0108 9.19837 1.0108 13.1273 1.0108 17.0562C1.0108 17.6091 1.05009 17.6447 1.61902 17.6447C5.18142 17.6447 8.74382 17.6447 12.3062 17.6447C12.4485 17.6447 12.5946 17.6696 12.7306 17.6005C12.9176 17.3539 13.0072 13.7288 12.8288 12.9611C12.3754 13.4178 11.9542 13.8544 11.5188 14.2793C11.2831 14.5042 11.0937 14.7818 10.7904 14.9206C10.1389 15.2199 9.47805 15.4991 8.82582 15.7914C8.60343 15.8899 8.39047 15.9046 8.20659 15.7302C8.0062 15.5402 8.03606 15.32 8.14451 15.0897C8.37004 14.6104 8.60971 14.1351 8.80067 13.6419C8.97738 13.2116 9.24843 12.8252 9.59435 12.5105C10.7071 11.435 11.8041 10.3447 12.9027 9.26454C12.9027 6.74591 12.9027 4.25286 12.9027 1.75904C12.9073 1.68597 12.8924 1.61298 12.8594 1.54739C12.8264 1.48179 12.7766 1.42589 12.7149 1.38528H4.56036C4.56036 2.24369 4.56036 3.07032 4.56036 3.89616C4.56036 4.54055 4.24603 4.8453 3.59772 4.84763C2.75689 4.84685 1.92 4.84452 1.07681 4.84452ZM13.3867 12.4694V13.0068C13.3867 14.4274 13.3867 15.848 13.3867 17.2718C13.3867 17.8146 13.0936 18.1108 12.5498 18.1379C12.3141 18.1503 12.0783 18.1465 11.8426 18.1465C8.90886 18.1465 5.9772 18.1465 3.04764 18.1465C2.89677 18.1465 2.73332 18.0976 2.57615 18.2093C2.57144 18.2791 2.56358 18.3543 2.56201 18.4303C2.55022 19.1685 2.57538 19.1941 3.31641 19.1941C6.81071 19.1941 10.3053 19.1941 13.8001 19.1941C13.9667 19.1941 14.1403 19.2305 14.2959 19.1444C14.4782 18.8823 14.5576 11.953 14.3942 11.5032L13.3867 12.4694ZM16.1246 8.94816C15.7733 8.58991 15.4102 8.2208 15.103 7.90907L9.72716 13.2015L10.7338 14.239L16.1246 8.94816ZM13.4182 2.79814V8.6597L14.4625 7.66403V3.63174C14.4625 2.72757 14.3997 2.67251 13.4732 2.76712C13.4622 2.77022 13.4512 2.7803 13.4182 2.79814ZM4.015 1.85675L1.43043 4.37693C2.31213 4.29939 3.15924 4.47231 4.015 4.26527V1.85675ZM17.0903 7.84781C16.7886 7.54461 16.5017 7.18481 16.1025 6.93201C15.8842 7.00783 15.6964 7.15081 15.5666 7.3399L16.6731 8.49763C16.8004 8.29524 17.0982 8.20762 17.0903 7.84781ZM10.2136 14.6259L9.30753 13.7303L8.5775 15.3541L10.2136 14.6259Z" fill="#401A89" />
                          <path d="M11.3878 8.68087C11.3414 8.91351 11.1646 8.93522 10.9705 8.93522H2.92684C2.79483 8.93522 2.6628 8.93522 2.55122 8.79564C2.45849 8.47926 2.65965 8.4242 2.9339 8.42498C4.19122 8.42498 5.44698 8.42498 6.70116 8.42498H10.899C11.112 8.42188 11.3359 8.39396 11.3878 8.68087Z" fill="#401A89" />
                          <path d="M11.2613 6.6571C11.4184 6.78195 11.4263 6.9192 11.2613 7.07119H2.62741C2.50089 6.92928 2.49931 6.81374 2.61482 6.6571H11.2613Z" fill="#401A89" />
                          <path d="M7.34991 12.0719C7.44892 12.227 7.43242 12.3332 7.33026 12.4751H2.64125C2.55245 12.3069 2.55246 12.3069 2.57525 12.0719H7.34991Z" fill="#401A89" />
                          <path d="M2.62399 10.7064C2.49669 10.5513 2.5014 10.4334 2.62399 10.2869H7.32557C7.35596 10.331 7.38226 10.3777 7.40415 10.4264C7.43559 10.5195 7.41359 10.604 7.30986 10.7064H2.62399Z" fill="#401A89" />
                        </svg>
                        &nbsp;Easy Booking process</li>
                    </ul>

                    <div className="price_box w-full flex flex-row justify-center mx-auto items-center gap-4 px-4">
                      <div key={index} className="flex flex-row items-center px-2 py-1 rounded-md gap-1 border-[1px] border-[#401A89] text-center">
                        <span className='text-[#401A89] text-[12px] font-bold'>AED <br /><span className='text-[12px] font-black'>{rate1.split(" ")[1]}</span></span>
                        <span className='text-[#401A89] text-[10px] font-bold'>{day}</span>
                      </div>

                      <div key={index} className="flex flex-row items-center px-2 py-1 rounded-md gap-1 border-[1px] border-[#401A89] text-center">
                        <span className='text-[#401A89] text-[12px] font-bold'>AED <br /><span className='text-[12px] font-black'>{rate2.split(" ")[1]}</span></span>
                        <span className='text-[#401A89] text-[10px] font-bold'>{week}</span>
                      </div>

                      <div key={index} className="flex flex-row items-center px-2 py-1 rounded-md gap-1 border-[1px] border-[#401A89] text-center">
                        <span className='text-[#401A89] text-[12px] font-bold'>AED <br /><span className='text-[12px] font-black'>{rate3.split(" ")[1]}</span></span>
                        <span className='text-[#401A89] text-[10px] font-bold'>{month}</span>
                      </div>
                    </div>

                    <button onClick={() => handleModelOpen(item)} className='bg-[#401A89] w-full my-2 text-white flex justify-center rounded-full py-2 mt-4'>
                      Send Enquiry
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-[#000000d8] w-full h-full z-[60] flex items-center justify-center">
            <div className="bg-white w-[95%] p-8 max-[700px]:px-4 rounded-lg relative">
              <button onClick={handleCloseModal} className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-black font-bold w-[40px] h-[40px] flex justify-center items-center rounded-full">✕</button>

              {modeldata.title && (
                <p className='text-[2rem] max-[1000px]:text-[1.3rem] font-MODERNIZ pb-4 max-[1000px]:pb-2 '>{modeldata.title}</p>
              )}
              {modeldata.image && (
                <Image src={modeldata.image} alt={modeldata.title} className="w-full h-[17rem] max-[600px]:h-[10rem] object-contain max-[1024px]:object-cover rounded-[30px] " />
              )}
              <form onSubmit={handleSubmit} key={formKey} className="mt-4 space-y-4">
                <div className='grid grid-cols-4 max-[1000px]:grid-cols-1 gap-4'>
                  <div >
                    <label className='text-[10px] mb-1 block'>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter Full Name"
                      className="w-full px-4 py-2 border rounded-[10px]"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className='text-[10px] mb-1 block'>Mobile No</label>
                    <input
                      type="tel"
                      name="mobileNo"
                      placeholder="Enter Mobile No"
                      className="w-full px-4 py-2 border rounded-[10px]"
                      value={formData.mobileNo}
                      onChange={handleChange}
                      minLength={10}
                      maxLength={15}
                      required
                    />
                  </div>

                  <div>
                    <label className='text-[10px] mb-1 block'>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      className="w-full px-4 py-2 border rounded-[10px]"
                      value={formData.email}
                      onChange={handleChange}
                      pattern='/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/v'
                      required
                    />
                  </div>

                  <div>
                    <label className='text-[10px] mb-1 block'>Select Car Model</label>
                    <input type="text" name='carModel' value={modeldata.title} className="w-full px-4 py-2 border rounded-[10px]" id='carModel' disabled />
                  </div>
                </div>

                {message && <p className="px-5 py-4 w-1/2 mx-auto text-center bg-purple-200 rounded-lg border-2 border-[#401a89] text-purple-950">{message}</p>}

                <button
                  type="submit"
                  className="bg-[#401A89] text-white px-20 py-2 rounded-full mt-4 max-[700px]:w-full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Section2;
