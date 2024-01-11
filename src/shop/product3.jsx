import product30 from '../assets/shop/product30.png'
import product29 from '../assets/shop/product29.png'
import product28 from '../assets/shop/product28.png'
import Footer from '../Components/Footer'
import { TopBar } from '../home'
import { Dropdown1, NavBottom } from "../components/navbar1"
import Components from "../components/components";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReducer } from 'react'


const ProductV3 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const initialState = {
    firstCounter: 1,
  }
  const reducer = (state, action) => {
    switch (action.type) {

      case 'inc1':
        return { ...state, firstCounter: state.firstCounter + action.value }
      case 'dec1':
        return { ...state, firstCounter: state.firstCounter - action.value }

      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState);
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

      <section className='IMAGES-AND-DISCRIPTION  '>
        <div className="container mx-auto">
          <div className='grid grid-cols-2 gap-10 pt-[60px] px-24 '>

            <div className='main-div-photos flex'>
              <div>
                <img className=' mb-5 w-24 ring-2 ring-[#417EF0]' src={product28} alt="" />
                <img className=' w-24 my-5 hover:ring-2 hover:ring-[#417EF0] duration-300' src={product29} alt="" />
                <img className=' w-24 my-5 hover:ring-2 hover:ring-[#417EF0] duration-300' src={product30} alt="" />
                <img className='w-24 my-5 hover:ring-2 hover:ring-[#417EF0] duration-300' src={product29} alt="" />

              </div>
              <div className='relative pl-14'>
                <img className='rounded-lg w-[900px]' src={product28} alt="" />
                <h1 className='absolute px-3 py-1 rounded-md bg-[#417EF0] font-bold text-xs text-white top-8 right-7 ' style={{ boxShadow: "0 8px 16px 0 rgba(53,119,240,.3) " }}>20% OFF</h1>
                <div className='absolute top-[450px] right-8'>
                  <a className='h-12 w-12 flex justify-center items-center absolute bottom-16 right-1 bg-white rounded-full hover:bg-[#417EF0]       duration-300 hover:text-white' href="">
                    <i class="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='main-div-details '>
              <h1 className='font-bold text-4xl text-[#292930] tracking-wide mb-5'>Ella Everyday Tote</h1>
              <h1 className='font-semibold text-2xl text-[#292930] mb-4'>$155.00 - $255.00</h1>
              <div className='flex border-b-2 border-gray-200'>
                <span className='text-[#FFA800]'>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-line"></i>
                </span>
                <p className='text-gray-500 hover:text-[#292930] duration-500 ml-2 pb-3 '>(2 customer reviews)</p>
              </div>
              <ul className='text-[#417EF0]  pt-5 mb-7 text-[12px]'>
                <li><i class="ri-check-line mr-3"></i>In stock</li>
                <li><i class="ri-check-line mr-3"></i>Free delivery available</li>
                <li><i class="ri-check-line mr-3"></i>Sales 30% Off Use Code: MOTIVE30</li>
              </ul>
              <p className='text-gray-500 mb-5 text-[13px]'>In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante<br /> est,  elementum eget magna. Pellentesque sagittis dictum libero, eu<br /> dignissim tellus.</p>
              <div>
                <div className='flex items-center mb-3'>
                  <h1 className='mr-12 font-semibold text-md text-[#292930]'>Colors:</h1>
                  <ul className='flex items-center'>
                    <li className='bg-[#AAE6F8] h-3 w-3 mx-2 rounded-full outline outline-2 outline-offset-4 outline-[#AAE6F8]'></li>
                    <li className='bg-[#5F8AF7] h-3 w-3 mx-2 rounded-full'></li>
                    <li className='bg-[#59C3C0] h-3 w-3 mx-2 rounded-full'></li>
                  </ul>
                </div>
                <div className='flex items-center mb-10'>
                  <h1 className='mr-16 font-semibold text-md text-[#292930]'>Size:</h1>
                  <ul className='flex items-center'>
                    <li className='bg-white rounded-full px-2 py-1 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer'>XS</li>
                    <li className='bg-white rounded-full px-3 py-1 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer'>S</li>
                    <li className='bg-white rounded-full px-2 py-1 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer'>M</li>
                    <li className='bg-white rounded-full px-3 py-1 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer'>L</li>
                    <li className='bg-white rounded-full px-2 py-1 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer'>XL</li>
                  </ul>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center '>
                    <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  text-black duration-300' onClick={() => {
                      if (count.firstCounter > 0) {
                        dispatch({ type: 'dec1', value: 1 });
                      }
                    }}>
                      <i class="fa-solid fa-minus text-xs"></i>
                    </button>

                    <h1 className='font-semibold text-lg w-14 text-center'>{count.firstCounter}</h1>

                    <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2 text-black duration-300 text-base' onClick={() => dispatch({ type: 'inc1', value: 1 })}>
                      <i class="fa-solid fa-plus text-xs"></i>
                    </button>
                  </div>
                  <div className='flex items-center'>
                    <div className='mx-5'>
                      <Link to="/Cart" href="#" className='relative z-10 font-bold bg-[#3577F0] text-white px-20 py-5 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-32
                                                before:py-5
                                                before:bg-[#3577F0]
                                                before:left-0
                                                before:top-0
                                                before:right-0 
                                                before:bottom-0
                                                before:-z-10
                                                before:hover:scale-105
                                                before:duration-300
                                                before:rounded-md
                                               '>Add to Cart</Link>
                    </div>

                    <div className='flex mx-5'>
                      <Link to="/Wishlist" href="#" className='relative z-10 px-1 py-3 border-2 rounded-md
                                                before:absolute 
                                                before:h-[100%]
                                                before:w-[100%]
                                                before:rounded-md
                                                before:bg-[#3577F0]
                                                before:scale-0 
                                                before:-z-10
                                                   before:hover:scale-105
                                                before:duration-300
                                                before:top-0
                                                before:bottom-0
                                                before:left-0
                                                before:right-0
                                                '>
                        <i class="ri-heart-line text-2xl px-4 py-4  text-gray-600 hover:border-none hover:text-white duration-300"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-10 '>
        <div className='BOTTOM-DETAILS-PART  bg-[#F9F0F3] w-full '>
          <div className='py-[100px] container mx-auto'>
            <div className='flex '>
              <div className='relative group mr-8 cursor-pointer' >
                <ul className=' text-2xl font-semibold'>
                  <li onClick={() => handleTabClick(1)} className={`${activeTab === 1 ? 'before:absolute before:content-[""] before:w-[125px] before:h-[2px] before:bg-[#3577F0] before:bottom-0 before:left-0 text-[#3577F0]' : 'before:absolute before:content-[""] before:w-[0] before:h-[2px] before:bg-[#3577F0] before:bottom-0 before:right-0 before:group-hover:w-[123px] before:duration-500 before:group-hover:left-0 text-gray-500 hover:text-[#3577F0] duration-500'}`}>
                    <span>Description</span>
                  </li>
                </ul>
              </div>
              <div className='relative group mr-8 cursor-pointer' >
                <ul className=' text-2xl font-semibold'>
                  <li onClick={() => handleTabClick(2)} className={`${activeTab === 2 ? 'before:absolute before:content-[""] before:w-[250px] before:h-[2px] before:bg-[#3577F0] before:bottom-0 before:left-0 text-[#3577F0]' : 'before:absolute before:content-[""] before:w-[0] before:h-[2px] before:bg-[#3577F0] before:bottom-0 before:right-0 before:group-hover:w-[250px] before:duration-500 before:group-hover:left-0 text-gray-500 hover:text-[#3577F0] duration-500'}`}>
                    <span>Additional Information</span>
                  </li>
                </ul>
              </div>
              <div className='relative group mr-8 cursor-pointer' >
                <ul className=' text-2xl font-semibold'>
                  <li onClick={() => handleTabClick(3)} className={`${activeTab === 3 ? 'before:absolute before:content-[""] before:w-[85px] before:h-[2px] before:bg-[#3577F0] before:bottom-0 before:left-0 text-[#3577F0]' : 'before:absolute before:content-[""] before:w-[0]  before:h-[2px] before:bg-[#3577F0] before:bottom-0 before:right-0 before:group-hover:w-[85px] before:duration-500 before:group-hover:left-0 text-gray-500 hover:text-[#3577F0] duration-500'}`}>
                    <span>Reviews</span>
                  </li>
                </ul>
              </div>
            </div>

            {
              activeTab === 1 && <div className='DESCRIPTION grid grid-cols-2 gap-10 mt-12 animate-blink'>
                <div>
                  <div>
                    <h1 className='font-bold text-xl text-[#292930] mb-7'>Specifications:</h1>
                    <p className='text-gray-500 mb-14'>We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. But the structure was from the funny the century rather, initial all the made, have spare to negatives.</p>
                  </div>
                  <div className='flex'>
                    <div className='mr-10'>
                      <div className='flex justify-center items-center h-16 w-16 bg-white rounded-full mb-5'>
                        <img className='h-8' src="./src/assets/shop/Fimg3.png" alt="" />
                      </div>
                      <h1 className='font-semibold text-xl text-[#292930]'>Easy Returns</h1>
                    </div>
                    <div className='mr-10'>
                      <div className='flex justify-center items-center h-16 w-16 bg-white rounded-full mb-5'>
                        <img className='h-8' src="./src/assets/shop/Fimg2.png" alt="" />
                      </div>
                      <h1 className='font-semibold text-xl text-[#292930]'>Quality Service</h1>
                    </div>
                    <div>
                      <div className='flex justify-center items-center h-16 w-16 bg-white rounded-full mb-5'>
                        <img className='h-8' src="./src/assets/shop/parsal.png" alt="" />
                      </div>
                      <h1 className='font-semibold text-xl text-[#292930]'>Original Product</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className='font-bold text-xl text-[#292930] mb-7'>Care & Maintenance:</h1>
                    <p className='text-gray-500'>Use warm water to describe us as a product team that creates amazing UI/UX experiences, by crafting top-notch user experience.</p>
                  </div>
                </div>
              </div>
            }

            {
              activeTab === 2 && <div className='ADDITIONAL-INFORMATION mt-12 animate-blink'>
                <div className='bg-white rounded-md p-12'>

                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">Stand Up</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">35″L x 24″W x 37-45″H(front to back wheel)</h1>
                  </div>
                  <div className="py-5 flex  text-[#292930]">
                    <h1 className="w-[500px]  font-semibold px-8">Folded (W/O Wheels)</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">32.5″L x 18.5″W x 16.5″H</h1>
                  </div>
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">Folded (W/ Wheels)</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">32.5″L x 24″W x 18.5″H</h1>
                  </div>
                  <div className="py-5 flex  text-[#292930]">
                    <h1 className="w-[500px]  font-semibold px-8">Door Pass Through</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">24</h1>
                  </div>
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">Frame</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">Aluminum</h1>
                  </div>
                  <div className="py-5 flex  text-[#292930]">
                    <h1 className="w-[500px]  font-semibold px-8">Weight (W/O Wheels)</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">20 LBS</h1>
                  </div>
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">Weight Capacity</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">60 LBS</h1>
                  </div>
                  <div className="py-5 flex  text-[#292930]">
                    <h1 className="w-[500px]  font-semibold px-8">Width</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">24″</h1>
                  </div>
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">Handle Height (Ground To Handle)</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">37-45″</h1>
                  </div>
                  <div className="py-5 flex  text-[#292930]">
                    <h1 className="w-[500px]  font-semibold px-8">Wheels</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">Aluminum</h1>
                  </div>
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">Size</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">	S, M, X, XL</h1>
                  </div>
                </div>
              </div>
            }

            {
              activeTab === 3 && <div className='REVIEWS mt-[70px] animate-blink'>
                <div className='FORM grid grid-cols-2 gap-20'>
                  <div className='pr-14'>
                    <div className='mb-7'>
                      <h1 className='font-bold text-lg text-[#292930] mb-10'>01 Review for this product</h1>
                      <div className='flex'>
                        <div>
                          <img className='w-28' src="./src/assets/shop/bimg5.png" alt="" />
                        </div>
                        <div className='ml-5'>
                          <div className='flex justify-between '>
                            <h1 className='font-semibold text-lg text-[#292930] hover:text-[#3577F0] duration-500 mb-2'>Eleanor Pena</h1>
                            <span className='text-[#FFA800]'>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill text-gray-300"></i>
                            </span>
                          </div>
                          <p className='text-gray-500 leading-7'>“We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ”</p>
                        </div>
                      </div>
                    </div>
                    <div className='mb-7'>
                      <div className='flex'>
                        <div>
                          <img className='w-28' src="./src/assets/shop/bimg5.png" alt="" />
                        </div>
                        <div className='ml-5'>
                          <div className='flex justify-between '>
                            <h1 className='font-semibold text-lg text-[#292930] hover:text-[#3577F0] duration-500 mb-2'>Courtney Henry</h1>
                            <span className='text-[#FFA800]'>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill    "></i>
                            </span>
                          </div>
                          <p className='text-gray-500 leading-7'>“We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ”</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex'>
                        <div>
                          <img className='w-28' src="./src/assets/shop/bimg6.png" alt="" />
                        </div>
                        <div className='ml-5'>
                          <div className='flex justify-between '>
                            <h1 className='font-semibold text-lg text-[#292930] hover:text-[#3577F0] duration-500 mb-2'>Devon Lane</h1>
                            <span className='text-[#FFA800]'>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <p className='text-gray-500 leading-7'>“We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ”</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='text-gray-500 '>
                    <h1 className='font-bold text-lg text-[#292930] mb-5'>Add a Review</h1>
                    <p className='mb-7'>Your email address will not be published. Required fields are marked *</p>
                    <div className='flex mb-5'>
                      <h1 className='mb-5 mr-3'>Your Rating <span className='text-[#E76458]'>*</span></h1>
                      <span className='text-gray-500 text-lg'>
                        <i class="ri-star-line hover:text-[#3577F0] duration-300 mr-[2px]"></i>
                        <i class="ri-star-line hover:text-[#3577F0] duration-300 mr-[2px]"></i>
                        <i class="ri-star-line hover:text-[#3577F0] duration-300 mr-[2px]"></i>
                        <i class="ri-star-line hover:text-[#3577F0] duration-300 mr-[2px]"></i>
                        <i class="ri-star-line hover:text-[#3577F0] duration-300 mr-[2px]"></i>
                      </span>
                    </div>
                    <div className='relative text-gray-500 mb-5'>
                      <label className='absolute -top-3 left-7 bg-[#F9F3F0] px-2 font-semibold text-sm'>Other Notes (optional)</label>
                      <textarea className='w-full resize-none border bg-[#F9F3F0] border-gray-300 rounded-md font-normal focus:outline-blue-400 placeholder:text-sm placeholder:text-gray-500
                                                px-9 py-5' cols="" rows="5" placeholder='Your Comment'></textarea>
                    </div>
                    <div className='grid grid-cols-2 gap-10'>
                      <div className='relative text-gray-500 '>
                        <label className='absolute -top-3 left-7 bg-[#F9F3F0] px-2 font-semibold text-sm'>Name<span className='text-[#E76458] ml-1'>*</span></label>
                        <input type="text" className='w-full bg-[#F9F3F0] border border-gray-300  px-14 py-3 rounded-md font-normal focus:outline-blue-400' />
                      </div>
                      <div className='relative text-gray-500'>
                        <label className='absolute -top-3 left-7 bg-[#F9F3F0] px-2 font-semibold text-sm'>E-mail<span className='text-[#E76458] ml-1'>*</span></label>
                        <input type="email" className='w-full bg-[#F9F3F0] border border-gray-300  px-14 py-3 rounded-md font-normal focus:outline-blue-400' />
                      </div>
                    </div>
                    <div className='mt-12'>
                      <a href="" className=" relative z-10 px-12 py-5  rounded-md font-semibold text-white bg-[#3577F0] 
                                        before:absolute 
                                        before:content-[''] 
                                        before:w-[220px] 
                                        before:rounded-md 
                                        before:left-0 
                                        before:right-0 
                                        before:top-0 
                                        before:bottom-0 
                                        before:bg-[#3577F0]  
                                        before:-z-10 
                                        before:hover:scale-110  
                                        before:duration-300
                                        ">Submit Comment</a>
                    </div>
                  </div>

                </div>
              </div>
            }
          </div>
        </div>
      </section>




      <Components />
      <div className=' container mx-auto'>

        <Footer />
      </div>
    </>
  );
};

export default ProductV3