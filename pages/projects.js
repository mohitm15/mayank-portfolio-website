import React from "react";
import Header from "./components/Header";
import imgurl from "../public/dog.jpg";
import Image from "next/image";
import {
  SiBootstrap,
  SiFramer,
  SiJavascript,
  SiLichess,
  SiMongodb,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs, FaEye, FaHtml5, FaCss3, FaSpotify } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { AiOutlineApi } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <div className=" mx-auto shadow container">
          <div className="px-4 py-6 sm:px-0">
            <div className="mx-auto py-20 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2 text-center">
                Welcome To My Projects
              </h2>
            </div>
            <div className="p-5 border-2 border-red-400 flex flex-col lg:flex-col items-center justify-center ">
              <div className="p-2 sm:p-10 border-2 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1  mschatapp*/}
                <div className="card w-full h-full  ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-gradient-to-r from-gray-300 to-slate-400/80 rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer"
                  >
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ms-chatApp
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-gray-700 dark:text-gray-400">
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
                      <div className="flex flex-row items-center justify-between mt-3  bg-slate-300 ">
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
                </div>
                {/* card1 chessmania*/}
                <div className="card w-full h-full  ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-gradient-to-r from-gray-300 to-slate-400/80 rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer"
                  >
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ChessMania
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-gray-700 dark:text-gray-400">
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
                      <div className="flex flex-row items-center justify-between mt-3  bg-slate-300 ">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a href="http://redify.vercel.app/" target="_blank">
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
                </div>
              </div>

              <div className="p-2 sm:p-10 border-2 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 notebook*/}
                <div className="card w-full h-full  ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-gradient-to-r from-gray-300 to-slate-400/80 rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer"
                  >
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        my-notebook
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-gray-700 dark:text-gray-400">
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
                      <div className="flex flex-row items-center justify-between mt-3  bg-slate-300 ">
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
                </div>
                {/* card2  authlogin*/}
                <div className="card w-full h-full  ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-gradient-to-r from-gray-300 to-slate-400/80 rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer"
                  >
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        authlogin-boilerplate
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-gray-700 dark:text-gray-400">
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
                      <div className="flex flex-row items-center justify-between mt-3  bg-slate-300 ">
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
                </div>
              </div>
              <div className="p-2 sm:p-10 border-2 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 redux*/}
                <div className="card w-full h-full  ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-gradient-to-r from-gray-300 to-slate-400/80 rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer"
                  >
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        redux-boilerplate
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-gray-700 dark:text-gray-400">
                        redux-boilerplate is a web application that can be
                        treated as a starter template to learn redux-store and
                        how to manage various states in any hierarchal order.
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
                      <div className="flex flex-row items-center justify-between mt-3  bg-slate-300 ">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a
                            href="https://ms-chat-app-mohit.netlify.app/"
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
                </div>
                {/* card2 redify*/}
                <div className="card w-full h-full  ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-gradient-to-r from-gray-300 to-slate-400/80 rounded-lg border shadow-md sm:flex-row md:max-w-6xl md:max-h-96 hover:cursor-pointer"
                  >
                    <Image
                      width="500%"
                      height="1000%"
                      className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={imgurl}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Redify
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-gray-700 dark:text-gray-400">
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
                      <div className="flex flex-row items-center justify-between mt-3  bg-slate-300 ">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live">
                          <a
                            href="http://chess-mania.vercel.app/"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
