import React, { useEffect } from "react";
import Image from "next/image";
import imgurl from "../public/mayank.png";
import imgurl2 from "../public/satelite.png";
import {
  SiBootstrap,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiAutodesk,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiMaterialui,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiGit,
  SiPostman,
  SiDocker,
  SiYoutubestudio,
  SiHeroku,
  SiNetlify,
  SiVercel,
  SiAdobephotoshop,
  SiPhotopea,
  SiLinux,
  SiOverleaf,
  SiVisualstudiocode,
  SiAnsys,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiMicrosoftteams,
} from "react-icons/si";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    document.title = "Mayank Maroliya | About";
  }, []);

  //TODO 1Myskills, Reseach Interrests, Teaching Experience, Leadership, form more download resume

  return (
    <>
      <div className="min-h-full">
        {/* <Header /> */}
        <div className="max-w-7xl mx-auto  shadow">
          <div className="px-4 py-6 sm:px-0 flex flex-col lg:flex-row">
            <div className="max-w-4xl mx-auto sm:py-10  sm:px-6 lg:px-8 ">
              <Image
                src={imgurl}
                width="325"
                height="405"
                className="opacity-80 object-cover object-top"
              />
            </div>
            <div className="max-w-7xl mx-auto md:py-5 lg:py-20 px-4 sm:px-2 lg:px-2">
              <h2 className="text-4xl md:text-6xl xl:text-8xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2">
                My Name is <br /> Mayank Maroliya
              </h2>
            </div>
          </div>
          <div className="px-5 container text-center mx-auto">
            <p className="text-sm sm:text-2xl  text-gray-100/80 font-light tracking-wider leading-normal pb-4 lg:pb-8 hover:text-white hover:drop-shadow-2xl">
              My Name is <strong>Mayank Maroliya</strong>. I am a PMRF Scholar
              and active Research Scholar in the Department of Mechanical
              Energy, Indian Institute of Technology Bombay. I am currently
              pursuing my doctoral studies under the guidance{" "}
              <span className="underline underline-offset-[4px] decoration-pink-300">
                Prof. Sandeep Kumar Saha{" "}
              </span>{" "}
              under the topic{" "}
              <span className="underline underline-offset-[4px] decoration-pink-300">
                Thermodynamics & Thermal Science
              </span>
              .
            </p>
          </div>

          {/* satelite img */}
          <motion.div
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 5 }}
            className=" w-40 xl:w-60 h-30 mx-auto mb-5 hover:drop-shadow-2xl"
          >
            <Image src={imgurl2} layout="responsive" alt="satelite" />
          </motion.div>

          {/* <div className="max-w-7xl mx-auto md:py-5 lg:py-20 px-4 sm:px-2 lg:px-2">
            <h2 className="text-4xl md:text-6xl xl:text-6xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent text-center bg-clip-text font-extrabold bg-gradient-to-tl from-white to-sky-500/10 p-2">
              My Skills
            </h2>
          </div> */}
          {/* web development */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center m-2"
          >
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 mb-4 lg:mb-6 xl:mb-8 z-10">
                My Skills
              </h1>
            </div>
            <div className="grid grid-cols-4 gap-5 p-5 px-3 sm:px-4 lg:px-10 lg:w-4/5 mx-auto ">
              <div className=" mx-auto flex-row justify-center items-center">
                <SiAnsys className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Ansys
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiAutodesk className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  AutoDesk
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiCplusplus className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  C++
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiPython className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Python3
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiMicrosoftword className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  MS-Word
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiMicrosoftpowerpoint className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  MS-PowerPoint
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiMicrosoftteams className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  MS-Teams
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiOverleaf className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Overleaf
                </span>
              </div>
            </div>
          </motion.div>

          {/*Research Interest */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mx-2 my-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 z-10">
                Research Interest
              </h1>

              <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                  <div className="lg:w-2/3 mx-auto">
                    <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                        src="https://dummyimage.com/820x340"
                      />
                      <div className="text-center relative z-10 w-full">
                        <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                          Shooting Stars
                        </h2>
                        <p className="leading-relaxed">
                          Skateboard +1 mustache fixie paleo lumbersexual.
                        </p>
                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                          May 2022 - May 2023
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                      <div className="px-2 w-1/2">
                        <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                          <img
                            alt="gallery"
                            className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                            src="https://dummyimage.com/542x460"
                          />
                          <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                              Shooting Stars
                            </h2>
                            <p className="leading-relaxed">
                              Skateboard +1 mustache fixie paleo lumbersexual.
                            </p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">
                              Learn More
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 w-1/2">
                        <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                          <img
                            alt="gallery"
                            className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                            src="https://dummyimage.com/542x420"
                          />
                          <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                              Shooting Stars
                            </h2>
                            <p className="leading-relaxed">
                              Skateboard +1 mustache fixie paleo lumbersexual.
                            </p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">
                              May 2022 - May 2023
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>

          {/* teaching exp */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mx-2 my-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 mb-4 z-10">
                Teaching Experience
              </h1>
              <section className="text-gray-400  body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                  <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-400 text-white relative z-10 title-font font-medium text-sm">
                      1
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-red-400 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-white mb-1 text-xl">
                          Indian Institute of Technology Goa | May 20 - June 20
                        </h2>
                        <p className="leading-relaxed">
                          Worked as a Professor and teaches the course ME101 -{" "}
                          <span className="font-bold">Basic About Matlab</span>{" "}
                          to First Year BTech Graduates.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-400 text-white relative z-10 title-font font-medium text-sm">
                      2
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-red-400 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-white mb-1 text-xl">
                          Indian Institute of Technology Goa | May 20 - June 20
                        </h2>
                        <p className="leading-relaxed">
                          Worked as a Professor and teaches the course ME101 -{" "}
                          <span className="font-bold">Basic About Matlab</span>{" "}
                          to First Year BTech Graduates.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-400 text-white relative z-10 title-font font-medium text-sm">
                      3
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-red-400 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="5" r="3"></circle>
                          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-white mb-1 text-xl">
                          Indian Institute of Technology Goa | May 20 - June 20
                        </h2>
                        <p className="leading-relaxed">
                          Worked as a Professor and teaches the course ME101 -{" "}
                          <span className="font-bold">Basic About Matlab</span>{" "}
                          to First Year BTech Graduates.
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-400 text-white relative z-10 title-font font-medium text-sm">
                      4
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-red-400 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-white mb-1 text-xl">
                          Indian Institute of Technology Goa | May 20 - June 20
                        </h2>
                        <p className="leading-relaxed">
                          Worked as a Professor and teaches the course ME101 -{" "}
                          <span className="font-bold">Basic About Matlab</span>{" "}
                          to First Year BTech Graduates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>

          {/*LeaderShip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mx-2 my-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 mb-4 z-10">
                LeaderShip Roles @IITB
              </h1>
              <section className="text-gray-400  body-font">
                <div className="container px-5 py-10 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/3">
                      <div className="h-full bg-gray-800 bg-opacity-40 hover:bg-opacity-70 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                          IIT BOMBAY
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                          Raclette Blueberry Nextious Level
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <a className="text-pink-400 inline-flex items-center">
                          May 2022 - May 2023
                          
                        </a>
                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                          <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                      <div className="h-full bg-gray-800 bg-opacity-40 hover:bg-opacity-70 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                          IIT BOMBAY
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                          Ennui Snackwave Thundercats
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <a className="text-pink-400 inline-flex items-center">
                          May 2022 - May 2023
                          
                        </a>
                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                          <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                      <div className="h-full bg-gray-800 bg-opacity-40 hover:bg-opacity-70 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                          IIT BOMBAY
                        </h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                          Selvage Poke Waistcoat Godard
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <a className="text-pink-400 inline-flex items-center">
                          May 2022 - May 2023
                          
                        </a>
                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                          <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>

        <div className="w-1/5 h-[2px] mx-auto my-10 hover:drop-shadow-2xl"></div>
      </div>
    </>
  );
};

export default About;
