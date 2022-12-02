import React from 'react';
import { motion } from "framer-motion";

const Positions = () => {
  return (
    <>
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
    </>
  )
}

export default Positions