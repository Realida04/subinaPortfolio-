import React from "react";
import profile from "../../images/profile.png";
import { Typewriter } from "react-simple-typewriter";
const HeroSection = () => {
  return (
    <section className="min-h-screen w-full bg-gray-100 flex items-center px-6" id="home">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">

    {/* Left Content */}
    <div className="text-center md:text-left space-y-6">

      <h1 className="text-4xl md:text-6xl font-light text-[#5a855f] leading-tight">
        Hey! I'm <br />
        <span className="font-bold">Subina Gurung</span>
      </h1>

      <h2 className="text-2xl md:text-4xl font-semibold text-[#5a855f]">
        <Typewriter
          words={["Graphic Designer", "Frontend Developer"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      <p className="text-gray-700 text-lg max-w-xl mx-auto md:mx-0">
        Passionate designer and developer creating beautiful and functional
        digital experiences.
      </p>

      <a href="tel:+9779765568851">
        <button
          className="mt-4 px-6 py-3 rounded-lg text-white bg-[#5a855f] hover:bg-[#4c744f] transition duration-300 shadow-md hover:shadow-lg"
        >
          Contact Me
        </button>
      </a>

    </div>

    {/* Right Image */}
    <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-[#d3ecdc] flex items-center justify-center overflow-hidden shadow-xl">
      <img
        src={profile}
        alt="Subina profile"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>
  );
};

export default HeroSection;
