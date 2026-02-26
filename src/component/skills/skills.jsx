import React from "react";

const Skills = () => {
  return (
    <div className="min-h-screen w-full py-20 px-6 bg-gray-100 " id="skills">
  <div className="max-w-6xl mx-auto">
    
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-bold text-[#5a855f] mb-16 text-center">
      My Skills
    </h2>

    {/* Skills Container */}
    <div className="grid md:grid-cols-2 gap-12">
      
      {/* Skill Item */}
      <div className="space-y-10">
        
        {/* JavaScript */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              {/* <img src={js} alt="JavaScript" className="w-7 h-7" /> */}
              <span className="text-lg font-semibold">JavaScript</span>
            </div>
            <span className="text-lg font-medium">75%</span>
          </div>

          <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
            <div className="bg-[#5a855f] h-3 rounded-full w-[75%] transition-all duration-1000 ease-out"></div>
          </div>
        </div>

        {/* Canva */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
            
              <span className="text-lg font-semibold">CSS</span>
            </div>
            <span className="text-lg font-medium">90%</span>
          </div>

          <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
            <div className="bg-[#5a855f] h-3 rounded-full w-[90%] transition-all duration-1000 ease-out"></div>
          </div>
        </div>

        {/* Figma */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold">HTML5</span>
            </div>
            <span className="text-lg font-medium">95%</span>
          </div>

          <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
            <div className="bg-[#5a855f] h-3 rounded-full w-[95%] transition-all duration-1000 ease-out"></div>
          </div>
        </div>


      </div>

      {/* Right Column */}
      <div className="space-y-10">
        
        {/* CSS */}
        

        <div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold">Canva</span>
            </div>
            <span className="text-lg font-medium">90%</span>
          </div>

          <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
            <div className="bg-[#5a855f] h-3 rounded-full w-[90%] transition-all duration-1000 ease-out"></div>
          </div>
        </div>


        <div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold">Figma</span>
            </div>
            <span className="text-lg font-medium">90%</span>
          </div>

          <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
            <div className="bg-[#5a855f] h-3 rounded-full w-[90%] transition-all duration-1000 ease-out"></div>
          </div>
        </div>

        {/* HTML */}
        
      </div>

    </div>
  </div>
</div>
  );
};

export default Skills;
