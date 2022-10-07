import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      {" "}
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className=" font-bold text-4xl xl:text-5xl">
            Learn fontend web development for free in
            <span className="text-indigo-600"> HINDI</span>
          </h1>
          <p className="text-gray-800 max-w-xl mt-4 leading-relaxed sm:mx-auto lg:ml-0">
           free resources to learn frontend web development in hindi at one place. From learning basics of html and css to creating fully functional ui on react in few weeks.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
          
            <Link
              to="/course"
              className="btn btn-primary" 
            >
              Try it out
            </Link>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
