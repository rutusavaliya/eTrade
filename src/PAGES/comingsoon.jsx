import * as React from "react";
import comingimg from '../assets/page/comingimg.jpg'
import logo from '../assets/page/logos.png'


function Comingsoon() {
    return (
        <>
            <div className="Comingsoon-section flex">
                <div className="img section">
                    <img className="h-[585px] w-[400px] object-cover " src={comingimg} alt=""></img>
                </div>

                <div className="mx-auto text-center mt-36">
                    <a href="">
                        <img className="h-10 ml-32" src={logo} alt="" />
                    </a>
                    <h1 className="font-medium text-3xl mt-6">
                        Our new website is on the way
                    </h1>
                    <p className="text-sm mt-4 leading-6">
                        We're coming soon! We're working hard to give you<br></br>
                        the best experince.
                    </p>
                    <div className="flex mt-6 ml-10 text-white font-bold text-lg ">
                        <div className=" rounded-full w-20 h-20 p-3 mr-5 bg-blue-500  shadow-md shadow-blue-500">
                            <h1>0</h1>
                            <h1 className="text-sm">Day</h1>
                        </div>
                        <div  className=" rounded-full w-20 h-20 p-3 mr-5 bg-blue-500 shadow-md shadow-blue-500">
                            <h1>00</h1>
                            <h1 className="text-sm">Hrs</h1>
                        </div>
                        <div  className=" rounded-full w-20 h-20 p-3 mr-5 bg-blue-500 shadow-md shadow-blue-500">
                            <h1>00</h1>
                            <h1 className="text-sm">Min</h1>
                        </div>
                        <div  className=" rounded-full w-20 h-20 p-3 mr-5 bg-blue-500 shadow-md shadow-blue-500">
                            <h1>00</h1>
                            <h1 className="text-sm">Sec </h1>
                        </div>
                    </div>
                </div>
            </div>






        </>
    );
}

export default Comingsoon