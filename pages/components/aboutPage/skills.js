import React, { useEffect } from "react";
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

const Skills = () => {
  return (
    <>
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
    </>
  )
}

export default Skills