import React from 'react';
import Bgimg from '../Images/Bgimg.jpeg';

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center pt-[3rem] ">
      <header>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl tracking-wide font-oswald text-[#122624] text-center mb-4">
          Full Stack Web Developer
        </h1>
        <h2 className="text-md sm:text-lg text-center mt-[3rem]">
          I construct and develop elegant solutions and straightforward code. I love what I do.
        </h2>
      </header>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center mt-[3rem] mb-4">
        <div className="h-[25rem] overflow-hidden">
          <img src={Bgimg} alt="Description of the image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

