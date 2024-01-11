import React, { useState } from 'react'
// import React from 'react'
import Components from '../Components/components'
import Footer from '../Components/Footer'
import DataJson from '../data.json'
import { Dropdown1, NavBottom } from '../components/navbar1'
import Speaker from '../Components/speaker'
import { Link } from 'react-router-dom'
import { TopBar } from '../home'



const  ShopWithSidebar = () => {

    const [isOpen1, setIsOpen1] = useState(true);
    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };
    const [isOpen2, setIsOpen2] = useState(true);
    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };
    const [isOpen3, setIsOpen3] = useState(true);
    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
    };
    const [isOpen4, setIsOpen4] = useState(true);
    const toggleAccordion4 = () => {
        setIsOpen4(!isOpen4);
    };
    const [isOpen5, setIsOpen5] = useState(true);
    const toggleAccordion5 = () => {
        setIsOpen5(!isOpen5);
    };

    const [selectCateg, setselectCateg] = useState("Sun Care");
    const [selectgender, setselectGender] = useState("Men (40)");
    return (
        <>

            <div>
                <TopBar />
            </div>



            <div>
                <div className=''>
                    <Dropdown1 />

                </div>
            </div>
            <div>
                <NavBottom />
            </div>

            <section className='CONTACT-SPEAKER'>
                <Speaker p1="My Account" p2="Explore All Products " />
            </section>




            <section className='PRODUCTJSON my-[100px] container mx-auto'>
                <div className='grid grid-cols-4 gap-20'>
                    <div>

                        <div className="max-w-md mx-auto mb-10">

                            <div onClick={toggleAccordion1}>
                                <div className='w-full'>
                                     <div className='flex justify-between border-b-2 border-[#3577F0] pb-3 mb-4 '>
                                         <h1 className='text-lg text-gray-700 font-semibold'>CATEGORIES</h1>
                                     <div className='flex items-end justify-between'>
                                             {isOpen1 ? <span><i class="fa-solid fa-minus"></i></span> : <span><i class="fa-solid fa-plus"></i></span>}
                                         </div>
                                     </div>
                                 </div>
                            </div>

                            {
                                isOpen1 && <div className='text-gray-500 leading-10 ml-1'>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectCateg === "Sun Care"} onChange={() => setselectCateg("Sun Care")} />
                                        <label className='ml-3' for="checkbox">Sun Care</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectCateg === "Night Care"} onChange={() => setselectCateg("Night Care")} />
                                        <label className='ml-3' for="checkbox">Night Care</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectCateg === "Treatments"} onChange={() => setselectCateg("Treatments")} />
                                        <label className='ml-3' for="checkbox">Treatments</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectCateg === "Moisturizers"} onChange={() => setselectCateg("Moisturizers")} />
                                        <label className='ml-3' for="checkbox">Moisturizers</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectCateg === "Eye Care"} onChange={() => setselectCateg("Eye Care")} />
                                        <label className='ml-3' for="checkbox">Eye Care</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectCateg === "Masks"} onChange={() => setselectCateg("Masks")} />
                                        <label className='ml-3' for="checkbox">Masks</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectCateg === "Featured"} onChange={() => setselectCateg("Featured")} />
                                        <label className='ml-3' for="checkbox">Featured</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectCateg === "On Sale"} onChange={() => setselectCateg("On Sale")} />
                                        <label className='ml-3' for="checkbox">On Sale</label>
                                    </div>
                                </div>
                            }

                        </div>

                        <div className="max-w-md mx-auto mb-10">

                            <div onClick={toggleAccordion2}>
                                <div className='w-full'>
                                    <div className='flex justify-between border-b-2 border-[#3577F0] pb-3 mb-4 '>
                                        <h1 className='text-lg text-gray-700 font-semibold'>GENDER  </h1>
                                        <div className='flex items-end justify-between'>
                                            {isOpen2 ? <span><i class="fa-solid fa-minus"></i></span> : <span><i class="fa-solid fa-plus"></i></span>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                isOpen2 && <div className='text-gray-500 leading-10 ml-1'>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectgender === "Men (40)"} onChange={() => setselectGender("Men (40)")} />
                                        <label className='ml-3' for="checkbox">Men (40)</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectgender === "Women (56)"} onChange={() => setselectGender("Women (56)")} />
                                        <label className='ml-3' for="checkbox">Women (56)</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" class="rounded-checkbox" id="checkbox" checked={selectgender === "Unisex (18)"} onChange={() => setselectGender("Unisex (18)")} />
                                        <label className='ml-3' for="checkbox">Unisex (18)</label>
                                    </div>
                                </div>
                            }

                        </div>

                        <div className="max-w-md mx-auto mb-10">

                            <div onClick={toggleAccordion3}>
                                <div className='w-full'>
                                    <div className='flex justify-between border-b-2 border-[#3577F0] pb-3 mb-4 '>
                                        <h1 className='text-lg text-gray-700 font-semibold'>COLORS</h1>
                                        <div className='flex items-end justify-between'>
                                            {isOpen3 ? <span><i class="fa-solid fa-minus"></i></span> : <span><i class="fa-solid fa-plus"></i></span>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                isOpen3 && <div className='ml-2'>
                                    <ul className='flex items-center mt-8'>
                                        <li className='bg-[#906145] h-4 w-4 mr-2 rounded-full outline outline-2 outline-offset-4 outline-[#906145] cursor-pointer'></li>
                                        <li className='bg-[#FAB8C4] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#FFDC60] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#896BA7] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#DBDEFF] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#BADEFF] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#DFBF9B] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                    </ul>
                                    <ul className='flex items-center mt-5'>
                                        <li className='bg-[#BADEFF] h-4 w-4 mr-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#DBDEFF] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#DBF8FF] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                        <li className='bg-[#FFEDDC] h-4 w-4 mx-2 rounded-full cursor-pointer'></li>
                                    </ul>
                                </div>

                            }

                        </div>


                        <div className="max-w-md mx-auto mb-10">

                            <div onClick={toggleAccordion4}>
                                <div className='w-full'>
                                    <div className='flex justify-between border-b-2 border-[#3577F0] pb-3 mb-4 '>
                                        <h1 className='text-lg text-gray-700 font-semibold'>SIZE</h1>
                                        <div className='flex items-end justify-between'>
                                            {isOpen4 ? <span><i class="fa-solid fa-minus"></i></span> : <span><i class="fa-solid fa-plus"></i></span>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                isOpen4 && <div className=''>
                                    <ul className='flex items-center mb-3'>
                                        <li className='bg-[#3577F0] text-white rounded-full px-4 py-3 m-1 cursor-pointer'>XS</li>
                                        <li className='bg-white rounded-full px-5 py-3 text-gray-500 border-2 m-1 cursor-pointer'>S</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>M</li>
                                        <li className='bg-white rounded-full px-5 py-3 text-gray-500 border-2 m-1 cursor-pointer'>L</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>XL</li>
                                    </ul>
                                    <ul className='flex items-center'>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>XXL</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>3XL</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>4XL</li>
                                    </ul>
                                </div>
                            }

                        </div>


                        <div className="max-w-md mx-auto mb-10">

                            <div onClick={toggleAccordion5}>
                                <div className='w-full'>
                                    <div className='flex justify-between border-b-2 border-[#3577F0] pb-3 mb-4 '>
                                        <h1 className='text-lg text-gray-700 font-semibold'>PRICE</h1>
                                        <div className='flex items-end justify-between'>
                                            {isOpen5 ? <span><i class="fa-solid fa-minus"></i></span> : <span><i class="fa-solid fa-plus"></i></span>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                isOpen5 && <div>
                                    <ul className='flex items-center mb-6'>
                                        <li className='bg-white rounded-full px-5 py-3 text-gray-500 border-2 border-gray-500 mr-3 cursor-pointer'>30</li>
                                        <li className='bg-white rounded-full px-4 py-3 text-gray-500 border-2 m-1 cursor-pointer'>5000</li>
                                    </ul>
                                    <div>
                                        <input type="range" className='w-full' min="0" max="75" />
                                        <h1 className='font-medium text-gray-700 text-base mt-4'>price:$0 <span className='ml-7'>$3000</span></h1>
                                    </div>
                                </div>
                            }

                        </div>


                        <div className='relative text-center w-full py-5 rounded-md text-white font-bold z-10 mt-16'>
                            <a href="" className='
                                        before:absolute
                                        before:content-[""]
                                        before:bg-[#3577F0]
                                        before:top-0
                                        before:bottom-0
                                        before:left-0
                                        before:right-0
                                        before:hover:scale-105
                                        before:duration-300
                                        before:rounded-md
                                        before:-z-10
                                        '>All Reset</a>
                        </div>
                    </div>

                    <div className='grid col-span-3'>
                        <div className=' flex h-20 items-center justify-end'>
                            <h1 className='font-semibold mr-10'>Showing 1-12 of 84 results</h1>
                            <div className='border-[2px] border-gray-300 rounded-md inline-block'>
                                <select name="" id="" className='rounded-md outline-none border-r-[20px] border-r-white text-base pl-7 pr-3 py-4'>
                                    <option className='text-lg' value="Categories">Short by Latest</option>
                                    <option className='text-lg' value="Fashion">Short by Oldest</option>
                                    <option className='text-lg' value="Electronics">Short by Name</option>
                                    <option className='text-lg' value="Furniture">Short by Pricet</option>
                                </select>
                            </div>
                        </div>

                        <div className='grid grid-cols-3 gap-10 mt-10'>
                            {
                                DataJson.slice(0, 9).map(Data => {
                                    return (
                                        <>
                                            <div className='group'>
                                                <div className='relative overflow-hidden rounded-[35px]'>
                                                    <div>
                                                        <img className='w-72 h-72 object-cover group-hover:scale-110 duration-200' src={Data.image} alt="" />

                                                        <h1 className='absolute px-2 py- rounded-[4px] bg-[#417EF0] font-semibold text-sm text-white top-6 right-7 ' style={{ boxShadow: "0 8px 16px 0 rgba(53,119,240,.3) " }}>{Data.offer}</h1>

                                                        <div className=' absolute left-7 -bottom-3  group-hover:bottom-10 duration-700 opacity-0 group-hover:opacity-100'>
                                                            <div className='flex justify-center'>
                                                                <div className='flex items-center'>
                                                                    <div className='hover:scale-110 duration-300 inline-block'>
                                                                        <Link to="/Wishlist" href="" className=''><i class="fa-regular fa-heart  bg-white p-3 rounded-[4px]"></i></Link>
                                                                    </div>
                                                                    <div className='mx-4'>
                                                                        <Link to="/Cart" href="#" className=" px-3 py-3   z-10 bg-[#ff497c] text-white font-bold rounded-[4px] relative 
                                                                                before:absolute
                                                                                before:contetn-['']
                                                                                before:px-10
                                                                                before:py-5
                                                                                before:bg-[#ff497c] 
                                                                                before:left-0
                                                                                before:top-0
                                                                                before:right-0
                                                                                before:bottom-0
                                                                                before:rounded-[4px]
                                                                                before:-z-10
                                                                                before:hover:scale-110
                                                                                before:duration-300">
                                                                            Add to Cart</Link>
                                                                    </div>
                                                                    <div className='hover:scale-110 duration-300 inline-block '>
                                                                        <a href="#" className=''><i class="fa-regular fa-eye bg-white p-3 rounded-[4px]"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='mt-5'>
                                                        <a className='text-gray-500 font-semibold tracking-wider hover:text-[#3577F0] duration-300 cursor-pointer'>{Data.name}</a>
                                                    </div>
                                                    <div className='flex text-xl font-bold mt-2'>
                                                        <h1 className='text-[#292930] mr-3'>{Data.newprice}</h1>
                                                        <del className='text-gray-300'>{Data.oldprice}</del>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <div className='text-center mt-20'>
                                <a href="#" className=" px-20 py-5 z-10 bg-[#F6F7FB] text-gray-500 font-bold rounded-[4px] relative 
                                before:absolute
                                before:contetn-['']
                                before:px-10
                                before:py-5
                                 before:bg-[#F6F7FB] 
                                before:left-0
                                before:top-0
                                before:right-0
                                before:bottom-0
                                before:rounded-[4px]
                                before:-z-10
                                before:hover:scale-110
                                before:duration-300">
                                    Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className=' container mx-auto'>
                <Components />
                <Footer />
            </div>
        </>
    )
}

export default ShopWithSidebar
