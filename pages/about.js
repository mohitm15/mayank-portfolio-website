import React from 'react'
import Header from './components/Header'
import Image from 'next/image';
import imgurl from '../public/dog.jpg'

const About = () => {
  return (
    <>
    <div className="min-h-full">
        <Header />
        <div className="max-w-7xl mx-auto  shadow">
          <div className="px-4 py-6 sm:px-0 flex flex-col lg:flex-row">
            <div className="max-w-4xl mx-auto sm:py-10  sm:px-6 lg:px-8 " >
              <Image src={imgurl} width="325" height="405" />
            </div>
            <div className="max-w-7xl mx-auto md:py-5 lg:py-20 px-4 sm:px-2 lg:px-2">
              <h2 className="text-4xl md:text-7xl xl:text-8xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2">
                My Name is <br /> Mohit Maroliya
              </h2>
              
            </div>
          </div>
          <div className='px-5 container text-center mx-auto'>
              <p className="text-sm sm:text-lg text-gray-100/80 font-light tracking-wider leading-normal">
                  My Name is <strong>Mohit Maroliya</strong>. I'm a Full Stack Developer. I completed my education from Indian Institute of Technology Jodhpur (2017-21) in CSE. Currently, I'm workings as a Software Development Engineer in a Software Company.
                </p>  
              </div>
        </div>
      </div>
    </>
  )
}

export default About