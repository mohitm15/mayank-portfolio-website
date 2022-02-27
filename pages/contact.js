import React from "react";
import Header from "./components/Header";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { SiGmail, SiDevdotto, SiLichess } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <div className=" mx-auto  shadow">
          <div className="px-4 py-6 sm:px-0">
            <div className="mx-auto py-20 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2 text-center">
                Let's Connect
              </h2>
            </div>
            <div className="flex flex-col xl:flex-row space-y-5 w-full md:w-6/12 xl:w-full m-auto xl:mx-5 ">
              <div className="flex flex-row w-full">
                <div className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target="_blank" className="hover:text-teal-600 ">
                    <SiGmail className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36" />
                  </a>
                </div>
                <div className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://www.youtube.com/channel/UCLDS5LaNHR6NEKYgQEPe9FA" target="_blank">
                    <AiFillYoutube className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36" />
                  </a>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://github.com/mohitm15" target="_blank">
                    <AiFillGithub className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36" />
                  </a>
                </div>
                <div className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://www.linkedin.com/in/mohit-maroliya-38b230172/" target="_blank">
                    <AiFillLinkedin className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36" />
                  </a>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://dev.to/mohitm15" target="_blank">
                    <SiDevdotto className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36" />
                  </a>
                </div>
                <div className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://lichess.org/@/mohit_maroliya" target="_blank">
                    <SiLichess className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
