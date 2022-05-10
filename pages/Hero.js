import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import imgurl from "../public/planet.png";
import imgurl2 from "../public/planet2.png";
import { useMediaQuery } from "@material-ui/core";

const Hero = () => {
  useEffect(() => {
    document.title = "Mayank | Home";
  }, []);

  const isMobileorTablet = useMediaQuery("(max-width:1024px)");
  //if your screen size is bigger than 1024px it returns false, otherwise it returns true

  const mountainVariant = {
    animate: {
      x: [0, -500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 4,
        },
      },
    },
  };

  const planet1motion = isMobileorTablet
    ? {
        x: [-100, 150, 200, 250, 350, 400],
        y: [-400, -440, -480, -540, -600, -650],
      }
    : {
        x: [0, 200, 300, 400, 500, 700, 850, 1000, 1200, 1400, 1600],
        y: [-300, -340, -380, -440, -500, -550, -620, -700, -800, -900],
      };

  const planet2motion = isMobileorTablet
    ? {
        x: [
          350, 325, 300, 275, 250, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0,
        ],
        y: [
          -650, -625, -610, -600, -585, -575, -550, -525, -510, -490, -475,
          -450, -435, -415, -400,
        ],
      }
    : {
        x: [
          1600, 1556.8, 1494.4, 1440, 1433.6, 1352, 1288, 1163.2, 1124.8,
          1036.8, 960, 880, 827.2, 800, 736, 696, 640, 576, 480, 392, 329.6,
          240, 160, 80, 0, -80, -160,
        ],
        y: [
          -886.68, -840, -809.4, -756, -720, -659.92, -605.88, -513.6, -480,
          -432, -398.4, -360, -337.4, -326.16, -301.08, -286.44, -267, -250.08,
          -218.64, -195.84, -181.2, -162, -146.52, -126, -120, -108.6,
        ],
      };

  const starmotion = isMobileorTablet
    ? {
        x: [100, -100],
        y: [-170, -170],
      }
    : { x: [1700, -550], y: [0, 0] };

  return (
    <>
      <main className="bg-[url('../public/stars3-1.png')]">
        <div className="max-w-7xl mx-auto shadow ">
          <div className="px-4 py-6 sm:px-0">
            <div className="max-w-8xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:flex-row">
                <span>
                  <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/30 p-2 opacity-100">
                    This is <br /> Mayank Maroliya !
                  </h2>
                </span>
                {/* Shooting star disabled */}
                {/* <motion.span animate={starmotion} transition={{ repeat: Infinity, repeatType: "loop", duration: isMobileorTablet ? 1:3, interval:3 }}  className="before:absolute before:-translate-y-2/4 before:w-72 before:h-px before:bg-gradient-to-r mt-px before:from-white absolute w-2 h-2 opacity-90 bg-white rounded-lg shadow-5xl animate-star hidden xl:block"></motion.span> */}
              </div>
              <div className="w-full text-justify sm:text-clip md:w-4/5 xl:w-3/5 p-3 hover:drop-shadow-2xl bg-opacity-50">
                <p className="text-sm sm:text-xl text-gray-100/80 font-light sm:tracking-wider z-10 opacity-100">
                  Hello everyone, I am Mayank Maroliya. I am a Indian-based
                  Software Developer who has a slight inclination building
                  websites with good UI. Most of the time you can find me
                  writting code, playing chess and doing cycling.
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
                    href="https://drive.google.com/u/0/uc?id=18w36fVGMM2F2Vif8tEfhjG9nHLenjVsC&export=download"
                    download="Resume_Mayank_Maroliya.pdf"
                    target="_blank"
                  >
                    Download Resume{" "}
                  </a>
                </button>
              </div>
            </div>

            {/* testimonials */}
            <section className="text-gray-600 body-font">
              <div className="container mx-auto">
                <h1 className="text-3xl md:text-5xl xl:text-6xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2 opacity-100 text-center mb-10">
                  Research Work
                </h1>
                <div className="flex flex-wrap -m-4">
                  {/* test-1 */}
                  <div className="p-4 md:w-1/2 w-11/12 m-auto">
                    <div className="h-full bg-gradient-to-r border-[1px] border-white from-[#111827]/90 to-[#29054a]/50 rounded-2xl p-8 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-blue-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6 text-white text-sm md:text-lg hover:drop-shadow-2xl bg-opacity-50">
                        I don't have words to thank this man, I'm really
                        grateful to have this website in my daily routine. If
                        you're a mere beginner, then you can trust this guy and
                        can put your time into his content. I can assure you
                        that it'll be worth it. This is ideal portfolio website.
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="../monster2.png"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-white">
                            Karan Modh
                          </span>
                          <span className="text-yellow-500 text-sm">
                            PhotoShop Designer
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  {/* test-2 */}
                  <div className="p-4 md:w-1/2 w-11/12 m-auto">
                    <div className="h-full bg-gradient-to-l border-[1px] border-white from-[#111827]/90 to-[#29054a]/50 rounded-2xl p-8 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-blue-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6 text-white text-sm md:text-lg hover:drop-shadow-2xl bg-opacity-50">
                        For everyone who wants to level up their #Coding and
                        #Dev skills - seriously, this website is for you! Both
                        basic and advanced designs are covered on this website,
                        and one can learn according to his skill levels. And the
                        icing on the cake is, everything is available for free.
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="../monster1.png"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-white">
                            Arjun Joshi
                          </span>
                          <span className="text-yellow-500 text-sm">
                            Full Stack Developer
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* <motion.div
          layout="position"
          animate={planet1motion}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 15 }}
          className="h-16 w-16 lg:h-26 lg:w-26 xl:block overflow-hidden"
        >
          <Image className="opacity-70 -z-100  " src={imgurl} layout="fill" />
        </motion.div>
        <motion.div
          animate={planet2motion}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 20 }}
          className="h-16 w-16 lg:h-26 lg:w-26 xl:block overflow-hidden"
        >
          <Image className="opacity-70 -z-100" src={imgurl2} layout="fill" />
        </motion.div> */}
      </main>
      {/* <motion.div
        variants={mountainVariant}
        animate="animate"
        className="bg-[url('../public/removem4.png')] h-48 sm:h-60 sticky bottom-0 w-full drop-shadow-3xl bg-repeat-x min-w-[2400px] hidden xl:block"
      ></motion.div> */}
    </>
  );
};

export default Hero;
