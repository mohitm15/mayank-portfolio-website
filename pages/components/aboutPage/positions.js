import React from "react";
import { motion } from "framer-motion";

const Positions = () => {
  const data = [
    {
      college: "IIT BOMBAY",
      title: "PMRF Research Scholar",
      desc: " Department of Mechanical Engineering",
      time: " May 2022 - Present",
    },
    {
      college: "IIT BOMBAY",
      title: "Ph.D. Placement Representative",
      desc: "Placement Team",
      time: "Sept 2022 - Present",
    },
    {
      college: "IIT INDORE",
      title: "Student Head",
      desc: "The CAE Club",
      time: "May 2019 - Oct 2020",
    },
    {
      college: "IIT BOMBAY",
      title: "Team Captain",
      desc: "Chess Team, Hostel-14",
      time: "Aug 2022 - Present",
    },
  ];
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
                {data.map((item) => {
                  return (
                    <div key={item.desc} className="p-4 lg:w-1/2">
                      <div className="h-full bg-gray-800 bg-opacity-40 hover:bg-opacity-70 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-4">
                          {item.college}
                        </h2>
                        <h1 className=" sm:text-2xl xl:text-3xl font-medium text-white mb-3">
                          {item.title}
                        </h1>
                        <p className="leading-relaxed mb-3">{item.desc}</p>
                        <a className="text-pink-400 inline-flex items-center">
                          {item.time}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Positions;
