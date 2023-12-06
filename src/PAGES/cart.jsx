import React from 'react'
import Footer from '../Components/Footer'
import { English, USD } from "../components/navbar"
import { Dropdown1, NavBottom } from "../components/navbar1"

function Cart() {
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
      
        <div className=' container mx-auto' >
          <div className='w-96 h-96 c border ml-[740px] mt-10 bg-[#f9f3f0] border-[#f9f3f0] rounded-md text-sm'>
            <h1 className='mt-5 ml-8 text-base'>Order summary</h1>
            <div className='flex border-b-2 w-[350px] ml-4 mt-3 pb-3  '>
              <p className='ml-4'>Subtotal</p>
              <p className='ml-32'>$117.00</p>
            </div>
            <div className='flex border-b-2 w-[350px] ml-4 pb-3 mt-3 '>
              <p className='ml-4'>Shipping</p>
              <div className='ml-32 leading-7'>
                <input type="radio" id="box1" name="box1" value="Box"></input>
                <label for="vehicle1" className='ml-2'> Free Shippping</label><br></br>
                <input type="radio" id="box2" name="box2" value="box"></input>
                <label for="vehicle2" className='ml-2'>Local:$35.00</label><br></br>
                <input type="radio" id="box3" name="box3" value="Box"></input>
                <label for="vehicle3" className='ml-2'>Flat rate:$12.00</label><br></br>
              </div>
            </div>
            <div className='flex border-b-2 w-[350px] ml-4 pb-3 mt-3'>
              <p className='ml-4'>State Tax</p>
              <p className='ml-32'>$8.00</p>
            </div>
            <div className='flex  border-b-2 w-[350px] ml-4 pb-3 mt-3'>
              <p className='ml-4' >Total</p>
              <p className='ml-40'>$125.00</p>
            </div>
            <button type='button' className='w-[350px] mt-5 border ml-4 h-12 rounded-md bg-blue-500 text-white font-bold text-sm hover:scale-105 duration-500 '>Process to checkout</button>
          </div>

        </div>
        <div className=' container mx-auto'>
        <Footer />

        </div>
      
    </>
  )
}

export default Cart
