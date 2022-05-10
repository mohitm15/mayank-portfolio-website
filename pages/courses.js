import React, { useEffect } from "react";
import Header from "./components/Header";
import imgurl1s from "../public/mssmall.png";
import imgurl1l from "../public/mslarge.png";
import imgurl2s from "../public/2small.jpeg";
import imgurl2l from "../public/2large.png";
import Image from "next/image";
import {
  SiBootstrap,
  SiFramer,
  SiJavascript,
  SiLichess,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs, FaEye, FaHtml5, FaCss3, FaSpotify } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { AiOutlineApi } from "react-icons/ai";
import { motion } from "framer-motion";

const Courses = () => {
  useEffect(() => {
    document.title = "Mayank Maroliya | Courses";
  }, []);

  return (
    <>
      <div className="min-h-full">
        {/* <Header /> */}
        <div className=" mx-auto shadow container">
          <div className="px-4 py-6 sm:px-0">
            <div className="mx-auto md:pt-20 md:pb-5 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2 text-center">
                Courses @ IIT Bombay
              </h2>
            </div>
            <div>
              <p className="text-base lg:text-xl text-center py-2 md:py-5 font-extralight">
                All courses I have undertaken at IIT Bombay are listed here.
              </p>
            </div>

            <div className="p-2 border-[1px] border-red-400/20 flex flex-col lg:flex-col items-center justify-center bg-[url('../public/stars2.jpg')]">
              {/* row 1 */}
              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center w-full">
                {/* card1  mschatapp*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover: hover:to-[#b2eff7] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute "
                >
                  <div className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row  hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100">
                    {/* main content */}
                    <div className="flex flex-col w-full">
                      {/* heading */}
                      <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 ">
                          <div className=" rounded-lg flex p-4 h-full justify-center items-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                              <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font text-blue-900 text-lg tracking-wide font-medium">
                              Autumn Semester | 2020-21
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* table */}
                      <div className="lg:px-4 lg:pb-2">
                        <table className="table-auto lg:w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100/50 rounded-tl rounded-bl w-1/5">
                                Code
                              </th>
                              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100/50 w-4/5">
                                Name
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-800 bg-gray-50/25">
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card2 chessmania*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover: hover:to-[#b2eff7] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute "
                >
                  <div className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row  hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100">
                    {/* main content */}
                    <div className="flex flex-col w-full">
                      {/* heading */}
                      <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 ">
                          <div className=" rounded-lg flex p-4 h-full justify-center items-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                              <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font text-blue-900 text-lg tracking-wide font-medium">
                              Autumn Semester | 2020-21
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* table */}
                      <div className="lg:px-4 lg:pb-2">
                        <table className="table-auto lg:w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100/50 rounded-tl rounded-bl w-1/5">
                                Code
                              </th>
                              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100/50 w-4/5">
                                Name
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-800 bg-gray-50/25">
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* row 2 */}
              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center w-full">
                {/* card1  mschatapp*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover: hover:to-[#b2eff7] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute "
                >
                  <div className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row  hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100">
                    {/* main content */}
                    <div className="flex flex-col w-full">
                      {/* heading */}
                      <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 ">
                          <div className=" rounded-lg flex p-4 h-full justify-center items-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                              <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font text-blue-900 text-lg tracking-wide font-medium">
                              Autumn Semester | 2020-21
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* table */}
                      <div className="lg:px-4 lg:pb-2">
                        <table className="table-auto lg:w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100/50 rounded-tl rounded-bl w-1/5">
                                Code
                              </th>
                              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100/50 w-4/5">
                                Name
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-800 bg-gray-50/25">
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card2 chessmania*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover: hover:to-[#b2eff7] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute "
                >
                  <div className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row  hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100">
                    {/* main content */}
                    <div className="flex flex-col w-full">
                      {/* heading */}
                      <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 ">
                          <div className=" rounded-lg flex p-4 h-full justify-center items-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                              <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font text-blue-900 text-lg tracking-wide font-medium">
                              Autumn Semester | 2020-21
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* table */}
                      <div className="lg:px-4 lg:pb-2">
                        <table className="table-auto lg:w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100/50 rounded-tl rounded-bl w-1/5">
                                Code
                              </th>
                              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100/50 w-4/5">
                                Name
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-800 bg-gray-50/25">
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3">EN 407</td>
                              <td className="px-2 py-3">
                                Chemistry for Energy Science
                              </td>
                            </tr>
                            <tr>
                              <td className=" px-2 py-1">EN 409</td>
                              <td className=" px-2 py-1">
                                Mathematical Foundation for Energy Science
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
