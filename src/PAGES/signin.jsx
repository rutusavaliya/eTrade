import * as React from "react";
import singimg from '../assets/page/singimg.jpg'
import logo from '../assets/page/logos.png'
import { Link } from "react-router-dom";

function Signin() {
    return(
        <>
            <div className="flex h-screen">
                <div className="h-full w-[700px] relative">
                    <span className="absolute ps-10 pt-8">
                        <a href="">
                            <img className="h-10" src={logo} alt="" />
                        </a>
                        <h1 className="font-medium mt-16 text-3xl">
                            We Offer the Best <br/>Product
                        </h1>
                    </span>
                    <img className="w-[450px] h-[900px] overflow-hidden fixed -z-10 object-cover" src={singimg} alt=""></img>
                </div>
                <div className="Form-section w-full">
                    <div className="flex justify-end mr-24 mt-5">
                        <p className="mr-7 mt-5 text-xs"> Not member?</p>
                        <div className='mt-4'>
                    <a href="#" className='relative z-10 font-bold text-sm bg-[#ff497c] text-white py-3 px-5 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-12
                                                before:py-6
                                                before:bg-[#ff497c]
                                                before:left-0
                                                before:top-0
                                                before:right-0 
                                                before:bottom-0
                                                before:-z-10
                                                before:hover:scale-105
                                                before:duration-300
                                                before:rounded-md
                                               '>Sign in Now</a>
                  </div>
                    </div>
                    <div className=" mt-20 ml-60 ">
                        <div className="flex flex-col justify-center ">
                            <h1 className=" font-bold text-xl ">Sign in to e Trade. </h1>
                            <form action="">
                                <figcaption className="text-gray-500 pt-4 text-xs">Enter your details below</figcaption>
                            </form>
                            <from action="">
                               

                                <div className="relative mt-5">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                        Email
                                    </label>
                                    <input
                                        className="w-72 h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                        type="text"
                                        placeholder="annieexample@gmail.com"
                                    ></input>
                                </div>

                                <div className="relative mt-5">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                        Password
                                    </label>
                                    <input
                                        className="w-72 h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                        type="text"
                                        placeholder="......."
                                    ></input>
                                </div>
                                <div className="flex mt-8">
                                <div className=''>
                    <a href="#" className='relative z-10 font-bold bg-[#3577F0] text-white py-3 px-6 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-12
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
                                               '>Sign in</a>
                  </div>
                               <Link to="/Forgot"> <a className="pl-20 mt-2 text-blue-600 text-xs" href="#">Forget Password?</a></Link>
                               </div>
                            </from>
                        </div>



                    </div>
</div>
                </div>
        </>
    )
}

export default Signin