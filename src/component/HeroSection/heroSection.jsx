import React from "react";
import profile from "../../images/profile.png";
const HeroSection = () => {
  return (
    <section className="h-screen w-full bg-[#F4F0E4] flex justify-center items-center">
      <div className="flex justify-center items-center  gap-14 ">
        <div className="leading-[4.5] text-[#5a855f] m-6">
            <span className="text-5xl my-5 "> Hey! I'm
            <b className="text-6xl text-[#5a855f] text-center"> Subina Gurung</b>
          </span>
          <br />
          <span className="text-5xl font-normal ">
            Graphic Designer & Frontend Developer
          </span>
          
          
          <p className="text-xl">
            Passionate designer and developer creating beautiful and functional
            digital experiences.
          </p>
        </div>
        <div className="h-[390px] w-[390px]  overflow-hidden rounded-full bg-[#d3ecdc] flex justify-center items-center">
          <img src={profile} alt="subina profile" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
