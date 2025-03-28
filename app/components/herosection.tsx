"use client";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div id="home" className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
     >
         <Image 
        src="/sc3.jpg"
        alt="school"
        fill
        className="object-cover mt-15"
        /> 

        
      {/* Overlay */}
      <div className="absolute inset-5 bg-[#00000] bg-opacity-50"></div>

     

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          LIGHT  SCHOOLS
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          <i>Education is a ladder to success</i>
        </p>
        <a 
          href="/learn"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
