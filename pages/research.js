import React, { useEffect } from "react";
import Header from "./components/Header";
import Image from "next/image";
import imgurl from "../public/dog.jpg";
import { motion } from "framer-motion";

const data = [
  {
    sno: 1,
    author: "Mayank Maroliya",
    history: "July 2021 - Present",
    likes: 20,
    title: "Development & Application of Solid Solid-PCM for Thermal Management of Electronics.",
    subtitle:"Dr. Sandip K. Saha, Professor, IIT Bombay",
    content: `The project aims to develop a novel solid-solid phase change material for the spacecraft cooling system with the stability of PCM of more than 1000 thermal cycles. Second, to determine the optimum percentage of thermal conductivity enhancer. Third, to develop a reliable and optimally sized hybrid (SS-PCM and heat pipe) honeycomb panel for better isothermalization of the electronics chips at 35-45°C. Fourth, to develop a detailed numerical model of solid-solid phase change material to assess the dynamic melting behaviour. Fifth, to develop an experimental setup consisting of solid-solid PCM and heat pipe in a honeycomb panel, and last, to characterize the thermal performance of honeycomb panels experimentally under continuous and cyclic loading. To evaluate the efficacy of SS-PCM in comparison with solid-liquid (SL)-PCM. For more details, go through the attached write-up.
    `,
    link: "https://drive.google.com/file/d/1RyF0Ro7tkMgCcvKuZWFldQWyUsDqn_Ts/view?usp=sharing",
    disable:true,
  },
  {
    sno: 2,
    author: "Mayank Maroliya",
    history: "Dec. 2020 - June 2021",
    likes: 41,
    title: "Development of a model for energy storage and recovery in cold start engine",
    subtitle:"Dr. Devendra Deshmukh, Associate Professor, IIT Indore",
    content: `The aim is to find potential solutions for storing exhaust waste energy using phase change material & utilizing it to recover the cold start of an engine. Developed a detailed numerical model in the MATLAB environment and validated it with the experimental results. We also submitted a conference paper at the National Conference on IC Engines & Combustion (NCICEC)-2021. For more details, go through the attached write-up.`,
    link: "https://drive.google.com/file/d/1kdE-MtEGR6kw-WdLLPrgixbuOZ6Vj53W/view?usp=sharing",
    disable:false,
  },
  {
    sno: 3,
    author: "Mayank Maroliya",
    history: "Feb 2021- Apr 2021",
    likes: 30,
    title: "Investigation of PCM-based Organic Rankine Cycle for Diesel Engine Waste Heat Recovery",
    subtitle:"Dr. Devendra Deshmukh, Mr. Varshil Parikh, Spray & Combustion Lab, IIT Indore.",
    content: `Developed & validated a simulation model that governs the ORC-WHR system’s performance for different PCMs & working fluid. I Majorly work in research paper writing and assisting in evaluating numerical results. We submitted the paper to the International Journal of Thermal Science and the manuscript is under review. For more details, go through the attached write-up.`,
    link: "https://drive.google.com/file/d/156LJtulgajYUwXhNwyLKbeH80jae0E2K/view?usp=sharing",
    disable:false,
  },
  {
    sno: 4,
    author: "Mayank Maroliya",
    history: "Sept. 2019 – May 2021",
    likes: 13,
    title: "Development of a standalone, accurate, and portable Sphygmomanometer",
    subtitle:"Dr. Devendra Deshmukh, Associate Professor, IIT Indore.",
    content: `The objective is to develop an accurate, portable & standalone Sphygmomanometer with a remote monitoring facility using the Korotkoff sound method. I majorly worked on algorithm development, Data Analysis, Fabrication & technical writing part.  We also filed a patent for the device & device is under medical review. For more details, go through the attached write-up.`,
    link: "https://drive.google.com/file/d/1NOp7taxPGrUK_tUAiGqgq7Cmw8uHuHb3/view?usp=sharing",
    disable:false,
  },
  {
    sno: 5,
    author: "Mayank Maroliya",
    history: "Nov. 2019 - Dec. 2019",
    likes: 13,
    title: "DIC’s Terrace Farming Challenge",
    subtitle:"Robotics, Machine Design, CAD, FEA, and Product Manufacturing",
    content:"This project is one of the key problem statements for one of the major events at the 8th Inter IIT Tech Meet, held at IIT Roorkee. I worked as a Design & Manufacturing team Head, designing & analyzing a novel lightweight farming robot for terrace farms capable of climbing up and down the stairs & able to perform all other farming operations too. For more details, go through the attached write-up.",
    link: "https://drive.google.com/file/d/1m8rtXv4WukTz__RzMSVrZP9WKibXMEuw/view?usp=sharing",
    disable:false,
  },

];

const Research = () => {
  useEffect(() => {
    document.title = "Mayank Maroliya | Research Work";
  }, []);

  return (
    <>
      <div className="min-h-full">
        {/* <Header /> */}
        <div className=" mx-auto  shadow">
          <div className="px-4 py-6 sm:px-0 ">
            <div className="mx-auto py-10 xl:py-20 px-4 sm:px-6 lg:px-8 ">
              <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold font-PlayFair bg-gradient-to-r from-white to-sky-500/10 p-2 text-center">
              Welcome to My Research Work and Major Projects
              </h2>
            </div>
            <div className="container mx-auto">
              <motion.div
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-2 sm:space-y-7 lg:space-y-10 justify-center items-center "
              >
                {data.map((element) => {
                  return (
                    <div
                      key={element.sno}
                      className="border-2 border-white py-4 lg:py-6 xl:py-10 px-4 lg:px-6 xl:px-10 w-full lg:w-4/5 xl:w-9/12  bg-[url('../public/stars.jpg')]"
                    >
                      <div className="flex flex-row space-x-4 items-center">
                        <Image
                          src={imgurl}
                          width="35"
                          height="35"
                          className="rounded-2xl border-2 border-white"
                        />
                        <h3 className="font-medium text-lg">
                          {element.author} &nbsp;|
                        </h3>
                        <h3 className="font-extralight text-lg">
                          {element.history}
                        </h3>
                      </div>
                      <div className="py-4 flex flex-col space-y-5">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
                          {element.title}
                        </h2>
                        <h5 className=" text-yellow-300 text-sm xl:text-lg ">
                          {element.subtitle}
                        </h5>
                        <p className="leading-relaxed lg:text-base xl:text-lg">
                          {element.content}
                        </p>
                      </div>
                      <div className="m-auto mt-3 xl:mt-10 text-center">
                        <button className="border-2 border-white p-2 xl:px-4 xl:py-3 uppercase text-sm xl:text-base lg:text-sm hover:bg-slate-700 drop-shadow-3xl">
                          { element.disable ? <a href="" target="_blank">
                            Read full post
                            </a> : 

                            <a href={element.link} target="_blank">
                            Read full post
                            </a>
                          }
                        </button>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
