"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-700">
              Hello, I am Victor
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I Build",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                "I Invest",
                1500,
                "I Paint",
                1500,
                "I Unite",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg lg:text-xl mb-6">lorem</p>
          <div>
            <button className="w-full sm:w-fit  px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-900 via-blue-600 to-emerald-700">
              Hire Me
            </button>
            <button className="px-1 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-200 text-white  mt-3 bg-gradient-to-br from-blue-900 via-blue-600 to-emerald-700">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
