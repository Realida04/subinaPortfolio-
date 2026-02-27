import React from "react";

const Experience = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 py-16 px-6" id="experience">
  <div className="max-w-5xl mx-auto space-y-16">
<span className="text-4xl md:text-5xl font-bold text-[#5a855f] mb-20">Work Experience & Education</span>
  
    <div>
      
      <h3 className="text-xl md:text-3xl font-bold text-[#5a855f] mb-16 border-b-2 border-gray-300 pb-2">
        Experience
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
      
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
          <span className="text-xl font-semibold text-gray-900">
            Zylux IT Solution
          </span>
          <p className="text-gray-600 mt-2">Sales Manager</p>
          <p className="text-sm text-gray-500 mt-1">
            Jan 2025 - Present
          </p>
        </div>

       
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
          <span className="text-xl font-semibold text-gray-900">
            Cloud Web
          </span>
          <p className="text-gray-600 mt-2">Graphic Designer</p>
          <p className="text-sm text-gray-500 mt-1">
            Feb 2023 - Dec 2024
          </p>
        </div>
      </div>
    </div>

    
    <div>
      <h3 className="text-xl md:text-3xl font-bold text-[#5a855f] mb-16 border-b-2 border-gray-300 pb-2">
        Education
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
       
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
          <span className="text-xl font-semibold text-gray-900">
            Bachelor in Information Technology (BIT)
          </span>
          <p className="text-gray-600 mt-2">
            Purbanchal University
          </p>
          <p className="text-gray-600">
            Aryan College of Engineering
          </p>
          <p className="text-sm text-gray-500 mt-1">
            2022 - Present
          </p>
        </div>

       
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
          <span className="text-xl font-semibold text-gray-900">
            Science (Biology)
          </span>
          <p className="text-gray-600 mt-2">
            Higher Secondary Education
          </p>
          <p className="text-gray-600">
            Moliss, Kumaripati
          </p>
          <p className="text-sm text-gray-500 mt-1">
            2020 - 2022
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
  );
};

export default Experience;
