import React from 'react'
import Footer from '../Components/Footer'
import blog from '../assets/Blog/blog.png'
import bimg3 from '../assets/Blog/bimg3.jpg'
import blog1 from '../assets/Blog/blog1.png'
import tshirt from '../assets/Blog/tshirt.jpg'
import shoes1 from '../assets/Blog/shoes1.jpg'
import shoes2 from '../assets/Blog/shoes2.jpg'
import photography from '../assets/blog/photography.png'
import digital from '../assets/blog/digital.png'
import music from '../assets/blog/music.png'
import { English, USD } from "../components/navbar"
import { Dropdown1, NavBottom } from "../components/navbar1"

function Bloggrid() {
  return (
    <>
      <div className=" flex justify-between h-8 text-xs pt-1 bg-black">
        <div className=" flex">
          <English />
          <USD />
        </div>
        <div className=" flex justify-between mr-28 text-gray-400 font-semibold">
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

      <div>
        <div>
          <Dropdown1 />

        </div>
      </div>
      <div>
        <NavBottom />
      </div>
      <section className='BLOG-GRID container mx-auto py-[100px] flex justify-between '>
        <div className='   '>

          <div className='LEFT-PART col-span-2'>
            <div className='grid grid-cols-2 gap-12'>
              <div className='BOX-1 border p-5 rounded-lg relative group'>
                <div className='mb-5 overflow-hidden rounded-md'>
                  <img className='rounded-lg bg-cover  group-hover:scale-110  duration-500 cursor-pointer ' src={digital} alt="" />
                  <h2 className='absolute top-48 right-12 text-sm text-white cursor-pointer'
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      border: "1px solid rgba(255,255,255,.5)",
                      padding: "5px 15px",
                      backdropFilter: "blur(25px)",
                      boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                      borderRadius: "6px"
                    }} >Digital Art's
                  </h2>
                </div>
                <div className='mb-5'>
                  <h1 className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Keeping yourself safe when buying NFTs on eTrade</h1>
                </div>
                <div className='relative inline-block'>
                  <a className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                    href="#">Read More<i class="ri-arrow-right-line ml-2"></i></a>
                </div>
              </div>

              <div className='BOX-2 border p-5  rounded-lg relative group'>
                <div className='mb-5 overflow-hidden rounded-md'>
                  <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src={photography} alt="" />
                  <h2 className='absolute top-48 right-10 text-sm text-white cursor-pointer'
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      border: "1px solid rgba(255,255,255,.5)",
                      padding: "5px 15px",
                      backdropFilter: "blur(25px)",
                      boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                      borderRadius: "6px"
                    }} >Photography
                  </h2>
                </div>
                <div className='mb-5'>
                  <h1 className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Important updates for listing and delisting your NFTs</h1>
                </div>
                <div className='relative inline-block'>
                  <a className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                    href="#">Read More<i class="ri-arrow-right-line ml-2"></i></a>
                </div>
              </div>


              <div className='BOX-3 border p-5 rounded-lg relative group'>
                <div className='mb-5 overflow-hidden rounded-md'>
                  <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src={music} alt="" />
                  <h2 className='absolute top-48 right-10 text-sm text-white cursor-pointer'
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      border: "1px solid rgba(255,255,255,.5)",
                      padding: "5px 15px",
                      backdropFilter: "blur(25px)",
                      boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                      borderRadius: "6px"
                    }} >Music
                  </h2>
                </div>
                <div className='mb-5'>
                  <h1 className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>10 tips for avoiding scams and staying safe on the decentralized web</h1>
                </div>
                <div className='relative inline-block'>
                  <a className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                    href="#">Read More<i class="ri-arrow-right-line ml-2"></i></a>
                </div>
              </div>

              <div className='BOX-4 border p-5 rounded-lg relative group'>
                <div className='mb-5 overflow-hidden rounded-md'>
                  <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src={digital} alt="" />
                  <h2 className='absolute top-48 right-10 text-sm text-white cursor-pointer'
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      border: "1px solid rgba(255,255,255,.5)",
                      padding: "5px 15px",
                      backdropFilter: "blur(25px)",
                      boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                      borderRadius: "6px"
                    }} >Sports
                  </h2>
                </div>
                <div className='mb-5'>
                  <h1 className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Keeping yourself safe when buying NFTs on eTrade</h1>
                </div>
                <div className='relative inline-block'>
                  <a className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                    href="#">Read More<i class="ri-arrow-right-line ml-2"></i></a>
                </div>
              </div>

              <div className='BOX-5 border p-5 rounded-lg relative group'>
                <div className='mb-5 overflow-hidden rounded-md'>
                  <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src={photography} alt="" />
                  <h2 className='absolute top-48 right-10 text-sm text-white cursor-pointer'
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      border: "1px solid rgba(255,255,255,.5)",
                      padding: "5px 15px",
                      backdropFilter: "blur(25px)",
                      boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                      borderRadius: "6px"
                    }} >Virtual Studio
                  </h2>
                </div>
                <div className='mb-5'>
                  <h1 className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Important updates for listing and delisting your NFTs</h1>
                </div>
                <div className='relative inline-block'>
                  <a className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                    href="#">Read More<i class="ri-arrow-right-line ml-2"></i></a>
                </div>
              </div>


              <div className='BOX-6 border p-5 rounded-lg relative group'>
                <div className='mb-5 overflow-hidden rounded-md'>
                  <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src={music} alt="" />
                  <h2 className='absolute top-48 right-10 text-sm text-white cursor-pointer'
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      border: "1px solid rgba(255,255,255,.5)",
                      padding: "5px 15px",
                      backdropFilter: "blur(25px)",
                      boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                      borderRadius: "6px"
                    }} >Utility
                  </h2>
                </div>
                <div className='mb-5'>
                  <h1 className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>10 tips for avoiding scams and staying safe on the decentralized web</h1>
                </div>
                <div className='relative inline-block'>
                  <a className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                    href="#">Read More<i class="ri-arrow-right-line ml-2"></i></a>
                </div>
              </div>

              <div className='BOX-7 border p-5 rounded-lg relative group'>
                <div className='mb-5 overflow-hidden rounded-md'>
                  <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src={digital} alt="" />
                  <h2 className='absolute top-48 right-10 text-sm text-white cursor-pointer'
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      border: "1px solid rgba(255,255,255,.5)",
                      padding: "5px 15px",
                      backdropFilter: "blur(25px)",
                      boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                      borderRadius: "6px"
                    }} >Sketch
                  </h2>
                </div>
                <div className='mb-5'>
                  <h1 className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Keeping yourself safe when buying NFTs on eTrade</h1>
                </div>
                <div className='relative inline-block'>
                  <a className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                    href="#">Read More<i class="ri-arrow-right-line ml-2"></i></a>
                </div>
              </div>

              <div className='BOX-8 border p-5 rounded-lg relative group'>
                <div className='mb-5 overflow-hidden rounded-md'>
                  <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src={photography} alt="" />
                  <h2 className='absolute top-48 right-10 text-sm text-white cursor-pointer'
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      border: "1px solid rgba(255,255,255,.5)",
                      padding: "5px 15px",
                      backdropFilter: "blur(25px)",
                      boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                      borderRadius: "6px"
                    }} >Digital Art's
                  </h2>
                </div>
                <div className='mb-5'>
                  <h1 className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Important updates for listing and delisting your NFTs</h1>
                </div>
                <div className='relative inline-block'>
                  <a className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                    href="#">Read More<i class="ri-arrow-right-line ml-2"></i></a>
                </div>
              </div>

              <div className='BOX-9 border p-5 rounded-lg relative group'>
                <div className='mb-5 overflow-hidden rounded-md'>
                  <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src={digital} alt="" />
                  <h2 className='absolute top-48 right-10 text-sm text-white cursor-pointer'
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      border: "1px solid rgba(255,255,255,.5)",
                      padding: "5px 15px",
                      backdropFilter: "blur(25px)",
                      boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                      borderRadius: "6px"
                    }} >Digital Art's
                  </h2>
                </div>
                <div className='mb-5'>
                  <h1 className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Keeping yourself safe when buying NFTs on eTrade</h1>
                </div>
                <div className='relative inline-block'>
                  <a className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                    href="#">Read More<i class="ri-arrow-right-line ml-2"></i></a>
                </div>
              </div>

              <div className='BOX-10 border p-5 rounded-lg relative group'>
                <div className='mb-5 overflow-hidden rounded-md'>
                  <img className='rounded-lg bg-cover group-hover:scale-110 duration-500 cursor-pointer' src={photography} alt="" />
                  <h2 className='absolute top-48 right-10 text-sm text-white cursor-pointer'
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      border: "1px solid rgba(255,255,255,.5)",
                      padding: "5px 15px",
                      backdropFilter: "blur(25px)",
                      boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                      borderRadius: "6px"
                    }} >Photography
                  </h2>
                </div>
                <div className='mb-5'>
                  <h1 className='text-[#292930] text-xl font-medium hover:text-[#3577F0] cursor-pointer duration-300 inline'>Important updates for listing and delisting your NFTs</h1>
                </div>
                <div className='relative inline-block'>
                  <a className='before:absolute
                                                   duration-500
                                                   before:content-[""]
                                                   before:w-0
                                                   before:h-[1px]
                                                   before:bg-[#3577F0] 
                                                   before:duration-500
                                                   before:-bottom-0  
                                                   before:opacity-0
                                                   before:hover:w-[100px]
                                                   before:right-0
                                                   before:hover:left-0
                                                   before:hover:opacity-100
                                                   hover:text-[#3577F0] 
                                                   font-semibold 
                                                   text-base'
                    href="#">Read More<i class="ri-arrow-right-line ml-2"></i></a>
                </div>
              </div>
            </div>

            <div className="BUTTON-PART">
              <div className="mt-20">
                <ul className="flex">
                  <a href="#">
                    <li className="border px-4 py-2 mr-2 rounded-lg bg-[#3577F0] text-white text-lg">1</li>
                  </a>
                  <a href="#">
                    <li className="border px-4 py-2 mr-2 rounded-lg hover:text-white hover:bg-[#3577F0] duration-300 text-lg">2</li>
                  </a>
                  <a href="#">
                    <li className="border px-4 py-2 mr-2 rounded-lg hover:text-white hover:bg-[#3577F0] duration-300 text-lg">3</li>
                  </a>
                  <a href="#">
                    <li className="border px-4 py-2 mr-2 rounded-lg hover:text-white hover:bg-[#3577F0] duration-300 text-lg">4</li>
                  </a>
                  <a href="#">
                    <li className="border px-4 py-2 mr-2 rounded-lg hover:text-white hover:bg-[#3577F0] duration-300 text-lg">5</li>
                  </a>
                  <a href="#">
                    <li className="border px-4 py-2 mr-2 rounded-lg text-gray-600 hover:text-white hover:bg-[#3577F0] duration-300 text-md">
                      <i class="fa-solid fa-arrow-right"></i>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <right section -----------------------------------> */}

        <div className='right-section ml-8 '>
          <div className='border w-[350px] h-80  rounded-md'>
            <div className='ml-5' >
              <h1 className='mt-3'>Latest Posts</h1>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={blog} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-lg  hover:text-blue-500 duration-500 font-semibold '>Dubai’s FRAME Offers its <br></br> Take on the</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>Mar 27, 2022</h1>
                    <h1 className='pl-2'>300k Views</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={bimg3} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-lg  hover:text-blue-500 duration-500 font-semibold '>Dubai’s FRAME Offers its <br></br> Take on the</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>Mar 27, 2022</h1>
                    <h1 className='pl-2'>300k Views</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-32  h-20 group-hover:scale-110 duration-500' src={blog1} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-lg  hover:text-blue-500 duration-500 font-semibold '>Dubai’s FRAME Offers its <br></br> Take on the</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>Mar 27, 2022</h1>
                    <h1 className='pl-2'>300k Views</h1>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='border w-[350px] h-80  rounded-md mt-10  '>
            <div className='ml-5' >
              <h1 className='mt-3'>Latest Posts</h1>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={tshirt} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-lg hover:text-blue-500 duration-500 font-semibold '>Men's Fashion Tshirt</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>$30</h1>
                    <h1 className='pl-2'>$20</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={shoes1} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-lg  hover:text-blue-500 duration-500 font-semibold '>Nike Shoes</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>$200</h1>
                    <h1 className='pl-2'>$150</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={shoes2} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-lg  hover:text-blue-500 duration-500 font-semibold '>Addidas Shoes</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>$300</h1>
                    <h1 className='pl-2'>$200</h1>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='border w-[350px] mt-10 rounded-md h-60'>
            <h1 className='mt-5 ml-5'>Archives List</h1>
            <ul className='ml-5 text-sm mt-6 text-[#777777] '>
              <li className='hover:text-black duration-500'><a href="#">January 2020</a></li>
              <li className='pt-3 hover:text-black duration-500'><a href="#">February 2020</a></li>
              <li className='pt-3 hover:text-black duration-500'><a href="#">March 2020</a></li>
              <li className='pt-3 hover:text-black duration-500'><a href="#">April 2020</a></li>
            </ul>

          </div>

          <div className='border w-[350px] h-40 mt-10 rounded-md'>
            <h1 className='ml-5 mt-5'>Archives Dropdown</h1>
            <div className="relative mt-5">
              <label className="absolute  bg-[#fff]  text-gray-600 text-sm"></label>
              <select
                className="w-72 h-10 ml-3 border mt-2 rounded-lg px-6  text-gray-500 text-sm "
                type="text">
                <option value="">Select Month</option>
                <option value="">April 2020(4)</option>
                <option value="">May 2020(4)</option>
                <option value="">June 2020(4)</option>
                <option value="">July 2020(4)</option>

              </select>
            </div>
          </div>

          <div className='border w-[350px] h-60 rounded-md mt-10'>
            <h1 className='mt-5 ml-5'>Tags</h1>
            <div className='flex ml-5 mt-5 text-xs '>
              <a href="#" className='mr-3 border-[2px] px-3 py-1 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-16'>Design</a>
              <a href="#" className='mr-3  border-[2px] px-4 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-16'>Html</a>
              <a href="#" className='mr-3  border-[2px] px-2 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-16'>Graphic</a>
            </div>

            <div className='flex ml-5 mt-3 text-xs '>
              <a href="#" className='mr-3 border-[2px] px-4 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-28 h-8'>Development</a>
              <a href="#" className='mr-3  border-[2px] px-4 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full h-8 w-28'>UI/UX Design</a>

            </div>

            <div className='flex ml-5 mt-3 text-xs'>
              <a href="#" className='mr-3 border-[2px] px-2 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-20'>ecommerce</a>
              <a href="#" className='mr-3  border-[2px] px-5 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-16'>CSS</a>
              <a href="#" className='mr-3  border-[2px] px-4 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-12'>JS</a>
            </div>
          </div>
        </div>

</section>
      
     

      <div className=' container mx-auto'>
        <Footer />
      </div>
    </>
  )
}

export default Bloggrid