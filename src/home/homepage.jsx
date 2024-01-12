import { TopBar } from '../home'
import Poster1 from '../assets/home/Poster1.png';
import Poster2 from '../assets/home/Poster2.png';
import giftbox from '../assets/home/giftbox.png';
import keyimg from '../assets/home/keyimg.png';
import returnimg1 from '../assets/home/returnimg1.png';
import returnimg2 from '../assets/home/returnimg2.png';
import helpimg from '../assets/home/helpimg.png';
import Footer from '../Components/Footer';
import Components from '../Components/components';
import './homepage.css'
import Dropdown from '../Components/dropdown';
import { Link } from 'react-router-dom';
import DoubleSlide from '../Components/doubleslide';
import FeedBack from '../Components/Feedback';
import HomeSlideProduct from '../Components/HomeSlideProduct';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopBar1 } from '../home';





const HomePage = () => {

    let slider;

    const Settings = {
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 3,
        Infinite: true,
        arrows: false,
    };

    const handlePrev = () => {
        slider.slickprev();
    };

    const handleNext = () => {
        slider.slickNext();
    };


    return (
        <>
            <div className='HOME-DROPDOWN py-2'>
                <TopBar1 />
            </div>
            <div className='sticky top-2 z-30'>
                <Dropdown />
            </div>
            <section className='HERO-SECTION  -top-36 h-[850px]  relative container mx-auto overflow-hidden '>
                <div className='BACKGROUND-IMG'>
                    <img className='absolute right-96 -bottom-20' src="./src/assets/Home/asset 8.png" alt="" />
                    <img className='absolute right-10 -bottom-12' src="./src/assets/Home/asset 9.png" alt="" />
                    <div>
                        <div className='absolute right-[400px] bottom-40'>
                            <img className=' w-[450px]' src="./src/assets/Home/headphone.png" alt="" />
                            <div className='absolute top-[15%] left-[30%] bg-white rounded-full'>
                                <div className='h-28 w-28 flex justify-center items-center'>
                                    <div>
                                        <h1 className='text-gray-500 text-lg text-center'>From</h1>
                                        <h1 className='text-[#3577F0] text-xl  font-semibold'>$49.00</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className='w-48 absolute right-[9%] bottom-32' src="./src/assets/Home/watch.png" alt="" />
                        </div>
                    </div>
                    <div className='absolute left-[45%] bottom-10'>
                        <ul>
                            <li className='w-[34px] h-[4px] bg-[#FE98AC] rounded-lg inline-block mx-1 cursor-pointer' ></li>
                            <li className='w-[25px] h-[4px] bg-white rounded-lg inline-block mx-1 cursor-pointer' ></li>
                            <li className='w-[25px] h-[4px] bg-white rounded-lg inline-block mx-1 cursor-pointer' ></li>
                            <li className='w-[25px] h-[4px] bg-white rounded-lg inline-block mx-1 cursor-pointer' ></li>
                        </ul>
                    </div>
                </div>


                <div className="container mx-auto">
                    <div className='BACKGROUND-DETAIL absolute top-96'>
                        <div className='flex mb-4'>
                            <i className="ri-fire-fill h-6 w-6 text-base bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                            <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'> Hot Deal In This Week</h1>
                        </div>
                        <p className='font-bold text-6xl text-[#292930] tracking-wide leading-[75px] mb-10'>Roco Wireless<br /> Headphone</p>

                        <div className='flex items-center'>
                            <div className="BUTTON">
                                <a href="#" className="px-9 py-5 z-10 border border-black bg-[#ffffff] font-bold rounded-md relative 
                                before:absolute
                                before:contetn-['']
                                before:px-10
                                before:py-5
                                 before:bg-white
                                before:left-0
                                before:top-0
                                before:right-0
                                before:bottom-0
                                before:rounded-md
                                before:-z-10
                                before:hover:scale-110
                                before:duration-300">
                                    <i class="ri-shopping-cart-line mr-2"></i> Shop Now</a>
                            </div>

                            <div className='flex ml-8'>
                                <div className="IMAGES-CIRCLE">
                                    <ul className="flex">
                                        <li className=" border-2 rounded-full "><img src="./src/assets/Home/asset 2.png" alt="" /></li>
                                        <li className="-ml-5 border-2 rounded-full border-white"><img src="./src/assets/Home/asset 3.png" alt="" /></li>
                                        <li className="-ml-5 border-2 rounded-full border-white"><img src="./src/assets/Home/asset 4.png" alt="" /></li>
                                        <li className="-ml-5 border-2 rounded-full border-white" ><img src="./src/assets/Home/asset 5.png" alt="" /></li>
                                    </ul>
                                </div>
                                <div className='STARS ml-5'>
                                    <span className='text-[#FFA800]'>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-line"></i>
                                    </span>
                                    <div>
                                        <h1 className='text-xs font-bold'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <section className='CATEGORIES container mx-auto '>
                <div className=' mb-[200px]'>
                    <div className='flex mb-3'>
                        <i className="ri-price-tag-3-line h-6 w-6 text-base border bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                        <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'>Categories</h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h1 className="font-bold text-4xl text-[#292930] mb-[30px]">Browse by Category</h1>
                        <div className='text-gray-400'>
                            <div className='hover:scale-110 duration-300 inline-block'>
                                <button onClick={handlePrev} href="" className=''><i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i></button>
                            </div>
                            <div className='hover:scale-110 duration-300 inline-block '>
                                <button onClick={handleNext} href="" className=''><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10  '>
                        <Slider ref={(c) => (slider = c)} {...Settings}>
                            <div href='#top-scroll' className="  border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500 cursor-pointer ">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 15.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Phones</p>
                            </div>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 16.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Computers</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 17.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Accessories</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px]   text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 18.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Laptops</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 19.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Monitors</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 10.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Networking</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 11.png" alt="" />
                                </div>
                                <p className='text-gray-800'>PC Gaming</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 12.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Smartwatches</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 13.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Headphones</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 14.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Camera & Photo</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 11.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Video Games</p>
                            </a>
                            <a href='#top-scroll' className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500 cursor-pointer">
                                <div className="flex justify-center">
                                    <img className="mb-3" src="./src/assets/Home/asset 12.png" alt="" />
                                </div>
                                <p className='text-gray-800'>Sports</p>
                            </a>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className='HEADPHONES-PHOTO container mx-auto  mb-[100px]  mt-28 '>
                <div className='relative  w-[100%] h-[450px] rounded-md bg-[#F6F7FB] '>
                    <img className='absolute right-20 -top-28 w-96' src="./src/assets/home/asset 20.png" alt="" />
                    <div className='music-signal'>
                        <div className='item-circle circle-1'></div>
                        <div className='item-circle circle-2'></div>
                        <div className='item-circle circle-3'></div>
                        <div className='item-circle circle-4'></div>
                        <div className='item-circle circle-5'></div>
                    </div>

                    <div className='absolute top-16 left-16'>
                        <div className='flex mb-3'>
                            <i className="ri-headphone-line h-6 w-6 text-base border bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                            <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'>Don’t Miss!!</h1>
                        </div>
                        <p className='font-bold text-4xl text-[#292930] leading-tight tracking-wide'>Enhance Your<br /> Music Experience</p>
                        <div className='flex my-[30px]'>
                            <div className='bg-white text-[#292930] rounded-full py-3 px-7 mr-4 '>
                                <p className='flex justify-center text-2xl'>0</p>
                                <p className='text-sm text-gray-500 font-medium '>Day</p>
                            </div>
                            <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                <p className='flex justify-center text-2xl'>00</p>
                                <p className='text-sm text-gray-500 font-medium '>Hrs</p>
                            </div>
                            <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                <p className='flex justify-center text-2xl'>00</p>
                                <p className='text-sm text-gray-500 font-medium '>Min</p>
                            </div>
                            <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                <p className='flex justify-center text-2xl'>00</p>
                                <p className='text-sm text-gray-500 font-medium '>Sec</p>
                            </div>
                        </div>

                        <div className='relative group z-10 '>
                            <a href='#' className='absolute px-9 py-4 text-white font-bold rounded-md bg-[#3577F0]  
                                before:content-[""]
                                before:w-[162px]
                                before:[50px]
                                before:bg-[#3577F0]  
                                before:absolute
                                before:group-hover:scale-110
                                before:top-0
                                before:left-1
                                before:rounded-md
                                before:duration-300
                                before:right-0
                                before:bottom-0
                                before:-z-10'
                            >Check it Out!</a>
                        </div>

                    </div>
                </div>
            </section>
            <section className='JSONDATA Double-slide'>
                <DoubleSlide />
            </section>

            <section className='FEED-BACK'>
                <FeedBack />
            </section>

            <section className='JSONDATA Single slide my-[100px]'>
                <HomeSlideProduct />
            </section>







            {/* <Trade section start ----------------------------------> */}

            <section className='TRADE-STORE  container mx-auto'>
                <div>
                    <div className='mt-14'>
                        <div className='mb-12 text-center'>
                            <p className="text-[#8C71DB] font-medium mb-2"><i class="ri-shining-2-fill bg-[#8C71DB] p-1 text-white rounded-full text-center mr-3"></i>Most Sold</p>
                            <h1 className="font-bold text-4xl text-[#292930] ">Most Sold in eTrade Store</h1>
                        </div>
                    </div>

                    <div className='flex justify-center'>

                        <div className='flex justify-between w-[100%]  h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <Link to="/Productv1">  <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 32.png" alt="" /></Link>
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <Link to="/ProductV1"><a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Media Remote</a></Link>
                                    <p className='text-sm font-bold'>$29.99 <span className='text-gray-300 ml-2'><del>$49.99</del></span></p>
                                </div>
                            </div>
                            <div >
                                <Link to="/Cart"><a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                                <Link to="/Wishlist"><a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                            </div>
                        </div>

                        <div className='flex justify-between w-[100%] ml-5 h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <Link to="/ProductV1"> <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 33.png" alt="" /></Link>
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>50+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <Link to="/ProductV1"><a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>HD Camera</a></Link>
                                    <p className='text-sm font-bold'>$49.99 </p>
                                </div>
                            </div>
                            <div >
                                <Link to="/Cart"> <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                                <Link to="/Wishlist"> <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                            </div>
                        </div>


                    </div>

                    <div className='flex justify-center mt-10'>

                        <div className='flex justify-between  w-[100%] h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <Link to="/ProductV1"> <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 34.png" alt="" /></Link>
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>120+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <Link to="/ProductV1"> <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Gaming Controller</a></Link>
                                    <p className='text-sm font-bold'>$29.99 <span className='text-gray-300 ml-2'></span></p>
                                </div>
                            </div>
                            <div >
                                <Link to="/Cart"><a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                                <Link to="/Wishlist"> <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                            </div>
                        </div>

                        <div className='flex justify-between w-[100%] ml-5 h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <Link to="/ProductV1"> <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 35.png" alt="" /></Link>
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>30+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <Link to="/ProductV1"> <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Wall Mount</a></Link>
                                    <p className='text-sm font-bold'>$49.99 </p>
                                </div>
                            </div>
                            <div >
                                <Link to="/Cart"><a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                                <Link to="/Wishlist"> <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                            </div>
                        </div>


                    </div>

                    <div className='flex justify-center mt-10'>

                        <div className='flex justify-between  w-[100%] h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <Link to="/Productv1"> <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 36.png" alt="" /></Link>
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>700+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <Link TO="/productV1"><a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Lenevo Laptop</a></Link>
                                    <p className='text-sm font-bold'>$999.99 <span className='text-gray-300 ml-2'></span></p>
                                </div>
                            </div>
                            <div >
                                <Link to="/Cart"> <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                                <Link to="/Wishlist"> <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                            </div>
                        </div>

                        <div className='flex justify-between w-[100%] ml-5 h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <Link to="/ProductV1"> <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 37.png" alt="" /></Link>
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>300+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <Link to="/ProductV1"> <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Juice Grinder Machine</a></Link>
                                    <p className='text-sm font-bold'>$99.99 </p>
                                </div>
                            </div>
                            <div >
                                <Link to="/Cart"><a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                                <Link to="/Wishlist"><a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                            </div>
                        </div>


                    </div>

                    <div className='flex justify-center mt-10'>

                        <div className='flex justify-between  w-[100%] h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <Link to="/ProductV1"><img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 38.png" alt="" /></Link>
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <Link to="/ProductV1"><a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Wireless Headphone</a></Link>
                                    <p className='text-s font-bold'>$59.99 <span className='text-gray-300 ml-2'></span></p>
                                </div>
                            </div>
                            <div >
                                <Link to="/Cart"> <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                                <Link to="/Wishlist"><a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                            </div>
                        </div>

                        <div className='flex justify-between w-[100%] ml-5 h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <Link to="/ProductV1"> <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 39.png" alt="" /></Link>
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <Link to="/ProductV1"> <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Asus Zenbook Laptop</a></Link>
                                    <p className='text-sm font-bold'>$49.99 </p>
                                </div>
                            </div>
                            <div >
                                <Link to="/Cart"> <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                                <Link to="/Wishlist"> <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a></Link>
                            </div>
                        </div>


                    </div>


                </div>
            </section>

            {/* <Tread section end ------------------------------> */}

            <div className="mt-10 container mx-auto">
                <div>
                    <h1 className=" text-center text-3xl font-semibold">Why People Choose Us</h1>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="border border-gray-200 w-60 h-52 mr-4 rounded-md ">
                        <img className="pl-20 mt-12  w-36" src={giftbox} alt=""></img>
                        <p className="text-center mt-2 font-semibold text-sm">Fast $ secure<br></br>Delivery</p>
                    </div>
                    <div className="border border-gray-200 w-60 h-52 mr-4 rounded-md">
                        <img className="pl-20 mt-12 w-36" src={keyimg} alt=""></img>
                        <p className="text-center mt-2 font-semibold text-sm">100% Guarantee<br></br>On Product</p>
                    </div>
                    <div className="border border-gray-200 w-60 h-52 mr-4 rounded-md ">
                        <img className="pl-20 mt-12 w-36" src={returnimg1} alt=""></img>
                        <p className="text-center mt-2 font-semibold text-sm">24 Hour Return<br></br>Policy</p>
                    </div>
                    <div className="border border-gray-200 w-60 h-52 mr-4 rounded-md ">
                        <img className="pl-20 mt-12 w-36" src={returnimg2} alt=""></img>
                        <p className="text-center mt-2 font-semibold text-sm">24 Hour return<br></br>Policy</p>
                    </div>
                    <div className="border border-gray-200 w-60 h-52 mr-4 rounded-md">
                        <img className="pl-20 mt-12 w-36" src={helpimg} alt=""></img>
                        <p className="text-center mt-2 font-semibold text-sm">Next Leval Pro<br></br>Quality</p>
                    </div>
                </div>
            </div>

            <div className=' container mx-auto'>
                <div className="blog-section  flex justify-between  mb-10 mt-10 mr-4">
                    <div className="left-part w-[700px] overflow-hidden rounded-md group mx-4 relative">
                        <a href="#"><img src={Poster1} className="group-hover:scale-110 duration-500" alt="" /> </a>
                        <div className="content absolute top-11 right-24">
                            <h1 className="text-white text-4xl font-sans font-bold mb-s">Rich sound,<br></br>for less.</h1>
                            <a href="#" className="text-gray-600 font-medium group-hover:text-white duration-500">Collection</a>
                        </div>
                    </div>
                    <div className="left-part w-[700px] overflow-hidden group rounded-md mx-4 relative">
                        <a href="#"><img src={Poster2} className="group-hover:scale-110 duration-500" alt="" /> </a>
                        <div className="content absolute top-11  left-20    ">
                            <a href="#" className="text-gray-600 font-medium group-hover:text-white duration-500">50% offer in winter</a>
                            <h1 className="text-white text-4xl font-sans font-bold mb-s">Get VR<br></br>Reality Glass</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Components />
            </div>

            <div className=' container mx-auto'>
                <Footer />
            </div>
        </>
    )
}


export default HomePage

