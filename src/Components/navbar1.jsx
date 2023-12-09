import Logos from "../assets/page/logos.png"
import navimg from '../assets/components/navimg.png'
import '../components/navbar1.css'
import { Link } from "react-router-dom"



export function Dropdown1() {
    return (

        <div className=" container mx-auto w-full">


            <div className='flex justify-between items-center bg-white px-4 h-16'>
                <div className="w-28  ">
                    <img src={Logos} alt="" />
                </div>


                <div className='grid grid-cols-7 gap-x-9 text-xs font-semibold'>
                    <div className='home-dropdown'>
                        <button className='font-semibold underline decoration-[2px] underline-offset-4 h-24 '><span className='text-gray-800 hover:text-black'>Home</span><i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
                        <div className='home-content'>
                            <ul className='list bg-white rounded-md'>
                                <li><a className='text-[#ff497c]' href="">Home-Electronics</a></li>
                                <li><a className='hover:text-[#ff497c]' href="">Home-NFT</a></li>
                                <li><a className='hover:text-[#ff497c]' href="">Home-Fashion</a></li>
                                <li><a className='hover:text-[#ff497c]' href="">Home-Jewellery</a></li>
                                <li><a className='hover:text-[#ff497c]' href="">Home-Furniture</a></li>
                                <li><a className='hover:text-[#ff497c]' href="">Home-Multipurpose</a></li>
                                <li><a className='hover:text-[#ff497c]' href="">RTL Version</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800 '>
                        <button className='navbar-button font-semibold h-24'>Shop</button>
                        <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                        <div className='home-content'>
                            <ul className='list bg-white rounded-md'>
                                <li><Link to="/" className='hover:text-[#ff497c]' href="">Shop With Sidebar</Link></li>
                                <li><a className='hover:text-[#ff497c]' href="">Shop No Sidebar</a></li>
                                <li><Link to="/ProductV1" className='hover:text-[#ff497c]' href="">Product Variation 1</Link></li>
                                <li><Link to="/ProductV2" className='hover:text-[#ff497c]' href="">Product Variation 2</Link></li>
                                <li><Link to="/ProductV3" className='hover:text-[#ff497c]' href="">Product Variation 3</Link></li>
                                <li><Link to="/ProductV4" className='hover:text-[#ff497c]' href="">Product Variation 4</Link></li>
                                <li><Link to="/ProductV5" className='hover:text-[#ff497c]' href="">Product Variation 5</Link></li>
                                <li><Link to="/ProductV6" className='hover:text-[#ff497c]' href="">Product Variation 6</Link></li>
                                <li><Link to="/ProductV7" className='hover:text-[#ff497c]' href="">Product Variation 7</Link></li>
                                <li><Link to="/ProductV8>" className='hover:text-[#ff497c]' href="">Product Variation 8</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='home-dropdown text-gray-800 '>
                        <button className='navbar-button font-semibold h-24'>Page</button>
                        <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                        <div className='home-content'>
                            <ul className='list bg-white rounded-md'>
                                <li><Link to="/Wishlist" className='hover:text-[#ff497c]' href="">Wishlist</Link></li>
                                <li><Link to="/Cart" className='hover:text-[#ff497c]' href="">Cart</Link></li>
                                <li><Link to="/Checkout" className='hover:text-[#ff497c]' href="">Checkout</Link></li>
                                <li><Link to="/Account" className='hover:text-[#ff497c]' href="">Account</Link></li>
                                <li><Link to="/SignUP" className='hover:text-[#ff497c]' href="">Sign UP</Link></li>
                                <li><Link to="/Signin" className='hover:text-[#ff497c]' href="">Sign in </Link></li>
                                <li><Link to="/Forgot" className='hover:text-[#ff497c]' href="">Forgot Password</Link></li>
                                <li><Link to="/Reset" className='hover:text-[#ff497c]' href="">Reset Password</Link></li>
                                <li><Link to="/policy" className='hover:text-[#ff497c]' href="">Privacy policy</Link></li>
                                <li><Link to="/Comingsoon" className='hover:text-[#ff497c]' href="">Coming soon</Link></li>
                                <li><Link to="/Error" className='hover:text-[#ff497c]' href="">404 Error</Link></li>
                                <li><Link to="/Typography" className='hover:text-[#ff497c]' href="">Typography</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800'>
                        <button className='navbar-button font-semibold h-24'>About</button>
                    </div>

                    <div className='home-dropdown text-gray-800 '>
                        <button className='navbar-button font-semibold h-24'>Blog</button>
                        <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                        <div className='home-content'>
                            <ul className='list bg-white rounded-md'>
                                <li><Link to="/Bloglist" className='hover:text-[#ff497c]' href="">Blog List</Link></li>
                                <li><Link to="/Bloggrid" className='hover:text-[#ff497c]' href="">Blog Grid</Link></li>
                                <li><Link to="/Standrdpost" className='hover:text-[#ff497c]' href="">Standard Post</Link></li>
                                <li><Link to="/Gallerypost" className='hover:text-[#ff497c]' href="">Gallery Post</Link></li>
                                <li><Link to="/Videopost" className='hover:text-[#ff497c]' href="">Video Post</Link></li>
                                <li><Link to="/Audiopost" className='hover:text-[#ff497c]' href="">Audio Post</Link></li>
                                <li><Link to="/Quotepost" className='hover:text-[#ff497c]' href="">Quote Post</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800  '>
                        <button className='navbar-button font-semibold h-24'>Contact</button>
                    </div>

                </div>



                <div class="border text-gray-500 rounded-md mr-10  ">
                    <i class="ri-search-line mx-2 text-lg"></i>
                    <input className=' w-40 py-2  placeholder:text-xs focus:outline-none border-none' type="search" placeholder='What are you looking for?' />
                </div>



                <div className='text-2xl text-gray-600 flex justify-between w-[120px] h-10 mr-10  '>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100 '>
                        <li className='nav-icon h-5 w-5 flex justify-center items-center rounded-full'><i class="ri-heart-line "></i></li>
                    </ul>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100  '>
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-shopping-cart-line "></i></li>
                    </ul>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100 '>
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-user-3-line "></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const NavBottom = () => {
    return (
        <>
            <div className='offer relative flex justify-center items-center'>
                <img className='w-full h-12 object-cover' src={navimg} alt="" />
                <div className='absolute text-white'>
                    <i class="ri-arrow-left-line mr-10"></i>
                    <a className=' font-bold '>STUDENT NOW GET 10% OFF : <span className='underline hover:text-[#FF497C] duration-700'>GET OFFER</span></a>
                    <i class="ri-arrow-right-line ml-10"></i>
                </div>
            </div>
        </>
    )
}


