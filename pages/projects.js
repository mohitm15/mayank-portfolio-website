import React, {useEffect} from "react";
import Header from "./components/Header";
import imgurl1s from "../public/mssmall.png";
import imgurl1l from "../public/mslarge.png";
import imgurl2s from "../public/2small.jpeg";
import imgurl2l from "../public/2large.png";
import imgurl3s from "../public/3large.png";
import imgurl3l from "../public/3large.jpg";
import imgurl4s from "../public/4small.png";
import imgurl4l from "../public/4large.png";
import imgurl5s from "../public/5small.png";
import imgurl5l from "../public/5large.png";
import imgurl6s from "../public/6small.jpg";
import imgurl6l from "../public/6large.png";
import imgurl7s from "../public/7small.png";
import imgurl7l from "../public/7large.png";
import imgurl8s from "../public/8small.png";
import imgurl8l from "../public/8large.png";
import imgurl9s from "../public/9small.png";
import imgurl9l from "../public/9large.png";
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


const Projects = () => {

  useEffect(() => {
    document.title = "Mayank Maroliya | Projects"
  }, [])
  
  return (
    <>
      <div className="min-h-full">
        {/* <Header /> */}
        <div className=" mx-auto shadow container">
          <div className="px-4 py-6 sm:px-0">
            <div className="mx-auto py-20 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2 text-center">
                Welcome To My Projects
              </h2>
            </div>
            <div className="p-5 border-2 border-red-400/20 flex flex-col lg:flex-col items-center justify-center bg-[url('../public/stars2.jpg')]">
              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1  mschatapp*/}
                <motion.div initial={{opacity:0.3}} whileInView={{opacity:1}} className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover: hover:to-[#b2eff7] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute ">
                  <div
                    
                    className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100"
                  >
                    <div className="block sm:hidden">
                    <Image
                      height={350}
                      width={700}
                      className="object-cover rounded-t-lg "
                      src={imgurl1l}
                      alt=""
                    />
                    </div>
                    <div className="hidden sm:block">
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl1s}
                      alt=""
                    />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        ms-chatApp
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base  text-justify text-gray-700 ">
                        ms-chat-app is the macro version of ms-teams where you
                        can form groups and can message & share images with
                        different people. You can also customize the UI by
                        yourself.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl" />
                        </span>
                        <span>
                          <SiMongodb className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150  hover:rounded-xl" />
                        </span>
                        <span>
                          <FaNodeJs className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiPostman className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="https://ms-chat-app-mohit.netlify.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>

                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/ms-chat-app"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card2 chessmania*/}
                <motion.div initial={{opacity:0.3}} whileInView={{opacity:1}} className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover:from-[#fc91a1] hover:to-[#a7cffd] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute ">
                  <div
                    
                    className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100"
                  >
                    <div className="block sm:hidden">
                    <Image
                      height={350}
                      width={700}
                      className="object-cover rounded-t-lg "
                      src={imgurl2l}
                      alt=""
                    />
                    </div>
                    <div className="hidden sm:block">
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl2s}
                      alt=""
                    />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        ChessMania
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        ChessMania is a website where you can find evrything
                        about chess. You can see basic game rules, chess players
                        & their rankings, read articles and see any user profile
                        of LiChess.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiMongodb className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <FaNodeJs className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiBootstrap className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiLichess className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiPostman className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <AiOutlineApi className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a href="http://chess-mania.vercel.app/" target="_blank">
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code">
                          <a
                            href="https://github.com/mohitm15/Redify"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 notebook*/}
                <motion.div initial={{opacity:0.3}} whileInView={{opacity:1}} className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover:from-[#fc91a1] hover:to-[#a7cffd] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute ">
                  <div
                    
                    className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100"
                  >
                    <div className="block sm:hidden">
                    <Image
                      height={350}
                      width={700}
                      className="object-cover rounded-t-lg "
                      src={imgurl3s}
                      alt=""
                    />
                    </div>
                    <div className="hidden sm:block">
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl3l}
                      alt=""
                    />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        my-notebook
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        my-notebook is a web application that is used to keep
                        your notes securly. Each user can create, edit and
                        delete its own notes. It also authenticates the user
                        before performing any CRUD operation.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiMongodb className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <FaNodeJs className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiPostman className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiFramer className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiBootstrap className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg ">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a
                            href="https://my-notebook-mohit.netlify.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code">
                          <a
                            href="https://github.com/mohitm15/my-notebook"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card2  authlogin*/}
                <motion.div initial={{opacity:0.3}} whileInView={{opacity:1}} className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover:from-[#fc91a1] hover:to-[#a7cffd] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute ">
                  <div
                    
                    className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100"
                  >
                    <div className="block sm:hidden">
                    <Image
                      height={350}
                      width={700}
                      className="object-cover rounded-t-lg "
                      src={imgurl4l}
                      alt=""
                    />
                    </div>
                    <div className="hidden sm:block">
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl4s}
                      alt=""
                    />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        authlogin-boilerplate
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        It's a web application that can be treated as a starter
                        template to learn the basics of login system. It
                        includes self-defined APIs for login, signUp and
                        forgot/change Password functionality.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiMongodb className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <FaNodeJs className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiPostman className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiTailwindcss className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a
                            href="https://authlogin-boilerplate-frontend-6dww0kmcf-mohitm15.vercel.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code">
                          <a
                            href="https://github.com/mohitm15/authlogin-boilerplate"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 redux*/}
                <motion.div initial={{opacity:0.3}} whileInView={{opacity:1}} className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover:from-[#fc91a1] hover:to-[#a7cffd] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute ">
                  <div
                    
                    className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100"
                  >
                    <div className="block sm:hidden">
                    <Image
                      height={350}
                      width={700}
                      className="object-cover rounded-t-lg "
                      src={imgurl5l}
                      alt=""
                    />
                    </div>
                    <div className="hidden sm:block">
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl5s}
                      alt=""
                    />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        redux-boilerplate
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        redux-boilerplate is a web application that can be
                        treated as a starter template to learn redux-store and
                        how to manage various states in any hierarchal order in redux-store.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiBootstrap className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiRedux className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a
                            href="https://redux-starter-boilerplate.herokuapp.com/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code">
                          <a
                            href="https://github.com/mohitm15/redux-boilerplate/tree/master/redux-boilerplate"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card2 redify*/}
                <motion.div initial={{opacity:0.3}} whileInView={{opacity:1}} className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover:from-[#fc91a1] hover:to-[#a7cffd] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute ">
                  <div
                    
                    className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100"
                  >
                    <div className="block sm:hidden">
                    <Image
                      height={350}
                      width={700}
                      className="object-cover rounded-t-lg "
                      src={imgurl6l}
                      alt=""
                    />
                    </div>
                    <div className="hidden sm:block">
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl6s}
                      alt=""
                    />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        Redify
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        Redify is the red version of Spotify. It is basically a
                        clone of Spotify providing different songs. You can
                        change, stop and play songs of your playlist easily and
                        between different singers.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <FaHtml5 className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <FaCss3 className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiJavascript className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <FaSpotify className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a
                            href="http://redify.vercel.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code">
                          <a
                            href="https://github.com/mohitm15/Redify"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 timetravel*/}
                <motion.div initial={{opacity:0.3}} whileInView={{opacity:1}} className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover:from-[#fc91a1] hover:to-[#a7cffd] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute ">
                  <div
                    
                    className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100"
                  >
                    <div className="block sm:hidden">
                    <Image
                      height={350}
                      width={700}
                      className="object-cover rounded-t-lg "
                      src={imgurl7l}
                      alt=""
                    />
                    </div>
                    <div className="hidden sm:block">
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl7s}
                      alt=""
                    />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        Time Travel
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                      Time-travel is an application from which anyone can check the time of major Asian Cities.
                      It uses world-time API and country-flag API to display the time and flag for each country respectively.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiTailwindcss className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <AiOutlineApi className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a
                            href="https://timetravel-mohit.netlify.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code">
                          <a
                            href="https://github.com/mohitm15/TimeTravel"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>


                {/* card2 weahterlytics*/}
                <motion.div initial={{opacity:0.3}} whileInView={{opacity:1}} className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover:from-[#fc91a1] hover:to-[#a7cffd] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute ">
                  <div
                    
                    className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100"
                  >
                    <div className="block sm:hidden">
                    <Image
                      height={350}
                      width={700}
                      className="object-cover rounded-t-lg "
                      src={imgurl9l}
                      alt=""
                    />
                    </div>
                    <div className="hidden sm:block">
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl9s}
                      alt=""
                    />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        WeatherLytics
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                      Weather-Lytics is a project which shows the current weather and its forecast of any city in the world. It  includes Today's weather in details and the weather forecast for the upcoming week.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiNextdotjs className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiTailwindcss className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <AiOutlineApi className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a
                            href="https://weather-lytics.vercel.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code">
                          <a
                            href="https://github.com/mohitm15/Weather-Lytics"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>


                {/* card2 portfolio*/}

                {/* <motion.div initial={{opacity:0.3}} whileInView={{opacity:1}} className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover:from-[#fc91a1] hover:to-[#a7cffd] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-oute ">
                  <div
                    
                    className="transition p-2 flex flex-col items-center bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7]  rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:transition hover:duration-500 ease-in-out  opacity-90 hover:opacity-100"
                  >
                    <div className="block sm:hidden">
                    <Image
                      height={350}
                      width={700}
                      className="object-cover rounded-t-lg "
                      src={imgurl8l}
                      alt=""
                    />
                    </div>
                    <div className="hidden sm:block">
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl8s}
                      alt=""
                    />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        My PortFolio Website
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        My-PortFolio-website is the website which showcases me. It includes some information about my proffesional world and also my major projects, blogs and contact details.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiNextdotjs className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiTailwindcss className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        <span>
                          <SiFramer className="hover:text-purple-900 hover:border-[1px] hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                        </span>
                        
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a
                            href="https://my-portfolio-website-steel.vercel.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code">
                          <a
                            href="https://github.com/mohitm15/my-portfolio-website"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
