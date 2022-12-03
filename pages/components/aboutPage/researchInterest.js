import React from 'react';
import { motion } from "framer-motion";

const ResearchInterest = () => {
  const data = [
    "IC Engines","Heat Transfer & CFD","Numerical Modeling","Thermodynamics","Cryogenic Engineering","CAE & CAD Design",
    "Waste Heat Recovery Systems","PCM-based Energy Storage Systems","Design & dynamics of Heat Exchangers"
  ]
  return (
    <>
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
                    {
                      data.map((item,index)=>{
                        return(
                          <div key={index} className="xl:w-1/3 md:w-1/2 w-full p-4">
                      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 className="text-lg text-white font-extrabold title-font mb-2">
                          0{index+1}
                        </h2>
                        <p className="leading-relaxed text-base">{item}</p>
                      </div>
                    </div>
                        )
                      })
                    }
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
    </>
  )
}

export default ResearchInterest