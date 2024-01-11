import React from 'react'
import Footer from '../Components/Footer'
import Video from '../assets/Blog/Video.png'
import tshirt from '../assets/Blog/tshirt.jpg'
import shoes1 from '../assets/Blog/shoes1.jpg'
import shoes2 from '../assets/Blog/shoes2.jpg'
import blog1 from '../assets/Blog/blog1.png'
import bimg3 from '../assets/Blog/bimg3.jpg'
import blog from '../assets/Blog/blog.png'
import blogimg from '../assets/Blog/blogimg.png'
import bimg from '../assets/Blog/bimg.png'
import image1 from '../assets/Blog/image1.png'
import bimg1 from '../assets/Blog/bimg1.png'
import { TopBar } from '../home'
import { Link } from 'react-router-dom'
import { Dropdown1, NavBottom } from "../components/navbar1"
import Speaker from '../Components/speaker'

function Bloglist() {
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

      <section className='CONTACT-SPEAKER'>
                    <Speaker p1="Blog" p2="Blog List" />
                </section>

<div className=' container mx-auto'>
      <div className='flex  mt-10 justify-center'>
        <div className=''>
          <div className=' w-[810px] h-96  bg-[#f9f3f0]  rounded-md p-10 pt-10 border-l-4 border-[#FAB8C4] '>
            <h1 className='text-lg hover:text-blue-500 duration-500'>Dubai’s Offers its Take Nike SB Dunk.</h1>
            <div className='flex mt-6'>
              <img className='w-12' src={bimg} alt=""></img>
              <div className=''>
                <h1 className='ml-5 text-sm'>Ralph Edwards</h1>
                <div className='flex ml-5 text-xs text-[#777777]'>
                  <p>Mar 27, 2022</p>
                  <p className='ml-5'>9 min to read</p>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 font-sanssarif text-[#777777] mt-5'>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.<br></br> Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis.<br></br> Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
            <div className='mt-8'>
                    <Link to="/Standrdpost" href="#" className='relative z-10 font-bold bg-[#3577F0] text-white py-3 px-6 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-16
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
                                               '>Read More</Link>
                  </div>
          </div>



          <div className='mt-16  '>
            <img className='w-[810px] rounded-md' src={bimg1} alt=""></img>

          </div>



          <div className=' mt-5'>
            <h1 className='text-2xl hover:text-blue-500 duration-500  font-medium'>UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan<br></br> Brand</h1>
            <div className='flex mt-6'>
              <img className='w-10 rounded-full' src={image1} alt=""></img>
              <div className=''>
                <h1 className='ml-5 text-sm'>Theresa Underwood</h1>
                <div className='flex ml-5 text-xs text-[#777777]'>
                  <p>Mar 25, 2022</p>
                  <p className='ml-5'>300k Views</p>
                </div>
              </div>
            </div>
            <p className='text-base leading-7 font-sanssarif text-[#777777] mt-5'>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus<br></br> velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id<br></br> dignissim et, imperdiet vitae mauris.</p>
            <div className='mt-8'>
            <Link to="/Standrdpost" href="#" className='relative z-10 font-bold bg-[#3577F0] text-white py-3 px-6 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-16
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
                                               '>Read More</Link>
                  </div>
          </div>


          <div className='border-l-4 border-[#FAB8C4] w-[810px] h-52 mt-10 bg-[#f9f3f0] rounded-md pl-10 pt-10 mb-10'>
            <h1 className='hover:text-blue-500 duration-500 text-4xl font-semibold italic'>“An oral history of the AIM away message (by<br></br> the people who were there)”</h1>
            <div className='flex mt-6'>
              <img className='w-10 rounded-full' src={image1} alt=""></img>
              <div className=''>
                <h1 className='ml-5 text-sm'>Theresa Underwood</h1>
                <div className='flex ml-5 text-xs text-[#777777]'>
                  <p>Mar 22, 2022</p>
                  <p className='ml-5'>300k Views</p>
                </div>
              </div>
            </div>
          </div>

          <div className="video-section border-t-2 pt-10 -z-10 w-[810px] h-auto ">
            <div className="image-section relative mb-10 after:absolute after:content-[''] after:w-[100%] after:h-[100%] after:bg-black after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-md after:opacity-[0.2] after:z-10 " >
              <img src={Video} className="rounded-md" alt="" />
              <a href="https://www.youtube.com/watch?v=Youugn7xW_A&list=RDYouugn7xW_A&start_radio=1" className="absolute top-[50%] -translate-x-2/4 -translate-y-2/4 left-[50%]   mx-auto z-20 rounded-full  bg-black "><i class="fa-solid fa-play w-40 h-40 text-4xl z-30 text-white  flex justify-center items-center opacity-100 "></i> </a>
            </div>
          </div>


          <div className=' mt-6'>
            <h1 className='text-2xl hover:text-blue-500 duration-500 font-medium'>UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan<br></br> Brand</h1>
            <div className='flex mt-6'>
              <img className='w-10 rounded-full' src={image1} alt=""></img>
              <div className=''>
                <h1 className='ml-5 text-sm'>Theresa Underwood</h1>
                <div className='flex ml-5 text-xs text-[#777777]'>
                  <p>Mar 20, 2022</p>
                  <p className='ml-5'>300k Views</p>
                </div>
              </div>
            </div>
            <p className='text-base leading-7 font-sanssarif text-[#777777] mt-5'>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus<br></br> velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id<br></br> dignissim et, imperdiet vitae mauris.</p>
            <div className='mt-8'>
            <Link to="/Standrdpost" href="#" className='relative z-10 font-bold bg-[#3577F0] text-white py-3 px-6 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-16
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
                                               '>Read More</Link>
                  </div>
          </div>
        </div>

         {/* <right section ----------------------> */}

        <div className='right-section ml-3  '>
          <div className='border w-[350px] h-80  rounded-md   '>
            <div className='ml-5' >
              <h1 className='mt-3'>Latest Posts</h1>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <Link to="/Standrdpost"><img className='w-24  h-16 group-hover:scale-110 duration-500' src={blog} alt=""></img></Link>
                </a>
                <div className='ml-3'>
                  <Link to="/Standrdpost" href='#' className='text-[17px]  hover:text-blue-500 duration-500 font-semibold '>Dubai’s FRAME Offers its <br></br> Take on the</Link>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>Mar 27, 2022</h1>
                    <h1 className='pl-2'>300k Views</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group '>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <Link to="/Standrdpost"><img className='w-24  h-16 group-hover:scale-110 duration-500' src={bimg3} alt=""></img></Link>
                </a>
                <div className='ml-3'>
                  <Link to="/Standrdpost" href='#' className='text-[17px] hover:text-blue-500 duration-500 font-semibold '>Dubai’s FRAME Offers its <br></br> Take on the</Link>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>Mar 27, 2022</h1>
                    <h1 className='pl-2'>300k Views</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group '>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <Link to="/Standrdpost"><img className='w-24  h-16 group-hover:scale-110 duration-500' src={blog1} alt=""></img></Link>
                </a>
                <div className='ml-3'>
                  <Link to="/Standrdpost" href='#' className='text-[17px]  hover:text-blue-500 duration-500 font-semibold '>Dubai’s FRAME Offers its <br></br> Take on the</Link>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>Mar 27, 2022</h1>
                    <h1 className='pl-2'>300k Views</h1>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='border w-[330px] h-80  rounded-md mt-10  '>
            <div className='ml-5' >
              <h1 className='mt-3'>Latest Posts</h1>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                 <Link to="/Standrdpost"> <img className='w-24  h-16 group-hover:scale-110 duration-500' src={tshirt} alt=""></img></Link>
                </a>
                <div className='ml-3'>
                  <Link to="/Standrdpost" href='#' className='text-sm  hover:text-blue-500 duration-500 font-semibold '>Men's Fashion Tshirt</Link>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>$30</h1>
                    <h1 className='pl-2'>$20</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <Link to="/Standrdpost"><img className='w-24  h-16 group-hover:scale-110 duration-500' src={shoes1} alt=""></img></Link>
                </a>
                <div className='ml-3'>
                  <Link to="/Standrdpost" href='#' className='text-sm  hover:text-blue-500 duration-500 font-semibold '>Nike Shoes</Link>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>$200</h1>
                    <h1 className='pl-2'>$150</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <Link to="/Standrdpost"><img className='w-24  h-16 group-hover:scale-110 duration-500' src={shoes2} alt=""></img></Link>
                </a>
                <div className='ml-3'>
                  <Link to="/Standrdpost" href='#' className='text-sm  hover:text-blue-500 duration-500 font-semibold '>Addidas Shoes</Link>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>$300</h1>
                    <h1 className='pl-2'>$200</h1>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='border w-[330px] mt-10 rounded-md h-60'>
            <h1 className='mt-5 ml-5'>Archives List</h1>
            <ul className='ml-5 text-sm mt-6 text-[#777777] '>
              <li className='hover:text-black duration-500'><a href="#">January 2020</a></li>
              <li className='pt-3 hover:text-black duration-500'><a href="#">February 2020</a></li>
              <li className='pt-3 hover:text-black duration-500'><a href="#">March 2020</a></li>
              <li className='pt-3 hover:text-black duration-500'><a href="#">April 2020</a></li>
            </ul>

          </div>

          <div className='border w-[330px] h-40 mt-10 rounded-md'>
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

          <div className='border w-[330px] h-60 rounded-md mt-10'>
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


      </div>
</div>
      <div className=' container mx-auto'>
        <Footer />
      </div>
    </>
  )
}

export default Bloglist