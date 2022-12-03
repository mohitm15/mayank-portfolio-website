import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CourseTable from "./components/coursePage/courseTable";

const Courses = () => {
  useEffect(() => {
    document.title = "Mayank Maroliya | Courses";
  }, []);

  const courses = [
    {
      sem: {
        title:"Autumn Semester | 2021-22",
        courseitem:[
          {code:'ME 651',name:"Fluid Dynamics"}, {code:'ME 663',    name:"Advanced Heat Transfer"},{code:'ME 673',name:"Mathematical Modelling and Engineering"},{code:'ME 899',name:"Communication Skills"}
        ] 
      }
    },
    {
      sem: {
        title:"Spring Semester | 2021-22",
        courseitem:[
          {code:'ME 683',name:"Cryogenic Engineering"}, {code:'ME 769',name:"Combustion in Automobiles & Gas Turbines"},{code:'MES 802',name:"Course Seminar"},{code:'GEC 101',name:"Gender in the workplace"}
        ] 
      }
    },
    {
      sem: {
        title:"Autumn Semester | 2022-23",
        courseitem:[
          {code:'ME 662',name:"Convective Heat Transfer"}, {code:'AE 780',    name:"Computational Heat Transfer and Fluid Flow"}
        ] 
      }
    },
    {
      sem: {
        title:"Spring Semester | 2022-23",
        courseitem:[
          {code:'TBD',name:"TBD"}, {code:'TBD',    name:"TBD"}
        ] 
      }
    },

  ]

  return (
    <>
      <div className="min-h-full">
        {/* <Header /> */}
        <div className=" mx-auto shadow container">
          <div className="px-4 py-6 sm:px-0">
            <div className="mx-auto md:pt-20 md:pb-5 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold font-PlayFair  bg-gradient-to-r from-white to-sky-500/10 p-2 text-center">
                Courses @ IIT Bombay
              </h2>
            </div>
            <div>
              <p className="text-base lg:text-xl text-center py-2 md:py-5 font-extralight">
                All courses I have undertaken at IIT Bombay are listed here.
              </p>
            </div>

            <div className="p-2 border-[1px] border-red-400/20 mx-auto bg-[url('../public/stars2.jpg')]">

              <div className="flex flex-col ">
                {/* first 2 set */}

                <div className="-mx-4 flex flex-col items-stretch lg:flex-row">  
                  <div className="flex-1 p-4">
                    <CourseTable data={courses[0]} />
                  </div>    
                  <div className="flex-1 p-4">
                    <CourseTable data={courses[1]} />
                  </div>
                </div>

                {/* second 2 set */}
                <div className="-mx-4 flex flex-col items-stretch lg:flex-row">
                  <div className="flex-1 p-4">
                    <CourseTable data={courses[2]} />
                  </div>
                  <div className="flex-1 p-4">
                    <CourseTable data={courses[3]} />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
