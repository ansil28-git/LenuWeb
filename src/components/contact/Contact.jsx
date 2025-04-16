import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa";

function Contact() {
  return (
    <div className='container mx-auto p-4 ' id='contact'>
      <h1 className='text-center font-bold text-3xl text-shadow-md md:mt-30 mt-15'>FOR DIRECT <span className='text-sky-700'>INQUIRY</span></h1>
      <div className='p-5 mt-6  bg-gray-300 shadow-xl rounded-2xl w-full max-w-xl mx-auto mb-'>
        <div className='mt-2 flex justify-center items-center'>
        <h2 className='md:text-xl sm:text-lg font-bold  md:mr-4 mr-3  '>Gmail ID: Lenu88@XX.gmail.com</h2>
        < SiGmail className='text-2xl text-indigo-800'/>
        </div>
        <div className='flex justify-center items-center mt-3'>
          <h2 className='text-xl font-bold mr-3'>ph No: 929219xxx</h2>
          <FaPhoneVolume  className='text-xl text-indigo-800'/>
        </div>       
      </div>     
    </div>
  )
}

export default Contact
