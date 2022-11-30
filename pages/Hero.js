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
            <div className="gearcontainer">
              <svg
                className="machine cursor-pointer hover:shadow-xl"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 645 526"
              >
                <defs />
                <g>
                  <path
                    x="-173,694"
                    y="-173,694"
                    className="large-shadow fill-[#3aa33f]"
                    d="M645 194v-21l-29-4c-1-10-3-19-6-28l25-14 -8-19 -28 7c-5-8-10-16-16-24L602 68l-15-15 -23 17c-7-6-15-11-24-16l7-28 -19-8 -14 25c-9-3-18-5-28-6L482 10h-21l-4 29c-10 1-19 3-28 6l-14-25 -19 8 7 28c-8 5-16 10-24 16l-23-17L341 68l17 23c-6 7-11 15-16 24l-28-7 -8 19 25 14c-3 9-5 18-6 28l-29 4v21l29 4c1 10 3 19 6 28l-25 14 8 19 28-7c5 8 10 16 16 24l-17 23 15 15 23-17c7 6 15 11 24 16l-7 28 19 8 14-25c9 3 18 5 28 6l4 29h21l4-29c10-1 19-3 28-6l14 25 19-8 -7-28c8-5 16-10 24-16l23 17 15-15 -17-23c6-7 11-15 16-24l28 7 8-19 -25-14c3-9 5-18 6-28L645 194zM471 294c-61 0-110-49-110-110S411 74 471 74s110 49 110 110S532 294 471 294z"
                  />
                </g>
                <g>
                  <path
                    x="-136,996"
                    y="-136,996"
                    className="medium-shadow fill-[#b2d7d8]"
                    d="M402 400v-21l-28-4c-1-10-4-19-7-28l23-17 -11-18L352 323c-6-8-13-14-20-20l11-26 -18-11 -17 23c-9-4-18-6-28-7l-4-28h-21l-4 28c-10 1-19 4-28 7l-17-23 -18 11 11 26c-8 6-14 13-20 20l-26-11 -11 18 23 17c-4 9-6 18-7 28l-28 4v21l28 4c1 10 4 19 7 28l-23 17 11 18 26-11c6 8 13 14 20 20l-11 26 18 11 17-23c9 4 18 6 28 7l4 28h21l4-28c10-1 19-4 28-7l17 23 18-11 -11-26c8-6 14-13 20-20l26 11 11-18 -23-17c4-9 6-18 7-28L402 400zM265 463c-41 0-74-33-74-74 0-41 33-74 74-74 41 0 74 33 74 74C338 430 305 463 265 463z"
                  />
                </g>
                <g>
                  <path
                    x="-100,136"
                    y="-100,136"
                    className="small-shadow fill-[#e0bb82]"
                    d="M210 246v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H100l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L10 225v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L210 246zM110 272c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S131 272 110 272z"
                  />
                </g>
                <g>
                  <path
                    x="-100,136"
                    y="-100,136"
                    className="small fill-[#ff9b29]"
                    d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z"
                  />
                </g>
                <g>
                  <path
                    x="-173,694"
                    y="-173,694"
                    className="large fill-[#19d600]"
                    d="M635 184v-21l-29-4c-1-10-3-19-6-28l25-14 -8-19 -28 7c-5-8-10-16-16-24L592 58l-15-15 -23 17c-7-6-15-11-24-16l7-28 -19-8 -14 25c-9-3-18-5-28-6L472 0h-21l-4 29c-10 1-19 3-28 6L405 9l-19 8 7 28c-8 5-16 10-24 16l-23-17L331 58l17 23c-6 7-11 15-16 24l-28-7 -8 19 25 14c-3 9-5 18-6 28l-29 4v21l29 4c1 10 3 19 6 28l-25 14 8 19 28-7c5 8 10 16 16 24l-17 23 15 15 23-17c7 6 15 11 24 16l-7 28 19 8 14-25c9 3 18 5 28 6l4 29h21l4-29c10-1 19-3 28-6l14 25 19-8 -7-28c8-5 16-10 24-16l23 17 15-15 -17-23c6-7 11-15 16-24l28 7 8-19 -25-14c3-9 5-18 6-28L635 184zM461 284c-61 0-110-49-110-110S401 64 461 64s110 49 110 110S522 284 461 284z"
                  />
                </g>
                <g>
                  <path
                    x="-136,996"
                    y="-136,996"
                    className="medium fill-[#ffffff] opacity-100"
                    d="M392 390v-21l-28-4c-1-10-4-19-7-28l23-17 -11-18L342 313c-6-8-13-14-20-20l11-26 -18-11 -17 23c-9-4-18-6-28-7l-4-28h-21l-4 28c-10 1-19 4-28 7l-17-23 -18 11 11 26c-8 6-14 13-20 20l-26-11 -11 18 23 17c-4 9-6 18-7 28l-28 4v21l28 4c1 10 4 19 7 28l-23 17 11 18 26-11c6 8 13 14 20 20l-11 26 18 11 17-23c9 4 18 6 28 7l4 28h21l4-28c10-1 19-4 28-7l17 23 18-11 -11-26c8-6 14-13 20-20l26 11 11-18 -23-17c4-9 6-18 7-28L392 390zM255 453c-41 0-74-33-74-74 0-41 33-74 74-74 41 0 74 33 74 74C328 420 295 453 255 453z"
                  />
                </g>
              </svg>
            </div>
          
          </div>

            {/* testimonials */}
            <section className="text-gray-600 body-font">
              <div className="container xl:mt-12 mx-auto">
                <h1 className="text-3xl md:text-5xl xl:text-6xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold font-PlayFair bg-gradient-to-r from-white to-sky-100/70 p-2 opacity-100 text-center mb-10">
                  Testimonials
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
                      <p className="leading-relaxed mb-6 text-white text-sm md:text-lg hover:drop-shadow-2xl bg-opacity-50 first-letter:text-7xl first-letter:text-[#AEFEFF]
  first-letter:mr-3 first-letter:float-left text-justify">
                        Mr. Mayank Maroliya is quite ambitious and career-driven. He works hard to accomplish his goals and is committed to his work. He is emotionally mature, confident & good-natured. I have known him for the past three years as an undergraduate student, his B. Tech Project Supervising faculty, and one of his course coordinators at Inidan Institute of Technology Indore. He is pretty interactive and endorses the discussions with cogency and natural ease.
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="../monster2.png"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-white">
                          Dr. Devendra Deshmukh, Associate Professor     
                          </span>
                          <span className="text-yellow-500 text-sm">
                          Department of Mechanical Engineering, Indian Institute of Technology, Indore.	
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
                      <p className="leading-relaxed mb-6 text-white text-sm md:text-lg hover:drop-shadow-2xl bg-opacity-50 first-letter:text-7xl first-letter:text-[#AEFEFF]
  first-letter:mr-3 first-letter:float-left text-justify">
                        Mr. Mayank has a well-groomed personality, and a specific focus on his future, and is a Ph.D. scholar under my supervision at IIT Bombay. He greatly understands subjects and often proved his conceptual ability and creative outlook during project discussions. He always comes up with new ideas and used to post intelligent questions. Throughout discussions, he is extremely diligent and meticulous. He is a PMRF fellow and has excellent academic records.
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="../monster1.png"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-white">
                          Dr. Sandip K. Saha, Professor 
                          </span>
                          <span className="text-yellow-500 text-sm">
                          Department of Mechanical Engineering, Indian Institute of Technology Bombay.
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
        
      </main>
      
    </>
  );
};

export default Hero;
