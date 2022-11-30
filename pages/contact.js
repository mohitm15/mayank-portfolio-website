import React, {useEffect} from "react";
import Header from "./components/Header";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { SiGmail, SiDevdotto, SiLichess } from "react-icons/si";
import { motion } from "framer-motion";


const Contact = () => {

  useEffect(() => {
    document.title = "Mayank Maroliya | Contacts"
  }, [])
  
  return (
    <>
      <div className="min-h-screen">
        {/* <Header /> */}
        <div className="mx-auto shadow container">
          <div className="px-4 py-6 sm:px-0">
            <div className="mx-auto py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-6xl xl:text-7xl  leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold font-PlayFair bg-gradient-to-r from-white to-sky-500/10 p-2 text-center">
                Let's Connect
              </h2>
            </div>
            <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 w-full py-10 md:p-20 md:w-6/12 xl:w-full m-auto xl:mx-5 items-center justify-center border-2 bg-[url('../public/space.png')]">
              <div className="flex flex-row w-full  ">
                {/* Gmail */}
                {/* <motion.div animate={{y:[0,4,0,-4,0]}}  transition={{repeat:Infinity , duration:2}} whileTap={{scale:0.9}} className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 hover:bg-gradient-to-r bg-slate-900 from-fuchsia-900  rounded-lg m-auto border-2 ">
                  <a href="https://mayankmaroliya@gmail.com" target="_blank" className="hover:text-yellow-500 ">
                    <SiGmail className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 " />
                  </a>
                </motion.div> */}
                {/* Youtube */}
                {/* <motion.div animate={{y:[0,4,0,-4,0]}}  transition={{ delay:0.2,repeat:Infinity , duration:2}} whileTap={{scale:0.9}} className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6  hover:bg-gradient-to-r from-fuchsia-900 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://www.youtube.com/channel/UC2H8mkcHqBievpxf1sSpzMg" target="_blank" className="hover:text-yellow-500 " >
                    <AiFillYoutube className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 " />
                  </a>
                </motion.div> */}
              </div>
              <div className="flex flex-row w-full space-x-5 xl:space-x-14">
                {/* Github */}
                {/* <motion.div animate={{y:[0,4,0,-4,0]}}  transition={{delay:0.3,repeat:Infinity , duration:2}} whileTap={{scale:0.9}} className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 hover:bg-gradient-to-r from-fuchsia-900 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://github.com/mohitm15" target="_blank" className="hover:text-yellow-500 " >
                    <AiFillGithub className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 " />
                  </a>
                </motion.div> */}
                {/* Gmail */}
                <motion.div animate={{y:[0,4,0,-4,0]}}  transition={{repeat:Infinity , duration:2}} whileTap={{scale:0.9}} className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 hover:bg-gradient-to-r bg-slate-900 from-fuchsia-900  rounded-lg m-auto border-2 ">
                  <a href="https://mayankmaroliya@gmail.com" target="_blank" className="hover:text-yellow-500 ">
                    <SiGmail className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 " />
                  </a>
                </motion.div>
                {/* Youtube */}
                <motion.div animate={{y:[0,4,0,-4,0]}}  transition={{ delay:0.2,repeat:Infinity , duration:2}} whileTap={{scale:0.9}} className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6  hover:bg-gradient-to-r from-fuchsia-900 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://www.youtube.com/channel/UC2H8mkcHqBievpxf1sSpzMg" target="_blank" className="hover:text-yellow-500 " >
                    <AiFillYoutube className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 " />
                  </a>
                </motion.div>
                {/* Linkedin */}
                <motion.div animate={{y:[0,4,0,-4,0]}}  transition={{delay:0.15,repeat:Infinity , duration:2}} whileTap={{scale:0.9}} className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 hover:bg-gradient-to-r from-fuchsia-900 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://www.linkedin.com/in/mayankmaroliya/" target="_blank" className="hover:text-yellow-500 " >
                    <AiFillLinkedin className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 " />
                  </a>
                </motion.div>
              </div>
              <div className="flex flex-row w-full ">
                {/* Dev */}
                {/* <motion.div animate={{y:[0,4,0,-4,0]}}  transition={{delay:0.3,repeat:Infinity , duration:2}} whileTap={{scale:0.9}} className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 hover:bg-gradient-to-r from-fuchsia-900 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://dev.to/mohitm15" target="_blank" className="hover:text-yellow-500 " >
                    <SiDevdotto className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 " />
                  </a>
                </motion.div> */}
                {/* Lichess */}
                {/* <motion.div animate={{y:[0,4,0,-4,0]}}  transition={{delay:0.1,repeat:Infinity , duration:2}} whileTap={{scale:0.9}} className="p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 hover:bg-gradient-to-r from-fuchsia-900 bg-slate-900 rounded-lg m-auto border-2">
                  <a href="https://lichess.org/@/mohit_maroliya" target="_blank" className="hover:text-yellow-500 " >
                    <SiLichess className="h-14 w-14 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 " />
                  </a>
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
