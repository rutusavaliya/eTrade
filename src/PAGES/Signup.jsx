import * as React from "react";
import signimg from '../assets/page/signimg.jpg'
import logo from '../assets/page/logos.png'
import { Link } from "react-router-dom";


function SignUP() {
    return (
        <>

            <div className="flex h-screen">
                <div className="h-full w-[700px] relative">
                
                    <span className="absolute ps-10 pt-10">
                      <a href="">
                      <Link to="/"><img className="h-10" src={logo} alt="" /></Link>
                        </a>

                        <h1 className="font-bold mt-12 text-2xl">
                            We offer the Best<br></br> Product
                        </h1>
                    </span>
                    <img className="w-[400px] h-[700px] overflow-hidden fixed -z-10 object-cover" src={signimg} alt=""></img>
                </div>
                <div className="Form-section w-full">
                    <div className="flex justify-end mr-24 mt-5">
                        <p className="mr-7 mt-5 text-sm">Already a member?</p>
                        <div className='mt-5'>
                    <Link to="/Signin" href="#" className='relative z-10 font-bold bg-[#ff497c] text-white py-3 px-6 rounded-md 
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
                                               '>Sign in</Link>
                  </div>
                    </div>

                    <div className=" mt-16 ml-60">
                        <div className="flex flex-col justify-center">
                            <h1 className=" font-bold text-xl ">I'm New Here </h1>
                            <form action="" className="">
                                <figcaption className="text-gray-500 pt-4 text-xs">Enter your details below</figcaption>

                                <div className="relative mt-8">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600  text-sm">
                                        User Name
                                    </label>
                                    <input
                                        class="w-72 h-12 border mt-2 focus:outline focus:outline-[1px]  focus:outline-[#3577f0] rounded-lg  px-6 text-gray-500 text-sm "
                                        type="text"
                                        placeholder="anniemario"
                                    ></input>
                                </div>

                                <div className="relative mt-5">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                        Email
                                    </label>
                                    <input
                                        className="w-72 h-12 border focus:outline focus:outline-[1px]  focus:outline-[#3577f0] mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                        type="text"
                                        placeholder="annieexample@gmail.com"
                                    ></input>
                                </div>

                                <div className="relative mt-5">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                        Password
                                    </label>
                                    <input
                                        className="w-72 h-12 border border-[#cbd3d9] mt-2   focus:outline-[#3577f0] focus:outline focus:outline-[1px] rounded-lg px-6 text-gray-500 text-sm"
                                        type="text"
                                        placeholder="......."
                                    ></input>
                                </div>
                            

                            </form>
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
                                               '>Crete Account</a>
                  </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    );
}

export default SignUP