import React, { useState } from 'react';
import logo from "../../assets/logo.png"; 
import { BsArrowBarDown } from "react-icons/bs";
import { BsArrowBarUp } from "react-icons/bs";

function Navbar() {
  const [navShow, setNavshow] = useState(false);

  // Define inline styles for the mobile menu
  const navStyles = {
    transition: 'opacity 0.5s ease-in-out, max-height 0.5s ease-in-out',
    opacity: navShow ? 1 : 0,
    maxHeight: navShow ? '200px' : '0', 
    overflow: 'hidden', 
  };

  const navAutoClose =()=>{
    setNavshow(!navShow)
  }

  return (
    <div>
      <nav className='text-amber-50 bg-gradient-to-b from-sky-700 to-sky-800 mx-auto px-4 container h-16 flex justify-between items-center shadow-md fixed z-10 max-w-400 '>
        <div className='flex items-center h-50'>
          <img className='w-auto h-50' src={logo} alt="logoimage" />
        </div>
        <div className='font-bold text-m relative right-4 font-mono'>
          <ul className='md:flex row gap-3.5 hidden'>
            <li className='transition-transform hover:scale-105'><a href="#home">HOME</a></li>
            <li className='transition-transform hover:scale-105'><a href="#course">COURSES</a></li>
            <li className='transition-transform hover:scale-105'><a href="#contact">CONTACT</a></li>
          </ul>
          <div onClick={() => setNavshow(!navShow)} className='md:hidden flex items-center'>
            {navShow ? <BsArrowBarUp className='h-7 w-auto' /> : <BsArrowBarDown className='h-7 w-auto' />}
          </div>
        </div>
      </nav>
  
      
      <div
        className=' font-bold text-m  font-mono bg-gradient-to-b from-sky-700 to-sky-800 text-amber-50 flex items-center justify-center md:hidden h-25 top-15 right-0 left-0 fixed z-20'
        style={navStyles}
      >
        <ul className='flex row gap-10 justify-center text-center mt-10'>
          <li className='transition-transform hover:scale-105' onClick={navAutoClose}><a href="#home">HOME</a></li>
          <li className='transition-transform hover:scale-105' onClick={navAutoClose}><a href="#course">COURSES</a></li>
          <li className='transition-transform hover:scale-105'  onClick={navAutoClose}><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;