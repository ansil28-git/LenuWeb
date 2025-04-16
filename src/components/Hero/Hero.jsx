import React, { useEffect } from 'react';
import herobg from '../../assets/herobg.jpg';
import { FaAngleDown } from "react-icons/fa";
import aos from 'aos';

const Hero = () => {
  useEffect(()=>{
    aos.init({duration:1000,})

  },[])
  return (
    <div id='home' 
      className='h-screen w-full bg-cover bg-center flex items-center justify-center'
      style={{ 
        backgroundImage: `url(${herobg})`, 
        backgroundBlendMode: "darken", 
        backgroundColor: "rgba(0,0,0,0.7)" 
      }}
    >
      <div className='text-center px-4 overflow-hidden p-8 ' data-aos="fade-up">
        <h1 className='text-6xl text-white font-bold mx-auto md:mb-10 sm:mb-4'> 
          Elevate Your Skills with <span className='text-blue-700' style={{textShadow:'-1px -1px 0 skyblue , 1px -1px 0 darkblue , -1px -1px 0 blue'}}>Lenu</span>
        </h1>
        <p className="text-blue-200 mx-auto leading-relaxed text-xl md:text-2xl text-center mt-4 md:w-4xl md:mb-20">
          Discover a world of opportunities with our expert-led IT courses. At Lenu, we empower you to learn something new and advance your career in technology. Join us today and start your journey to success!
        </p>
         
        <div className="flex justify-center mt-10 md:mt-14"> 
          <button className='flex items-center text-white bg-sky-700 rounded-xl font-bold p-2 transition-transform duration-300 hover:bg-amber-500 hover:scale-105'>
            <a href="#course">EXPLORE MORE</a>
            <FaAngleDown className='ml-2' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;