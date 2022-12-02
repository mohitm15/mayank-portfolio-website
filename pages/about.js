import React, { useEffect } from "react";
import Image from "next/image";
import imgurl from "../public/mayank.png";
import imgurl2 from "../public/satelite.png";
import { motion } from "framer-motion";

import Skills from "./components/aboutPage/skills";
import ResearchInterest from "./components/aboutPage/researchInterest";
import TeachingExp from "./components/aboutPage/teachingExp";
import Positions from "./components/aboutPage/positions";

const About = () => {
  useEffect(() => {
    document.title = "Mayank Maroliya | About";
  }, []);

  //TODO 1Myskills, Reseach Interrests, Teaching Experience, Leadership, form more download resume

  return (
    <>
      <div className="min-h-full">
        {/* <Header /> */}
        <div className="max-w-7xl mx-auto  shadow">
          <div className="px-4 py-6 sm:px-0 flex flex-col lg:flex-row">
            <div className="max-w-4xl mx-auto sm:py-10  sm:px-6 lg:px-8 ">
              <Image
                src={imgurl}
                width="325"
                height="405"
                className="opacity-80 object-cover object-top"
              />
            </div>
            <div className="max-w-7xl mx-auto md:py-5 lg:py-20 px-4 sm:px-2 lg:px-2">
              <h2 className="text-4xl md:text-6xl xl:text-8xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold font-PlayFair bg-gradient-to-r from-white to-sky-500/10 p-2">
                My Name is <br /> Mayank Maroliya
              </h2>
            </div>
          </div>
          <div className="px-5 container text-center mx-auto">
            <p className="text-sm sm:text-2xl  text-gray-100/80 font-light tracking-wider leading-normal pb-4 lg:pb-8 hover:text-white hover:drop-shadow-2xl text-justify">
              This is <strong>Mayank Maroliya</strong>. Currently, I am pursuing
              doctoral studies (Ph.D.) in the Mechanical Engineering department
              at IIT Bombay under Prime Minister's Research Fellowship (PMRF)
              scheme. I'm working in the area of{" "}
              <span className="underline underline-offset-[4px] decoration-pink-300">
                solid-solid phase change materials for thermal management
              </span>{" "}
              . Previously, I had done my undergrad at the Indian Institute of
              Technology Indore in Mechanical Engineering. Skilled in CAD
              Designing and Computational heat transfer, my passion aligns with
              my devotion to analysing and simulating Engineering problems.
            </p>
          </div>

          {/* satelite img */}
          <motion.div
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 5 }}
            className=" w-40 xl:w-60 h-30 mx-auto mb-5 hover:drop-shadow-2xl"
          >
            <Image src={imgurl2} layout="responsive" alt="satelite" />
          </motion.div>

          

          {/* skills */}
          <Skills />

          {/*Research Interest */}
          <ResearchInterest />

          {/* teaching exp */}
          <TeachingExp />

          {/*LeaderShip */}
          <Positions />
        </div>

        <div className="w-1/5 h-[2px] mx-auto my-10 hover:drop-shadow-2xl"></div>
      </div>
    </>
  );
};

export default About;
