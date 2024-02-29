import React, { useState } from "react";
import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
      <header
          className="w-full h-96 bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url('${banner}')` }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-center text-5xl text-blue-900 font-bold drop-shadow-lg">
            WELCOME TO
            <span className="text-amber-500"> MY REACT PROJECT</span>
          </h1>
          <p className="mt-5 text-center text-lg text-blue-900 opacity-70">
            This webiste is about programming and things like that
          </p>

          <span className="mt-8 px-12 py-3  text-orange-500 uppercase hover:font-serif">
          Created by Sinda Ben Jemaa
        </span>
        </div>
      </header>
  );
};

export default Hero;
