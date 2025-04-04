'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Section1 = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNo: '',
        email: '',
        // carModel: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [formKey, setFormKey] = useState(Date.now());

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        // ✅ Required fields check
        // if (!formData.fullName || !formData.mobileNo || !formData.email || !formData.carModel) {
        if (!formData.fullName || !formData.mobileNo || !formData.email ) {
            setMessage('All fields are required!');
            setLoading(false);
            return;
        }

            const form = new FormData();
            form.append('full_name', formData.fullName);
            form.append('mobile', formData.mobileNo);
            form.append('email', formData.email);
            // form.append('modal', formData.carModel);


            axios
    .post("https://testqds.com/new_quicklease/api/enquiries/request_form", form)
    .then((response) => {
        console.log(response);
        setMessage('Form submitted successfully!');
    });
         


        // ✅ Form Reset
        setFormData({ fullName: '', mobileNo: '', email: '', carModel: '' });
        setFormKey(Date.now()); // Form ko re-render trigger karega

        setLoading(false);
    };

    // ✅ Message 5 sec baad hide ho jayega
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <section className='container mx-auto'>
            <div className="mx-auto w-full bg-[#401A89] mt-[6rem] max-[1000px]:mt-[3rem] rounded-[10px] max-[1000px]:w-full">
                <div className='px-20 py-12 flex flex-col gap-6 items-end max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:px-4'>
                    <div className='w-full'>
                        <h2 className='text-[2rem] max-[1024px]:text-[1.5rem] uppercase text-white font-extrabold leading-[1] font-MODERNIZ text-center'>
                        Your Luxury Ride is Just One Step Away!
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} key={formKey} className='w-full '>
                        <div className='grid grid-cols-2 items-end justify-between gap-4 max-[1000px]:grid-cols-1 max-[1000px]:gap-3'>
                            <div>
                                <input
                                    className='px-4 w-full py-2  rounded-[10px] max-[1000px]:w-full'
                                    type="text"
                                    name="fullName"
                                    placeholder='Enter Full Name'
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    className='px-4 w-full py-2  rounded-[10px] max-[1000px]:w-full'
                                    type="tel"
                                    name="mobileNo"
                                    placeholder='Enter Mobile No'
                                    value={formData.mobileNo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    className='px-4 w-full py-2  rounded-[10px] max-[1000px]:w-full'
                                    type="email"
                                    name="email"
                                    placeholder='Enter Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* <div>
                                <select
                                    name="carModel"
                                    id="carModel"
                                    className="px-4 w-full py-2  rounded-[10px] max-[1000px]:w-full"
                                    value={formData.carModel}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" hidden>Select a car model</option>
                                    <option value="c200">Mercedes Benz C200 2025</option>
                                    <option value="e200">Mercedes E200 2025</option>
                                    <option value="g63">Mercedes G63 2025</option>
                                    <option value="vogue">Range Rover Vogue 2025</option>
                                </select>
                            </div> */}
                            <div>
                                <button
                                    type="submit"
                                    className='bg-[#401A89] border-2 border-white w-full text-white px-6 py-2 rounded-[6px] max-[1000px]:px-20 max-[1000px]:rounded-full'
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {message && <p className="text-center text-red-500 mt-4">{message}</p>}
            </div>
        </section>
    );
}

export default Section1;
