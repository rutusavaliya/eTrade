import React from 'react'
import Footer from '../Components/Footer'
import { TopBar } from '../home'
import { Dropdown1, NavBottom } from "../components/navbar1"
import Speaker from '../Components/speaker'

function Contact() {
    return (
        <>
            <div>
        <TopBar />
      </div>
            <div>
                <div>
                    <Dropdown1 />

                </div>
            </div>
            <div>
                <NavBottom />
            </div>

            <section className='Contact-speaker'>
                  <Speaker p1="Contact" p2="Contact With Us" />
            </section>

            <div className='  w-full container mx-auto'>     
                <div className='flex justify-between mt-10'>
                    <div>
                        <div>
                            <h1 className='font-semibold text-[28px]'>We would love to hear from you.</h1>
                            <p className='text-[19px] text-gray-600'>If you’ve got great products your making or looking to work with us then drop us a line.</p>
                            <div className='flex '>
                                <div className="relative mt-8">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600  text-sm">
                                        Name <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        class="w-[274px] h-12 border mt-2 rounded-lg  px-6 text-gray-500 text-sm "
                                        type="text"

                                    ></input>
                                </div>

                                <div className="relative mt-8 ml-3">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                        phone<span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        className="w-[274px] h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                        type="text"

                                    ></input>
                                </div>

                                <div className="relative mt-8 ml-3">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                        E-mail<span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        className="w-[274px] h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                        type="text"

                                    ></input>
                                </div>
                            </div>
                            <div className="relative mt-8 ">
                                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                    Your message<span className='text-red-500'>*</span>
                                </label>
                                <input
                                    className="w-[850px] h-40 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                    type="text"

                                ></input>
                            </div>

                            <div className='mt-8'>
                                <a href="#" className='relative z-10 font-bold bg-[#3577F0] text-white py-3 px-6 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-20
                                                before:py-6
                                                before:bg-[#3577F0]
                                                before:left-0
                                                before:top-0
                                                before:right-0 
                                                before:bottom-0
                                                before:-z-10
                                                before:hover:scale-105
                                                before:duration-300
                                                before:rounded-md
                                               '>Send Message</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='font-medium text-[24px]'>Our Store</h1>
                            <p className='text-[16px] text-gray-500 mt-5'>8212 E. Glen Creek Street Orchard Park, NY 14127,<br /> United States of America</p>
                            <p className='mt-6  text-gray-500 text-[16px]'>Phone: +123 456 7890</p>
                            <p className=' text-gray-500 text-[16px]'>Email: Hello@etrade.com</p>
                        </div>

                        <div className='mt-6'>
                            <h1 className='font-semibold text-[24px]'>Careers</h1>
                            <p className='text-md text-gray-600 font-normal pt-3'>Instead of buying six things, one that you really like.</p>
                        </div>

                        <div className='mt-7'>
                            <h1 className='text-2xl font-semibold'>Opening Hours:</h1>
                            <p className='text-md text-[#777777] pt-4'>Monday to Saturday: 9am - 10pm</p>
                            <p className='text-md text-[#777777] '>Sundays: 10am - 6pm</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                        <iframe class="w-full h-[500px] rounded-lg" src="https://maps.google.com/maps?q=melbourne&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
            </div>
           
            <div className='mx-auto container'>
                <Footer />
            </div>
        </>

    )
}

export default Contact
