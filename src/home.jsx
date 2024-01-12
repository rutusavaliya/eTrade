import React from "react";
import './home.css'
import { Link } from "react-router-dom";

export function English() {
  function myFunction() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <div className="dropdown mr-6  z-50">
      <button onClick={myFunction} className="dropbtn text-sm text-gray-500  mb-2 cursor-pointer">English <i className="fa-solid fa-angle-down text-gray-500 transition-all text-xs"></i></button>
      <div id="myDropdown1" className="dropdown-content bg-white shadow-lg">
        <a className='rounded-md text-gray-500 text-sm w-20 pl-2 py-1 ml-2 hover:bg-[#FF5283] hover:text-white' href="#home">English</a>
        <a className='rounded-md text-gray-500 text-sm w-20 pl-2 py-1 ml-2 hover:bg-[#FF5283] hover:text-white' href="#about">Arabic</a>
        <a className='rounded-md text-gray-500 text-sm w-20 pl-2 py-1 ml-2 hover:bg-[#FF5283] hover:text-white' href="#contact">Spanish</a>
      </div>
    </div>
  )
}

export function USD() {
  function myFunction() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <div className="dropdown z-50">
      <button onClick={myFunction} className="dropbtn text-sm text-gray-500 mb-2 cursor-pointer">USD <i class="fa-solid fa-angle-down text-gray-500 text-xs"></i></button>
      <div id="myDropdown2" className="dropdown-content bg-white shadow-lg">
        <a className='rounded-md text-gray-500 text-sm w-20 pl-2 py-1 ml-2 hover:bg-[#FF5283] hover:text-white' href="#home">USD</a>
        <a className='rounded-md text-gray-500 text-sm w-20 pl-2 py-1 ml-2 hover:bg-[#FF5283] hover:text-white' href="#about">AUD</a>
        <a className='rounded-md text-gray-500 text-sm w-20 pl-2 py-1 ml-2 hover:bg-[#FF5283] hover:text-white' href="#contact">EUR</a>
      </div>
    </div>
  )
}

export const HomeRightpart = () => {
  return (
    <div className='right-part z-[60]'>
      <div className='list-none flex text-sm text-gray-500 '>
        <li className='hover:text-blue-500 cursor-pointer ml-6 text-gray-500'>Help</li>
        <Link to="/SignUp" className='hover:text-blue-500 cursor-pointer ml-6 text-gray-500'>Join Us</Link>
        <Link to="/SignIn" className='hover:text-blue-500 cursor-pointer ml-6 text-gray-500'>Sign In</Link>
      </div>
    </div>
  )
}

export const TopBar = () => {
  return (
    <>
      <div className="py-2 bg-[#292930]">

        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <English />
              <USD />
            </div>
            <HomeRightpart />
          </div>
        </div>
      </div>
    </>
  )
}

export const TopBar1 = () => {
  return (
    <>
     

        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <English />
              <USD />
            </div>
            <HomeRightpart />
          </div>
        </div>
     
    </>
  )
}