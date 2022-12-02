import React from "react";

const Testimonial = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container xl:mt-12 mx-auto">
          <h1 className="text-3xl md:text-5xl xl:text-6xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold font-PlayFair bg-gradient-to-r from-white to-sky-100/70 p-2 opacity-100 text-center mb-10">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            {/* test-1 */}
            <div className="p-4 md:w-1/2 w-11/12 m-auto">
              <div className="h-full bg-gradient-to-r border-[1px] border-white from-[#111827]/90 to-[#29054a]/50 rounded-2xl p-8 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-blue-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p
                  className="leading-relaxed mb-6 text-white text-sm md:text-lg hover:drop-shadow-2xl bg-opacity-50 first-letter:text-7xl first-letter:text-[#AEFEFF]
  first-letter:mr-3 first-letter:float-left text-justify"
                >
                  Mr. Mayank Maroliya is quite ambitious and career-driven. He
                  works hard to accomplish his goals and is committed to his
                  work. He is emotionally mature, confident & good-natured. I
                  have known him for the past three years as an undergraduate
                  student, his B. Tech Project Supervising faculty, and one of
                  his course coordinators at Inidan Institute of Technology
                  Indore. He is pretty interactive and endorses the discussions
                  with cogency and natural ease.
                </p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col ">
                    <span className="title-font font-medium text-white">
                      Dr. Devendra Deshmukh, Associate Professor
                    </span>
                    <span className="text-yellow-500 text-sm">
                      Department of Mechanical Engineering, Indian Institute of
                      Technology, Indore.
                    </span>
                  </span>
                </a>
              </div>
            </div>
            {/* test-2 */}
            <div className="p-4 md:w-1/2 w-11/12 m-auto">
              <div className="h-full bg-gradient-to-l border-[1px] border-white from-[#111827]/90 to-[#29054a]/50 rounded-2xl p-8 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-blue-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p
                  className="leading-relaxed mb-6 text-white text-sm md:text-lg hover:drop-shadow-2xl bg-opacity-50 first-letter:text-7xl first-letter:text-[#AEFEFF]
  first-letter:mr-3 first-letter:float-left text-justify"
                >
                  Mr. Mayank has a well-groomed personality, and a specific
                  focus on his future, and is a Ph.D. scholar under my
                  supervision at IIT Bombay. He greatly understands subjects and
                  often proved his conceptual ability and creative outlook
                  during project discussions. He always comes up with new ideas
                  and used to post intelligent questions. Throughout
                  discussions, he is extremely diligent and meticulous. He is a
                  PMRF fellow and has excellent academic records.
                </p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col">
                    <span className="title-font font-medium text-white">
                      Dr. Sandip K. Saha, Professor
                    </span>
                    <span className="text-yellow-500 text-sm">
                      Department of Mechanical Engineering, Indian Institute of
                      Technology Bombay.
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
