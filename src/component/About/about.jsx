import React from "react";
import subey from "../../images/subey.jpeg";
const About = () => {
  return (
    <div className="bg-gray-100 py-20 px-6" id="about">
  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <h3 className="text-4xl font-bold text-center text-[#5a855f] mb-16">
     About Me
    </h3>

    {/* Content */}
    <div className="flex flex-col md:flex-row items-center gap-12">

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={subey}
          alt="Subina's profile"
          className="w-56 h-56 object-cover rounded-full shadow-xl border-4 border-white"
        />
      </div>

      {/* Text */}
      <div className="text-gray-700 text-lg leading-relaxed max-w-2xl">
        <p>
          I am a passionate Web Designer and Frontend Developer who enjoys
          creating clean, modern, and user-friendly websites. I focus on
          building responsive and visually appealing interfaces using HTML,
          CSS, JavaScript, and modern frameworks. My goal is to combine
          creativity with functionality to deliver smooth and engaging digital
          experiences that help businesses bring their ideas to life.
        </p>
      </div>

    </div>
  </div>
</div>
  );
};

export default About;
