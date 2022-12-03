import React from "react";
import { motion } from "framer-motion";

const CourseTable = (props) => {
  let course = props.data.sem;
  //console.log(props.data);
  //console.log("course = ", course);

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover: hover:to-[#b2eff7] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-out"
    >
      <div className="block h-full overflow-hidden rounded-lg border bg-gradient-to-r from-[#ffa0ae,5%] to-[#b2eff7] opacity-90 shadow-md transition ease-in-out hover:cursor-pointer hover:from-[#ffa0ae,5%] hover:to-[#b2eff7] hover:opacity-100 hover:transition hover:duration-500 sm:flex-row">
        <div className="p-4 sm:ml-16 md:ml-32 lg:ml-0">
          {/* heading */}
          <div className="-mx-2 flex flex-wrap text-center sm:mx-auto sm:mb-2">
            <div className="p-2">
              <div className="flex h-full items-center justify-center rounded-lg p-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font text-lg font-bold tracking-wide text-blue-900">
                  {course.title}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:px-4 lg:pb-2">
            <table className="whitespace-no-wrap table-auto text-left lg:w-full">
              <thead>
                <tr>
                  <th className="title-font w-1/5 rounded-tl rounded-bl bg-gray-100/50 px-4 py-3 text-sm font-medium tracking-wider text-gray-900">
                    Code
                  </th>
                  <th className="title-font w-4/5 bg-gray-100/50 px-4 py-3 text-sm font-medium tracking-wider text-gray-900">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-50/25 text-gray-800">
                {course.courseitem.map((item) => {
                  return (
                    <tr key={item.code}>
                      <td className="px-2 py-2">{item.code}</td>
                      <td className="px-2 py-2">{item.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseTable;
