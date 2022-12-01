import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Courses = () => {
  useEffect(() => {
    document.title = "Mayank Maroliya | Courses";
  }, []);

  return (
    <>
      <div className="min-h-full">
        {/* <Header /> */}
        <div className=" mx-auto shadow container">
          <div className="px-4 py-6 sm:px-0">
            <div className="mx-auto md:pt-20 md:pb-5 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-6xl xl:text-8xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold font-PlayFair  bg-gradient-to-r from-white to-sky-500/10 p-2 text-center">
                Courses @ IIT Bombay
              </h2>
            </div>
            <div>
              <p className="text-base lg:text-xl text-center py-2 md:py-5 font-extralight">
                All courses I have undertaken at IIT Bombay are listed here.
              </p>
            </div>

            <div className="p-2 border-[1px] border-red-400/20 mx-auto bg-[url('../public/stars2.jpg')]">
              {/* main container od cards */}
              <div className="flex flex-col ">
                {/* first 2 set */}
                <div className="-mx-4 flex flex-col items-stretch lg:flex-row">
                  {/* car1 */}
                  <div className="flex-1 p-4">
                    {/* first car */}
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
                                  {" "}
                                  Autumn Semester | 2021-22{" "}
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
                                <tr>
                                  <td className="px-2 py-2">ME 651</td>
                                  <td className="px-2 py-2">
                                    Fluid Dynamics
                                  </td>
                                </tr>

                                <tr>
                                  <td className="px-2 py-2">ME 663</td>
                                  <td className="px-2 py-2">
                                    Advanced Heat Transfer
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-2 py-2">ME 673</td>
                                  <td className="px-2 py-2">
                                    Mathematical Modelling and Engineering
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-2 py-2">ME 899</td>
                                  <td className="px-2 py-2">
                                    Communication Skills
                                  </td>
                                </tr>
                                
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  {/* car2 */}
                  <div className="flex-1 p-4">
                    {/* sec card */}
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
                                  {" "}
                                  Spring Semester | 2021-22{" "}
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
                                <tr>
                                  <td className="px-2 py-2">ME 683</td>
                                  <td className="px-2 py-2">
                                    Cryogenic Engineering
                                  </td>
                                </tr>

                                <tr>
                                  <td className="px-2 py-2">ME 769</td>
                                  <td className="px-2 py-2">
                                    Combustion in Automobiles & Gas Turbines
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-2 py-2">MES 802</td>
                                  <td className="px-2 py-2">
                                    Course Seminar
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-2 py-2">GEC 101</td>
                                  <td className="px-2 py-2">
                                  Gender in the workplace
                                  </td>
                                </tr>
                                
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* second 2 set */}
                <div className="-mx-4 flex flex-col items-stretch lg:flex-row">
                  {/* car1 */}
                  <div className="flex-1 p-4">
                    {/* first car */}
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
                                  {" "}
                                  Autumn Semester | 2022-23{" "}
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
                                <tr>
                                  <td className="px-2 py-2">ME 662</td>
                                  <td className="px-2 py-2">
                                Convective Heat Transfer	

                                  </td>
                                </tr>

                                <tr>
                                  <td className="px-2 py-2">AE 780</td>
                                  <td className="px-2 py-2">
                                  Computational Heat Transfer and Fluid Flow

                                  </td>
                                </tr>
                                
                                
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  {/* car2 */}
                  <div className="flex-1 p-4">
                    {/* sec card */}
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
                                  {" "}
                                  Spring Semester | 2022-23{" "}
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
                                <tr>
                                  <td className="px-2 py-2">TBD</td>
                                  <td className="px-2 py-2">
                                    TBD
                                  </td>
                                </tr>

                                <tr>
                                  <td className="px-2 py-2">TBD</td>
                                  <td className="px-2 py-2">
                                  TBD
                                  </td>
                                </tr>
                                
                                
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
