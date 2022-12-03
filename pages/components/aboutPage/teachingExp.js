import React from 'react';
import { motion } from "framer-motion";

const TeachingExp = () => {

  const data = [
    {
      circle:{x:"0",y:"0",r:"0"},
      path:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      title:"Dr. Ambedkar Institute of Technology, Bengaluru (Karnataka), 560056",
      para:"Taught 70-80 students regarding Basics of MATLAB programming. Took 14 Lectures."
    },
    {
      circle:{x:"0",y:"0",r:"0"},
      path:"M22 12h-4l-3 9L9 3l-3 9H2",
      title:"Sri Vasavi Engineering College, Tadepalligudem, Warangal Dist. (A.P.), 534101.",
      para:"Taught ‘40’ B.E 3rd-year students about Steam Nozzles and Gas Turbines. Took 14 Lectures."
    },
    {
      circle:{x:"12",y:"5",r:"3"},
      path:"M12 22V8M5 12H2a10 10 0 0020 0h-3",
      title:"Teaching Assistant, ME 316, Applied Thermodynamics",
      para:"Prepare assignments, quizzes, and examination papers. Weekly tutorials assist the students in their course projects, under institute TA duty."
    },
    {
      circle:{x:"12",y:"7",r:"4"},
      path:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
      title:"Teaching Assistant, ME 209 Thermodynamics",
      para:"Prepare assignments, quizzes, and examination papers. Weekly tutorials assist the students in their course projects, under institute TA duty."
    }
  ]

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
                PMRF Teaching Deliverables
              </h1>
              <section className="text-gray-400  body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap">

                  {
                    data.map((item,index)=> {
                      return(
                        <div key={item.path} className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-400 text-white relative z-10 title-font font-medium text-sm">
                      {index+1}
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
                           <circle cx={item.circle.x} cy={item.circle.y} r={item.circle.r}></circle>
                          <path d={item.path}></path>
                        </svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-white mb-1 text-xl">
                          {item.title}
                        </h2>
                        <p className="leading-relaxed">
                          {item.para}
                        </p>
                      </div>
                    </div>
                  </div>
                      )
                    })
                  }
                  
                </div>
              </section>
            </div>
          </motion.div>
    </>
  )
}

export default TeachingExp