import React from "react";
import Header from "./components/Header";
import imgurl from "../public/dog.jpg";
import Image from "next/image";
import { SiMongodb, SiPostman, SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

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
              <div className="p-2 border-2 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 */}
                <div className="card w-full h-full bg-red-400 ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-white rounded-lg border shadow-md sm:flex-row md:max-w-6xl hover:cursor-pointer"
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
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.in
                        reverse chronological order.in reverse chronological
                        order.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">Technologies</h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact />
                        </span>
                        <span>
                          <SiMongodb />
                        </span>
                        <span>
                          <FaNodeJs />
                        </span>
                        <span>
                          <SiPostman />
                        </span>
                      </div>
                      <div className="flex flex-row justify-between mt-3  bg-slate-300">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Demo
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card2 */}
                <div className="card w-full h-full bg-red-400 ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-white rounded-lg border shadow-md sm:flex-row md:max-w-6xl hover:cursor-pointer"
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
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.in
                        reverse chronological order.in reverse chronological
                        order.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">Technologies</h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact />
                        </span>
                        <span>
                          <SiMongodb />
                        </span>
                        <span>
                          <FaNodeJs />
                        </span>
                        <span>
                          <SiPostman />
                        </span>
                      </div>
                      <div className="flex flex-row justify-between mt-3  bg-slate-300">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Demo
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2 border-2 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 */}
                <div className="card w-full h-full bg-red-400 ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-white rounded-lg border shadow-md sm:flex-row md:max-w-6xl hover:cursor-pointer"
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
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.in
                        reverse chronological order.in reverse chronological
                        order.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">Technologies</h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact />
                        </span>
                        <span>
                          <SiMongodb />
                        </span>
                        <span>
                          <FaNodeJs />
                        </span>
                        <span>
                          <SiPostman />
                        </span>
                      </div>
                      <div className="flex flex-row justify-between mt-3  bg-slate-300">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Demo
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card2 */}
                <div className="card w-full h-full bg-red-400 ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-white rounded-lg border shadow-md sm:flex-row md:max-w-6xl hover:cursor-pointer"
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
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.in
                        reverse chronological order.in reverse chronological
                        order.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">Technologies</h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact />
                        </span>
                        <span>
                          <SiMongodb />
                        </span>
                        <span>
                          <FaNodeJs />
                        </span>
                        <span>
                          <SiPostman />
                        </span>
                      </div>
                      <div className="flex flex-row justify-between mt-3  bg-slate-300">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Demo
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 border-2 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 */}
                <div className="card w-full h-full bg-red-400 ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-white rounded-lg border shadow-md sm:flex-row md:max-w-6xl hover:cursor-pointer"
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
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.in
                        reverse chronological order.in reverse chronological
                        order.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">Technologies</h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact />
                        </span>
                        <span>
                          <SiMongodb />
                        </span>
                        <span>
                          <FaNodeJs />
                        </span>
                        <span>
                          <SiPostman />
                        </span>
                      </div>
                      <div className="flex flex-row justify-between mt-3  bg-slate-300">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Demo
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card2 */}
                <div className="card w-full h-full bg-red-400 ">
                  <div
                    href="#"
                    className="p-2 flex flex-row items-center bg-white rounded-lg border shadow-md sm:flex-row md:max-w-6xl hover:cursor-pointer"
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
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.in
                        reverse chronological order.in reverse chronological
                        order.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">Technologies</h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span>
                          <SiReact />
                        </span>
                        <span>
                          <SiMongodb />
                        </span>
                        <span>
                          <FaNodeJs />
                        </span>
                        <span>
                          <SiPostman />
                        </span>
                      </div>
                      <div className="flex flex-row justify-between mt-3  bg-slate-300">
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Demo
                        </button>
                        <button className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800">
                          See Code
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
