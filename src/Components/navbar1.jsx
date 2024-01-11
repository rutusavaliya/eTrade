import Logos from "../assets/page/logos.png"
import navimg from '../assets/components/navimg.png'
import '../components/navbar1.css'
import { Link, NavLink } from "react-router-dom"



export function Dropdown1() {

    const active = 'text-[#ff497c]'
    const normal = 'text-black'
    return (

        <div className=" container mx-auto w-full">


            <div className='flex justify-between items-center bg-white px-4 h-16'>
                <div className="w-28  ">
                    <img src={Logos} alt="" />
                </div>


                <div className='grid grid-cols-6 gap-x-9 text-sm font-semibold'>
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
                                <li><NavLink to="/ShopWithSidebar" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">ShopWithSidebar</a></NavLink></li>
                                <li><NavLink to="/ShopnoSidebar" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">ShopnoSidebar</a></NavLink></li>
                                <li><NavLink to="/ProductV1" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">ProductV1</a></NavLink></li>
                                <li><NavLink to="/ProductV2" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">ProductV2</a></NavLink></li>
                                <li><NavLink to="/ProductV3" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">ProductV3</a></NavLink></li>
                                <li><NavLink to="/ProductV4" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">ProductV4</a></NavLink></li>
                                <li><NavLink to="/ProductV5" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">ProductV5</a></NavLink></li>
                                <li><NavLink to="/ProductV6" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">ProductV6</a></NavLink></li>
                                <li><NavLink to="/ProductV7" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">ProductV7</a></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className='home-dropdown text-gray-800 '>
                        <button className='navbar-button font-semibold h-24'>Page</button>
                        <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                        <div className='home-content'>
                            <ul className='list bg-white rounded-md'>
                                <li><NavLink to="/Wishlist" className={({ isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Wishlist</a></NavLink></li>
                                <li><NavLink to="/Cart" className={({ isActive }) => isActive ? active : normal
                                }><a className='hover:text-[#ff497c]' href="">Cart</a></NavLink></li>
                                <li><NavLink to="/Checkout" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Checkout</a></NavLink></li>
                                <li><NavLink to="/Account" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Account</a></NavLink></li>
                                <li><NavLink to="/SignUP" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Sign UP</a></NavLink></li>
                                <li><NavLink to="/Signin" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Sign in</a> </NavLink></li>
                                <li><NavLink to="/Forgot" className={({isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Forgot Password</a></NavLink></li>
                                <li><NavLink to="/Reset" className={({isActive }) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Reset Password</a></NavLink></li>
                                <li><NavLink to="/policy" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Privacy policy</a></NavLink></li>
                                <li><NavLink to="/Comingsoon" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Coming soon</a></NavLink></li>
                                <li><NavLink to="/Error" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">404 Error</a></NavLink></li>
                                <li><NavLink to="/Typography" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Typography</a></NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800'>
                       <NavLink to="/About"><button className='navbar-button font-semibold h-24'>About</button></NavLink>
                    </div>

                    <div className='home-dropdown text-gray-800 '>
                        <button className='navbar-button font-semibold h-24'>Blog</button>
                        <i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                        <div className='home-content'>
                            <ul className='list bg-white rounded-md'>
                                <li><NavLink to="/Bloglist" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Blog List</a></NavLink></li>
                                <li><NavLink to="/Bloggrid" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Blog Grid</a></NavLink></li>
                                <li><NavLink to="/Standrdpost" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Standard Post</a></NavLink></li>
                                <li><NavLink to="/Gallerypost" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Gallery Post</a></NavLink></li>
                                <li><NavLink to="/Videopost" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Video Post</a></NavLink></li>
                                <li><NavLink to="/Audiopost" className={({isActive}) => isActive ? active : normal}><a className='hover:text-[#ff497c]' href="">Audio Post</a></NavLink></li>
                                <li><NavLink to="/Quotepost" className={({isActive}) => isActive ? active  : normal}><a className='hover:text-[#ff497c]' href="">Quote Post</a></NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className='home-dropdown text-gray-800  '>
                       <NavLink to="/Contact"> <button className='navbar-button font-semibold h-24'>Contact</button></NavLink>
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
                        <h1 className='absolute h-5 w-5 rounded-full -top-1 -right-4 ring-2 ring-white bg-blue-600 text-xs p-1 text-white pt-0.5'>30</h1>
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


