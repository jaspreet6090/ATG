import React from 'react';
import bg from "../assets/hero-image.png";
import filter from "../assets/bg-filter.png";

const HeroSection = () => {
  return (
    <main className="h-72 sm:h-full relative ">
      <img src={bg} alt="" className='h-full w-full object-cover' />
      <img src={filter} alt="filter" className='h-full w-full object-cover absolute top-0 z-100' />
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-72    text-left">
        <h1 className="text-white text-xl md:text-5xl  font-bold">Computer Engineering</h1>
        <p className="text-white text-[18px]">142,765 Computer Engineers follow this</p>  
      </div>

      <div className="text-white text-3xl z-100  absolute top-2 left-4 sm:hidden block">
        <i class="fa-solid fa-arrow-left"></i>
        </div>

        <div className="border-2 border-white text-white px-2 py-2 rounded-lg z-100  absolute top-2 right-4 sm:hidden block  hover:bg-slate-500">
          Join Group
        </div>

        
    </main>
  )
}

export default HeroSection;
