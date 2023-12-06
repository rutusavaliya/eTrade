import Errorimg from "../assets/page/Errorimg.png"
import Footer from '../Components/Footer'
import { English, USD } from "../components/navbar"
import { Dropdown1, NavBottom } from "../components/navbar1"

function Error() {
    return (
        <>
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

                <div>
                    <div>
                        <Dropdown1 />

                    </div>
                </div>
                <div>
                    <NavBottom />
                </div>
                <div className='flex justify-center mt-4'>
                    <div className='mr-20 mt-24 '>
                        <div>
                            <h1 className='text-3xl font-bold mt-16'>Page not found</h1>
                            <p className='text-gray-500 mt-7 text-xs'>It seems like we dont find what you searched. The page you<br></br> were looking for doesn't exist, isn't available loading incorrectly.</p>
                            <div className='mt-8'>
                    <a href="#" className='relative z-10 font-bold bg-[#ff497c] text-white py-3 px-6 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-20
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
                                               '>Back to Home</a>
                  </div>
                        </div>
                    </div>

                    <div className='mt-24 ml-20'>
                        <img className='w-[470px]' src={Errorimg} alt=""></img>
                    </div>
                </div>
                <div className=" container mx-auto">
                    <Footer />
                </div>
            </>
            )
}

            export default Error