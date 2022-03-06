import React from "react";

const Hero = (props) => {
  return (
    <>
      <main>
        <div className="max-w-7xl mx-auto  shadow">
          <div className="px-4 py-6 sm:px-0">
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2">
                Welcome To <br /> My Personal PortFolio
              </h2>
              {/* <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
                Hello, world!
              </h1> */}
              <div className="w-full text-justify sm:text-clip md:w-4/5 xl:w-3/5 p-3">
                <p className="text-sm sm:text-xl text-gray-100/80 font-light sm:tracking-wider">
                  Hello everyone, I am Mohit Maroliya. I am a Indian-based Software Developer who has a slight 
                  inclination building websites with good UI. Most of the time you can find 
                  me writting code, playing chess and doing cycling.
                  
                </p>
                <p className="text-sm sm:text-xl text-gray-100/80 font-light sm:tracking-wider mt-3 lg:mt-5">
                Visit this website to know about me more.
                </p>
              </div>
              <div className="py-4 sm:py-8 px-3 space-y-3 space-x-0 sm:space-y-0 sm:space-x-10">
                <button className="text-white text-lg sm:text-xl font-bold py-3 px-6 bg-gradient-to-r from-teal-500/75 to-purple-500/50 rounded-2xl hover:border-[1px] border-white hover:drop-shadow-xl">Learn More</button>

                <button className="text-white text-lg sm:text-xl font-bold py-3 px-6 bg-gradient-to-r from-teal-500/75 to-purple-500/50 rounded-2xl hover:border-[1px] border-white hover:drop-shadow-xl">
                  <a href="https://drive.google.com/u/0/uc?id=18w36fVGMM2F2Vif8tEfhjG9nHLenjVsC&export=download" download="Resume_Mohit_Maroliya.pdf" target="_blank">Download Resume </a></button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
