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
              <div className="w-full text-justify md:w-4/5 xl:w-3/5 p-3">
                <p className="text-sm sm:text-lg text-gray-100/80 font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="py-4 sm:py-8 px-3">
                <button className="text-white text-lg sm:text-xl font-bold py-3 px-6 bg-gradient-to-r from-teal-500/75 to-purple-500/50 rounded-2xl hover:opacity-90 hover:border-2 border-white">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
