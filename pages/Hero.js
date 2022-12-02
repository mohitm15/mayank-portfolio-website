import React, { useEffect } from "react";
import Link from "next/link";
import Testimonial from "./components/heroPage/testimonial";
import GearMotion from "./components/heroPage/gearmotion";

const Hero = () => {
  useEffect(() => {
    document.title = "Mayank | Home";
  }, []);


  return (
    <>
      <main className="bg-[url('../public/stars3-1.png')]">
        <div className="max-w-7xl mx-auto shadow ">
          <div className="px-4 py-6 sm:px-0">

          <div className="flex flex-col xl:flex-row items-center justify-center">
            {/* hero top section */}
            <div className="max-w-8xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:flex-col">
                <span>
                  <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug   w-full text-transparent bg-clip-text font-extrabold font-PlayFair bg-gradient-to-r from-white to-sky-500/30 p-2 opacity-100">
                  One small step for man, one giant leap for mankind
                  </h2>
                </span>
                <span>
                  <h2 className="text-2xl md:text-3xl xl:text-4xl flex justify-end leading-snug w-full text-transparent bg-clip-text font-extrabold font-PlayFair bg-gradient-to-r from-white to-sky-500/30 p-2 opacity-100 pr-8 xl:pr-28 -mt-2">- Neil Armstrong</h2>
                </span>
              </div>
              <div className="w-full text-justify sm:text-clip md:w-4/5 xl:w-full p-3 hover:drop-shadow-2xl bg-opacity-50">
                <p className="text-sm sm:text-2xl text-gray-100/80 font-medium sm:tracking-wider z-10 opacity-100">
                  I am Mayank Maroliya pursuing my Doctoral Studies (Ph.D.) at the Mechanical Engineering Department, Indian Institute of Technology, Bombay. I’m doing my research in the field of Thermal and Fluid Engineering under the supervision of Dr. Sandip K Saha. I was also awarded the prestigious Prime Minister Research Fellowship. Previously, I had completed my Bachelor of Technology (2017-21) in the field of Mechanical Engineering at the Indian Institute of Technology Indore.
                </p>
                <p className="text-sm sm:text-xl text-gray-100/80 font-light sm:tracking-wider mt-3 lg:mt-5">
                  Visit this website to know about me more.
                </p>
              </div>

              <div className="py-4 sm:py-8 px-3 space-y-3 space-x-0 sm:space-y-0 sm:space-x-10 opacity-100">
                <Link href="/about ">
                  <button className="text-white text-lg sm:text-xl font-bold py-3 px-6 bg-gradient-to-r from-teal-500/75 to-purple-500/50 rounded-2xl hover:border-[1px] border-white hover:drop-shadow-3xl ">
                    Learn More
                  </button>
                </Link>
                <button className="text-white text-lg sm:text-xl font-bold py-3 px-6 bg-gradient-to-r from-teal-500/75 to-purple-500/50 rounded-2xl hover:border-[1px] border-white hover:drop-shadow-3xl">
                  <a
                    href="https://drive.google.com/u/0/uc?id=1X2PWNcrjXV0JNQfVJXXEs8oDTzC-QEvo&export=download"
                    download="Resume_Mayank_Maroliya.pdf"
                    target="_blank"
                  >
                    Download Resume{" "}
                  </a>
                </button>
              </div>
            </div>

            {/* gear animation  */}
            <GearMotion />
          
          </div>

            {/* testimonials */}
            <Testimonial />
          </div>
        </div>
        
      </main>
      
    </>
  );
};

export default Hero;
