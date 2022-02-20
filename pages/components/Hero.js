import React from "react";

const Hero = (props) => {
  return (
    <>
      <header className="bg-[#021732] shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-100">Welocome to <br/> to my Portfolio</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" >
              {/* Remaining Tasks */}
              <ul className="p-5">
                <li>About</li>
                <li>projects</li>
                <li>Blogs</li>
                <li>Skills</li>
              </ul>
            </div>
          </div>
          
        </div>
      </main>
      
    </>
  );
};

export default Hero;
