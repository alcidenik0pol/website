"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left sm:justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-700">
              Hello, I am Victor
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "I Build",
                1500,
                "I Invest",
                1500,
                "I Paint",
                1500,
                "I Engage",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg lg:text-xl mb-6">
            Based in NYC. Previously: 7 years Singapore, 8 years Japan.
          </p>
          <div>
            {/* <Link href="#contact" passHref>
              <button className="w-full sm:w-fit  px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-primary-500 to-secondary-700">
                Contact Me
              </button>
            </Link> */}
            {/* <button className="inline-block px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-200 text-white  mt-3 bg-gradient-to-br from-primary-500 to-secondary-700">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button> */}
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {/* <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"> */}
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
