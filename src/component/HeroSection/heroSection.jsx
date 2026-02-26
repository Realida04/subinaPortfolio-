import React from "react";
import profile from "../../images/profile.png";
import { Typewriter } from "react-simple-typewriter";
const HeroSection = () => {
  return (
    <section className="h-screen w-full bg-[#F4F0E4] flex justify-center items-center">
      <div className="flex justify-center items-center  gap-14 ">
        <div className="leading-[4.5] text-[#5a855f] m-6">
          <span className="text-5xl my-5 ">
            {" "}
            Hey! I'm
            <b className="text-6xl text-[#5a855f] text-center">
              {" "}
              Subina Gurung
            </b>
          </span>
          <br />
          <span className="text-5xl font-bold text-[#5a855f]">
            <Typewriter
              words={[" Graphic Designer", " Frontend Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>

          <p className="text-xl">
            Passionate designer and developer creating beautiful and functional
            digital experiences.
          </p>

          <button className="btn mt-3 px-4 py-2 text-sm rounded-lg text-white border border-[#5a855f] bg-[#5a855f] hover:bg-[#4c744f] transition cursor-pointer">
            Contact Me
          </button>
        </div>
        <div className="h-[390px] w-[390px]  overflow-hidden rounded-full bg-[#d3ecdc] flex justify-center items-center">
          <img src={profile} alt="subina profile" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
