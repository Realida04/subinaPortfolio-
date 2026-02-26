import React from "react";

const Skills = () => {
  return (
   <div className="min-h-screen w-full bg-[#F4F0E4] ">
<div className=" flex flex-col justify-center items-center gap-10 p-10">
  <span className="text-5xl font-bold text-[#5a855f] ">
    My Skills
  </span>

  <div className="w-full max-w-md space-y-7">

    {/* JavaScript */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xl font-semibold">JavaScript</span>
        <span className="text-x">75%</span>
      </div>
      <div className="w-full bg-gray-300 h-2 rounded-full">
        <div className="bg-[#5a855f] h-2 rounded-full w-[75%] transition-all duration-1000"></div>
      </div>
    </div>

    {/* Canva */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xl font-semibold">Canva</span>
        <span className="text-x">90%</span>
      </div>
      <div className="w-full bg-gray-300 h-2 rounded-full">
        <div className="bg-[#5a855f] h-2 rounded-full w-[90%] transition-all duration-1000"></div>
      </div>
    </div>

    {/* Figma */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xl font-semibold">Figma</span>
        <span className="text-x">85%</span>
      </div>
      <div className="w-full bg-gray-300 h-2 rounded-full">
        <div className="bg-[#5a855f] h-2 rounded-full w-[85%] transition-all duration-1000"></div>
      </div>
    </div>

    {/* CSS */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xl font-semibold">CSS</span>
        <span className="text-x">90%</span>
      </div>
      <div className="w-full bg-gray-300 h-2 rounded-full">
        <div className="bg-[#5a855f] h-2 rounded-full w-[90%] transition-all duration-1000"></div>
      </div>
    </div>

    {/* HTML */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xl font-semibold">HTML5</span>
        <span className="text-sm">95%</span>
      </div>
      <div className="w-full bg-gray-300 h-2 rounded-full">
        <div className="bg-[#5a855f] h-2 rounded-full w-[95%] transition-all duration-1000"></div>
      </div>
    </div>

  </div>
  </div>
</div>
  );
};

export default Skills;
