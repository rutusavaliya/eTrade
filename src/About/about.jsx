import React from 'react'
import { English, USD } from "../components/navbar"
import { Dropdown1, NavBottom } from "../components/navbar1"
import About1 from '../assets/About/About1.png'
import about2 from '../assets/About/about2.png'
import about3 from '../assets/About/about3.png'
import shape from '../assets/About/shape.png'
import shape1 from '../assets/About/shape1.png'
import shape2 from '../assets/About/shape2.png'
import team from '../assets/About/team.png'
import team1 from '../assets/About/team1.png'
import team2 from '../assets/About/team2.png'
import team3 from '../assets/About/team3.png'
import Components from '../Components/components'
import Footer from '../Components/Footer'


const About = () => {
    return (
        <>
        <div className=' container mx-auto'>
            <div className=" flex justify-between h-8 text-xs pt-1 bg-black">
                <div className=" flex">
                    <English />
                    <USD />
                </div>
                <div className=" flex justify-between mr-48 text-gray-400 font-semibold">
                    <div>
                        <a href="#" className="py-1.5 px-3 flex  items-center cursor-pointer hover:text-blue-600 duration-500 ">Help</a>
                    </div>
                    <div>
                        <a href="#" className="py-1.5 px-3 flex items-center cursor-pointer hover:text-blue-600 duration-500 ">Join US</a>
                    </div>
                    <div>
                        <a href="#" className="py-1.5 px-3 flex items-center cursor-pointer hover:text-blue-600 duration-500 ">Sign In</a>
                    </div>
                </div>

            </div>
</div>
            <div>
                <div>
                    <Dropdown1 />

                </div>
            </div>
            <div>
                <NavBottom />
            </div>

            <section className='About-section'>
            <div className=' container mx-auto'>
                <div className='px-24'>
                    <div className='about-store flex items-center mt-[100px] mb-[250px]'>
                        <div>
                            <img className='w-[350px]' src={About1} alt="" />
                        </div>
                        <div className='ml-[80px] w-[60%]'>
                            <div className='flex mb-2'>
                                <i class="ri-shopping-basket-2-line h-6 w-6 text-base border bg-[#3577F0] text-white rounded-full flex items-center justify-center"></i>
                                <h1 className='flex items-center text-[#3577F0] text-sm font-bold ml-2'>About Store</h1>
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold text-[#27272E] mb-5'>Online shopping includes both buying things online.</h1>
                                <p className='text-gray-500 text-md leading-8 mb-8'>Salesforce B2C Commerce can help you create unified, intelligent digital commerce experiences — both online and in the store.</p>
                            </div>
                            <div className='text-gray-500 grid grid-cols-2 gap-7  text-sm '>
                                <p>Empower your sales teams with industry tailored solutions that support manufacturers as they go digital, and adapt to changing markets & customers faster by creating new business.</p>
                                <p>Salesforce B2B Commerce offers buyers the seamless, self-service experience of online shopping with all the B2B</p>
                            </div>
                        </div>
                    </div>

                    <div className='3-box absolute top-[750px] pr-24'>
                        <div className='grid grid-cols-3 gap-7'>
                            <div className='py-[50px] px-[65px] bg-white rounded-md  hover:border hover:border-[#3577F0] shadow-md '>
                                <img className='mb-5 ' src={shape} alt="" />
                                <h1 className=' mb-3 text-sm text-[#27272E] font-bold'>40,000+ Happy Customer</h1>
                                <p className='text-gray-500 text-xs leading-6'>Empower your sales teams with industry tailored solutions that support.</p>
                            </div>
                            <div className='py-[50px] px-[65px] bg-white rounded-md hover:border hover:border-[#3577F0] shadow-md '>
                                <img className='mb-5' src={shape1} alt="" />
                                <h1 className=' mb-3 text-lg text-[#27272E] font-bold'>16 Years of Experiences</h1>
                                <p className='text-gray-500 text-xs leading-6'>Empower your sales teams with industry tailored solutions that support.</p>
                            </div>
                            <div className='py-[50px] px-[65px] bg-white rounded-md hover:border hover:border-[#3577F0] shadow-md '>
                                <img className='mb-5' src={shape2} alt="" />
                                <h1 className=' mb-3 text-lg text-[#27272E] font-bold'>12 Awards Won</h1>
                                <p className='text-gray-500 text-xs leading-6'>Empower your sales teams with industry  tailored solutions that support.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='our-team bg-[#F6F6F6]'>
                    <div className='px-24 pt-[200px]'>
                        <div className='flex justify-between items-center '>
                            <div className='flex mb-2'>
                                <i class="ri-team-fill h-6 w-6 text-base border bg-[#8C71DB] text-white rounded-full flex items-center justify-center"></i>
                                <h1 className='flex items-center text-[#8C71DB] text-sm font-bold ml-2'>Our Team</h1>
                            </div>
                            <div className='text-gray-400'>
                                <i class="ri-arrow-left-line mr-7"></i>
                                <i class="ri-arrow-right-line "></i>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold text-[#27272E]'>Expart Management Team</h1>
                        </div>
                    </div>

                    <div className='pl-24 mt-10 grid grid-cols-4 gap-10'>
                        <div>
                            <div className='rounded-md overflow-hidden'>
                                <img className='bg-cover hover:scale-110 duration-300' src={team} alt="" />
                            </div>
                            <h1 className='text-gray-500 mt-5'>Founder</h1>
                            <p className='text-lg text-[#27272E] font-bold mb-16'>Rosalina D. Willson</p>
                        </div>
                        <div>
                            <div className='rounded-md overflow-hidden'>
                                <img className='bg-cover hover:scale-110 duration-300' src={team1} alt="" />
                            </div>
                            <h1 className='text-gray-500 mt-5'>CEO</h1>
                            <p className='text-lg text-[#27272E] font-bold mb-16'>Ukolilix X. Xilanorix</p>
                        </div>
                        <div>
                            <div className='rounded-md overflow-hidden'>
                                <img className='bg-cover hover:scale-110 duration-300 ' src={team2} alt="" />
                            </div>
                            <h1 className='text-gray-500 mt-5'>Designer</h1>
                            <p className='text-lg text-[#27272E] font-bold mb-16'>Alonso M. Miklonax</p>
                        </div>
                        <div>
                            <div className='rounded-md overflow-hidden'>
                                <img className='bg-cover hover:scale-110 duration-300 ' src={team3} alt="" />
                            </div>
                            <h1 className='text-gray-500 mt-5'>Designer</h1>
                            <p className='text-lg text-[#27272E] font-bold mb-16'>Alonso M. Miklonax</p>
                        </div>

                    </div>
                </div>

                <div className='Solution'>
                    <div className='px-24'>

                        <div className=' flex items-center mt-[100px] '>
                            <div>
                                <img className='rounded-lg w-[450px]' src={about2} alt="" />
                            </div>
                            <div className='ml-[80px] w-[55%]'>
                                <h1 className='text-gray-500 text-sm mb-2'>Features #01</h1>
                                <h1 className='text-4xl font-bold text-[#27272E] mb-6'>Solutions that work together</h1>
                                <p className='text-gray-500 text-xs leading-6'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate<br/> your items from your point of sale system or turn your Instagram feed into a shopping site and start<br/> selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                                <button className="border px-11 py-5 rounded-md font-semibold mt-8 text-[#27272E]  hover:bg-[#3577F0] hover:text-white duration-500">Get In Touch</button>
                            </div>
                        </div>

                        <div className=' flex items-center my-[100px]'>
                            <div className='mr-[80px] w-[80%]'>
                                <h1 className='text-gray-500 text-sm mb-2'>Features #01</h1>
                                <h1 className='text-4xl font-bold text-[#27272E] mb-6'>Solutions that work together</h1>
                                <p className='text-gray-500 text-[14px] leading-6'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate<br/> your items from your point of sale system or turn your Instagram feed into a shopping site and start<br/> selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                                <button className="border px-11 py-5 rounded-md font-semibold mt-8 text-[#27272E]  hover:bg-[#3577F0] hover:text-white duration-500">Get In Touch</button>
                            </div>
                            <div>
                                <img className='rounded-lg w-[450px]' src={about3} alt="" /> 
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </section>

       <div>
        <Components/>
       </div>
           <div className=' container mx-auto'>
            <Footer/>
           </div>
        </>
    )
}

export default About