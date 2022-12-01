import React, { useEffect } from "react";
import Image from "next/image";
import imgurl from "../public/mayank.png";
import imgurl2 from "../public/satelite.png";
import {
  SiAutodesk,
  SiCplusplus,
  SiPython,
  SiOverleaf,
  SiDassaultsystemes,
  SiAnsys,
  SiMicrosoftteams,
} from "react-icons/si";
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
              <h2 className="text-4xl md:text-6xl xl:text-8xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold font-PlayFair bg-gradient-to-r from-white to-sky-500/10 p-2">
                My Name is <br /> Mayank Maroliya
              </h2>
            </div>
          </div>
          <div className="px-5 container text-center mx-auto">
            <p className="text-sm sm:text-2xl  text-gray-100/80 font-light tracking-wider leading-normal pb-4 lg:pb-8 hover:text-white hover:drop-shadow-2xl text-justify">
              This is <strong>Mayank Maroliya</strong>. Currently, I am pursuing
              doctoral studies (Ph.D.) in the Mechanical Engineering department
              at IIT Bombay under Prime Minister's Research Fellowship (PMRF)
              scheme. I'm working in the area of{" "}
              <span className="underline underline-offset-[4px] decoration-pink-300">
                solid-solid phase change materials for thermal management
              </span>{" "}
              . Previously, I had done my undergrad at the Indian Institute of
              Technology Indore in Mechanical Engineering. Skilled in CAD
              Designing and Computational heat transfer, my passion aligns with
              my devotion to analysing and simulating Engineering problems.
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

          {/* skills */}
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
                  Altair
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiDassaultsystemes className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  DS-CATIA
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiPython className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Python3
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiDassaultsystemes className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  DS SolidWorks
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiMicrosoftteams className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  MATLAB
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
            className="text-center mx-2 my-8 xl:my-12"
          >
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 z-10">
                Research Interest
              </h1>

              <section className="text-gray-300 body-font ">
                <div className="container px-5 py-12 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 className="text-lg text-white font-extrabold title-font mb-2">
                          01
                        </h2>
                        <p className="leading-relaxed text-base">IC Engines</p>
                      </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 className="text-lg text-white font-extrabold title-font mb-2">
                          02
                        </h2>
                        <p className="leading-relaxed text-base">
                          Heat Transfer & CFD
                        </p>
                      </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 className="text-lg text-white font-extrabold title-font mb-2">
                          03
                        </h2>
                        <p className="leading-relaxed text-base">
                          Numerical Modeling
                        </p>
                      </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 className="text-lg text-white font-extrabold title-font mb-2">
                          04
                        </h2>
                        <p className="leading-relaxed text-base">
                          Thermodynamics
                        </p>
                      </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 className="text-lg text-white font-extrabold title-font mb-2">
                          05
                        </h2>
                        <p className="leading-relaxed text-base">
                          Cryogenic Engineering
                        </p>
                      </div>
                    </div>

                    <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 className="text-lg text-white font-extrabold title-font mb-2">
                          06
                        </h2>
                        <p className="leading-relaxed text-base">
                          CAE & CAD Design
                        </p>
                      </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 className="text-lg text-white font-extrabold title-font mb-2">
                          07
                        </h2>
                        <p className="leading-relaxed text-base">
                          Waste Heat Recovery Systems
                        </p>
                      </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 className="text-lg text-white font-extrabold title-font mb-2">
                          08
                        </h2>
                        <p className="leading-relaxed text-base">
                          PCM-based Energy Storage Systems
                        </p>
                      </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 className="text-lg text-white font-extrabold title-font mb-2">
                          09
                        </h2>
                        <p className="leading-relaxed text-base">
                          Design & dynamics of Heat Exchangers
                        </p>
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
                PMRF Teaching Deliverables
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-white mb-1 text-xl">
                          Dr. Ambedkar Institute of Technology, Bengaluru
                          (Karnataka), 560056
                        </h2>
                        <p className="leading-relaxed">
                          Taught 70-80 students regarding{" "}
                          <span className="font-bold">
                            Basics of MATLAB programming.
                          </span>{" "}
                          Took <b> 14 Lectures</b>.
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-white mb-1 text-xl">
                          Sri Vasavi Engineering College, Tadepalligudem,
                          Warangal Dist. (A.P.), 534101.
                        </h2>
                        <p className="leading-relaxed">
                          Taught ‘40’ B.E 3rd-year students about{" "}
                          <span className="font-bold">
                            Steam Nozzles and Gas Turbines.
                          </span>{" "}
                          Took <b> 14 Lectures</b>.
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="5" r="3"></circle>
                          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-white mb-1 text-xl">
                          Teaching Assistant, ME 316, Applied Thermodynamics
                        </h2>
                        <p className="leading-relaxed">
                          Prepare assignments, quizzes, and examination papers.
                          weekly tutorials assist the students in their course
                          projects, under institute TA duty.
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-white mb-1 text-xl">
                          Teaching Assistant, ME 209 Thermodynamics
                        </h2>
                        <p className="leading-relaxed">
                          Prepare assignments, quizzes, and examination papers.
                          weekly tutorials assist the students in their course
                          projects, under institute TA duty.
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
                Position of Responsibilities
              </h1>
              <section className="text-gray-400  body-font">
                <div className="container px-5 py-10 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2">
                      <div className="h-full bg-gray-800 bg-opacity-40 hover:bg-opacity-70 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-4">
                          IIT BOMBAY
                        </h2>
                        <h1 className=" sm:text-2xl xl:text-3xl font-medium text-white mb-3">
                          PMRF Research Scholar
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Department of Mechanical Engineering
                        </p>
                        <a className="text-pink-400 inline-flex items-center">
                          May 2022 - Present
                        </a>
                      </div>
                    </div>
                    <div className="p-4 w-full lg:w-1/2">
                      <div className="h-full bg-gray-800 bg-opacity-40 hover:bg-opacity-70 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                          IIT BOMBAY
                        </h2>
                        <h1 className=" sm:text-2xl xl:text-3xl font-medium text-white mb-3">
                          Ph.D. Placement Representative
                        </h1>
                        <p className="leading-relaxed mb-3">Placement Team</p>
                        <a className="text-pink-400 inline-flex items-center">
                          Sept 2022 - Present
                        </a>
                      </div>
                    </div>
                    <div className="p-4 w-full lg:w-1/2">
                      <div className="h-full bg-gray-800 bg-opacity-40 hover:bg-opacity-70 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                          IIT INDORE
                        </h2>
                        <h1 className=" sm:text-2xl xl:text-3xl font-medium text-white mb-3">
                          Student Head
                        </h1>
                        <p className="leading-relaxed mb-3">The CAE Club</p>
                        <a className="text-pink-400 inline-flex items-center">
                          May 2019 - Oct 2020
                        </a>
                      </div>
                    </div>
                    <div className="p-4 w-full lg:w-1/2">
                      <div className="h-full bg-gray-800 bg-opacity-40 hover:bg-opacity-70 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                          IIT BOMBAY
                        </h2>
                        <h1 className=" sm:text-2xl xl:text-3xl font-medium text-white mb-3">
                          Team Captain
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Chess Team, Hostel-14
                        </p>
                        <a className="text-pink-400 inline-flex items-center">
                          Aug 2022 - Present
                        </a>
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
