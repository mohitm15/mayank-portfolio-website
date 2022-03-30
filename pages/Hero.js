import React, {useEffect} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import imgurl from "../public/planet.png";
import imgurl2 from "../public/planet2.png";
import { useMediaQuery } from "@material-ui/core";

const Hero = () => {

  useEffect(() => {
    document.title = "Mohit | Home"
  }, [])
  

  const isMobileorTablet = useMediaQuery("(max-width:1024px)") ;
  //if your screen size is bigger than 1024px it returns false, otherwise it returns true

  const mountainVariant = {
    animate: {
      x : [0,-500],
      transition: {
        x: {
          repeat:Infinity,
          repeatType:"loop",
          ease:"linear",
          duration:4
        }
      }
    }
  }

  const planet1motion = isMobileorTablet ? {
    x: [-100, 150, 200, 250, 350, 400],
    y: [-400, -440, -480, -540, -600, -650],
  }:{
    x: [0, 200, 300, 400, 500, 700, 850, 1000, 1200, 1400, 1600],
    y: [-300, -340, -380, -440, -500, -550, -620, -700, -800, -900],
  }

  const planet2motion = isMobileorTablet ? {
    x: [400, 300, 250, 200, 150, 0],
    y: [-650, -600, -500, -440, -420, -400],
  } : {
    x: [1600, 1556.8, 1494.4, 1440, 1433.6, 1352, 1288, 1163.2, 1124.8, 1036.8, 960, 880, 827.2, 800, 736, 696,640, 576, 480, 392, 329.6, 240, 160, 80, 0, -80, -160],
    y: [-886.68, -840, -809.4, -756, -720, -659.92, -605.88, -513.6, -480, -432, -398.4, -360, -337.4, -326.16, -301.08, -286.44, -267, -250.08, -218.64, -195.84, -181.2, -162, -146.52, -126, -120, -108.6],
  }

  const starmotion = isMobileorTablet ? {
    x:[100,-100],y:[-170,-170]
  } : {x:[1700,-550],y:[0,0]}

  return (
    <>
      <main className="bg-[url('../public/stars3-1.png')]">
        <div className="max-w-7xl mx-auto shadow ">
          <div className="px-4 py-6 sm:px-0">
            <div className="max-w-8xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:flex-row">
                <span>
                  <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2 opacity-100">
                    Welcome To <br /> My Personal PortFolio
                  </h2>
                </span>
                {/* Shooting star disabled */}
                {/* <motion.span animate={starmotion} transition={{ repeat: Infinity, repeatType: "loop", duration: isMobileorTablet ? 1:3, interval:3 }}  className="before:absolute before:-translate-y-2/4 before:w-72 before:h-px before:bg-gradient-to-r mt-px before:from-white absolute w-2 h-2 opacity-90 bg-white rounded-lg shadow-5xl animate-star hidden xl:block"></motion.span> */}
              </div>
              <div className="w-full text-justify sm:text-clip md:w-4/5 xl:w-3/5 p-3 hover:drop-shadow-2xl bg-opacity-50">
                <p className="text-sm sm:text-xl text-gray-100/80 font-light sm:tracking-wider z-10 opacity-100">
                  Hello everyone, I am Mohit Maroliya. I am a Indian-based
                  Software Developer who has a slight inclination building
                  websites with good UI. Most of the time you can find me
                  writting code, playing chess and doing cycling.
                </p>
                <p className="text-sm sm:text-xl text-gray-100/80 font-light sm:tracking-wider mt-3 lg:mt-5">
                  Visit this website to know about me more.
                </p>
              </div>

              <div className="py-4 sm:py-8 px-3 space-y-3 space-x-0 sm:space-y-0 sm:space-x-10 opacity-100">
                <Link href="/about ">
                  <button className="text-white text-lg sm:text-xl font-bold py-3 px-6 bg-gradient-to-r from-teal-500/75 to-purple-500/50 rounded-2xl hover:border-[1px] border-white hover:drop-shadow-3xl ">
                    Learn More
                  </button>
                </Link>
                <button className="text-white text-lg sm:text-xl font-bold py-3 px-6 bg-gradient-to-r from-teal-500/75 to-purple-500/50 rounded-2xl hover:border-[1px] border-white hover:drop-shadow-3xl">
                  <a
                    href="https://drive.google.com/u/0/uc?id=18w36fVGMM2F2Vif8tEfhjG9nHLenjVsC&export=download"
                    download="Resume_Mohit_Maroliya.pdf"
                    target="_blank"
                  >
                    Download Resume{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <motion.div layout="position"
          animate={planet1motion}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 15 }}
          className="h-16 w-16 lg:h-26 lg:w-26 xl:block"
        >
          <Image
            className="opacity-70 -z-100  "
            src={imgurl}
            layout="fill"
          />
        </motion.div>
        <motion.div 
          animate={planet2motion}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 20 }}
          className="h-16 w-16 lg:h-26 lg:w-26 xl:block"
        >
          <Image
            className="opacity-70 -z-100"
            src={imgurl2}
            layout="fill"
          />
        </motion.div>
      </main>
      {/* <motion.div
        variants={mountainVariant}
        animate="animate"
        className="bg-[url('../public/removem4.png')] h-48 sm:h-60 sticky bottom-0 w-full drop-shadow-3xl bg-repeat-x min-w-[2400px] hidden xl:block"
      ></motion.div> */}
    </>
  );
};

export default Hero;
