import React from 'react'
import Footer from '../Components/Footer'
import { English, USD } from "../components/navbar"
import { Dropdown1, NavBottom } from "../components/navbar1"

function Checkout() {
  return (
    <>
      <div className=' container mx-auto'>
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
      </div>
      <div>
        <div>
          <Dropdown1 />
        </div>
      </div>
      <div>
        <NavBottom />
      </div>
      <div className=' container mx-auto'>
        <div className='flex justify-center mt-10 '>
          <div className='left-section  '>
            <h1 className='text-md'>
              Billing detalis
            </h1>
            <div className='flex '>
              <div className="relative mt-8">
                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600  text-sm">
                  first name <span className='text-red-500'>*</span>
                </label>
                <input
                  class="w-80 h-12 border  focus:outline-none mt-2 rounded-lg  px-6 text-gray-500 text-sm "
                  type="text"
                  placeholder="Adam"
                ></input>
              </div>

              <div className="relative mt-8 ml-3">
                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                  last name<span className='text-red-500'>*</span>
                </label>
                <input
                  className="w-80 h-12 border focus:outline-none  mt-2 rounded-lg px-6 text-gray-500 text-sm"
                  type="text"
                  placeholder="john"
                ></input>
              </div>
            </div>
            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                company Name <span className='text-red-500'>*</span>
              </label>
              <input
                className="w-[100%] h-12 border focus:outline-none   mt-2 rounded-lg px-6 text-gray-500 text-sm"
                type="text"

              ></input>
            </div>
            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff]  text-gray-600 text-sm">
                country/Region <span className='text-red-500'>*</span>
              </label>
              <select
                className="w-[100%] pr-[20px] select:pr-[40px] h-12 border focus:outline-none  mt-2 rounded-lg px-6  text-gray-500 text-sm "
                type="text">
                <option value="">Australia</option>
                <option value="">England</option>
                <option value="">New Zealand</option>
                <option value="">Switzerland</option>
                <option value="">United kindom (UK)</option>
                <option value="">United States (USA)</option>

              </select>

            </div>
            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                Street Address <span className='text-red-500'>*</span>
              </label>
              <input
                className="w-[100%] h-12 border focus:outline-none  mt-2 rounded-lg px-6 text-gray-500 text-sm"
                type="text" placeholder='House number and street name'>
              </input>
              <div>
                <input
                  className="w-[100%] h-12 border focus:outline-none  mt-2 rounded-lg px-6 text-gray-500 text-sm"
                  type="text" placeholder='Apartment, suite,unit,etc.(optional)'>
                </input>
              </div>
            </div>
            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                Town/City <span className='text-red-500'>*</span>
              </label>
              <input
                className="w-[100%] h-12 border focus:outline-none  mt-2 rounded-lg px-6 text-gray-500 text-sm"
                type="text">

              </input>
            </div>
            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                Country <span className='text-red-500'>*</span>
              </label>
              <input
                className="w-[100%] h-12 border focus:outline-none  mt-2 rounded-lg px-6 text-gray-500 text-sm"
                type="text">

              </input>
            </div>
            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                phone <span className='text-red-500'>*</span>
              </label>
              <input
                className="w-[100%] h-12 border focus:outline-none  mt-2 rounded-lg px-6 text-gray-500 text-sm"
                type="text">

              </input>
            </div>
            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                Email Address <span className='text-red-500'>*</span>
              </label>
              <input
                className="w-[100%] h-12 border focus:outline-none  mt-2 rounded-lg px-6 text-gray-500 text-sm"
                type="text">

              </input>
            </div>

            <div className='mt-5 '>
              <input type="checkbox" id="box1" name="box1" value="Box"></input>
              <label for="vehicle1" className='pl-3 text-sm'>Create an Account</label><br></br>
            </div>

            <div className='mt-5'>
              <div className='flex'>
                <h1 className='font-semibold text-lg'>Ship to a different address ?</h1>
                <input className='ml-48' type="checkbox" id="box1" name="box1" value="Box"></input>
              </div>
            </div>

            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                Other Notes (optional)
              </label>
              <input
                className="w-[100%] h-44 border rounded-lg px-6 text-gray-500 text-sm pb-20"
                type="text" placeholder='Notes about your order, e.g. speacial notes for delivery.'>

              </input>
            </div>
          </div>

          <div className='right-section h-[910px] bg-[#f9f3f0] border rounded-md ml-14'>
            <div className='  w-[570px]  '>
              <h1 className='mt-5 ml-12'>Your order</h1>
              <div className='bg-white rounded-md  w-[510px] h-96 ml-7 mt-5'>
                <div className='flex border-b-2 w-[470px] ml-4 mt-5 pt-5 pb-3  '>
                  <p className='ml-4 text-xs font-semibold'>product</p>
                  <p className='ml-80 text-xs font-semibold'>SubTotal</p>
                </div>

                <div className='flex border-b-2 w-[470px] ml-4 pb-3 mt-3'>
                  <p className='ml-4 text-xs font-semibold'>Commodo Blown Lamp x1</p>
                  <p className='ml-56 text-xs font-semibold'>$117.00</p>
                </div>
                <div className='flex  border-b-2 w-[470px] ml-4 pb-3 mt-3 '>
                  <p className='ml-4 text-xs font-semibold' >Commodo Blown Lamp x1</p>
                  <p className='ml-56 text-xs font-semibold'>$198.00</p>
                </div>
                <div className='flex  border-b-2 w-[470px] ml-4 pb-3 mt-3'>
                  <p className='ml-4 text-xs font-semibold' >SubTotal</p>
                  <p className='ml-80 text-xs font-semibold'>$117.00</p>
                </div>
                <div className=' border-b-2 w-[470px] ml-4 pb-3 mt-3 '>
                  <div className='flex'>
                    <p className='ml-4 text-xs font-semibold'>Shipping method</p>
                    <p className='ml-[275px] text-xs font-semibold'>$35.00</p>
                  </div>

                  <div className='ml-4 leading-7 text-xs text-left '>
                    <input type="radio" id="box1" name="box1" value="Box"></input>
                    <label for="vehicle1"> Free Shippping</label><br></br>
                    <input type="radio" id="box2" name="box2" value="box"></input>
                    <label for="vehicle2">Local</label><br></br>
                    <input type="radio" id="box3" name="box3" value="Box"></input>
                    <label for="vehicle3">Flat rate</label><br></br>
                  </div>
                </div>
                <div className='flex mt-5'>
                  <p className='ml-8 text-lg font-semibold' >Total</p>
                  <p className='ml-80 font-bold'>$323.00</p>
                </div>
              </div>

              <div className='ml-7 mt-5 w-[500px] border-b-2 pb-4'>
                <input type="radio" id="box1" name="box1" value="Box"></input>
                <label for="vehicle1" className='ml-3'>Direct bank transfer</label>
                <p className='text-md text-gray-500 mt-4 ml-6'>Make your payment directly into our bank account. Please use your<br></br> Order ID as the payment reference. Your order will not be shipped<br></br> until the funds have cleared in our account.</p>
              </div>
              <div className='ml-7 mt-5 w-[500px] border-b-2 pb-4'>
                <input type="radio" id="box1" name="box1" value="Box"></input>
                <label for="vehicle1" className='ml-3'>Cash on delivery</label>
                <p className='text-sm text-gray-500 mt-4 ml-7'>pay with cash upon delivery</p>
              </div>
              <div className='ml-7 mt-5 w-[500px] border-b-2'>
                <input type="radio" id="box1" name="box1" value="Box"></input>
                <label for="vehicle1" className='ml-3'>Direct bank transfer</label>
                <p className='text-lg text-gray-500 mt-4 ml-6 pb-4'>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
              </div>
              <div className='mt-6'>
                <a href="#" className='relative z-10 text-center pl-48 font-bold text-sm bg-[#3577F0] text-white py-3 px-10 ml-7 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-64
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
                                               '>Process to Checkout</a>
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

      export default Checkout
