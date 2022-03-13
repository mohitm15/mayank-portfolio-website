import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 3, yoyo: Infinity, type:"spring", ease: "easeInOut" };
const Hero = (props) => {
  return (
    <>
      <main>
        <div className="max-w-7xl mx-auto  shadow">
          <div className="px-4 py-6 sm:px-0">
            <div className="max-w-8xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:flex-row">
                <span>
                  <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2">
                    Welcome To <br /> My Personal PortFolio
                  </h2>
                </span>
                {/* <div className="hidden lg:block">
                  <div className="container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="451"
                      height="437"
                    >
                      <motion.path
                        d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
                        fill="transparent"
                        strokeWidth="15"
                        stroke="rgba(255, 255, 255, 0.69)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={transition}
                      />
                    </svg>
                  </div>
                </div> */}
              </div>
              <div className="w-full text-justify sm:text-clip md:w-4/5 xl:w-3/5 p-3 hover:drop-shadow-2xl">
                <p className="text-sm sm:text-xl text-gray-100/80 font-light sm:tracking-wider ">
                  Hello everyone, I am Mohit Maroliya. I am a Indian-based
                  Software Developer who has a slight inclination building
                  websites with good UI. Most of the time you can find me
                  writting code, playing chess and doing cycling.
                </p>
                <p className="text-sm sm:text-xl text-gray-100/80 font-light sm:tracking-wider mt-3 lg:mt-5">
                  Visit this website to know about me more.
                </p>
              </div>
              <div className="py-4 sm:py-8 px-3 space-y-3 space-x-0 sm:space-y-0 sm:space-x-10 ">
                <button className="text-white text-lg sm:text-xl font-bold py-3 px-6 bg-gradient-to-r from-teal-500/75 to-purple-500/50 rounded-2xl hover:border-[1px] border-white hover:drop-shadow-3xl ">
                  Learn More
                </button>

                <button className="text-white text-lg sm:text-xl font-bold py-3 px-6 bg-gradient-to-r from-teal-500/75 to-purple-500/50 rounded-2xl hover:border-[1px] border-white hover:drop-shadow-3xl">
                  <a
                    href="https://drive.google.com/u/0/uc?id=18w36fVGMM2F2Vif8tEfhjG9nHLenjVsC&export=download"
                    download="Resume_Mohit_Maroliya.pdf"
                    target="_blank"
                  >
                    Download Resume{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
