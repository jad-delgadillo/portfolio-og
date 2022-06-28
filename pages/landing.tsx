import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col max-w-7xl min-h-screen md:items-center md:justify-center pt-32 md:pt-0 m-auto">
      <div className="flex flex-col md:justify-start w-screen max-w-7xl ">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source
            src="/assets/videos/ntgeo.mp4"
            type="video/mp4; codecs=hvc1"
          />
        </video> */}
        <a
          href="#_"
          className="md:w-[80px] w-[100px] hover:ring-1 ring-indigo-400 hover:border-indigo-400 ring-offset-4 transition-all ml-7 md:ml-4 p-5 border border-black rounded-full hover:scale-[110%] group"
        >
          <Image
            alt="logo"
            src={"/assets/ALDEM-Logo.png"}
            width={50}
            height={50}
            layout="responsive"
            className=""
          />
        </a>
      </div>
      <div className="flex flex-row ">
        <nav className="md:flex flex-col max-w-2xl w-60 pt-20 mr-20 text-right hidden">
          <a href="#_" className="relative group">
            <span className="absolute w-0 h-[1px] top-5 group-hover:w-16 transition-all ease-out duration-300 bg-black"></span>
            <span className="relative group-hover:w-full transition-all ease-out duration-300 ">
              projects
            </span>
          </a>
          <a href="#_" className="relative group my-10">
            <span className="absolute w-0 h-[1px] top-5 group-hover:w-20 transition-all ease-out duration-300 bg-black"></span>
            <span className="relative group-hover:w-full transition-all ease-out duration-300 ">
              about me
            </span>
          </a>
          <a href="#_" className="relative group">
            <span className="absolute w-0 h-[1px] top-5 group-hover:w-[66px] transition-all ease-out duration-300 bg-black"></span>
            <span className="relative group-hover:w-full transition-all ease-out duration-300 ">
              contact
            </span>
          </a>
        </nav>
        <h1 className="md:text-[5vw] text-[9vw] text-left font-medium cursor-default p-7 md:p-0">
          <a href="#_" className="relative group">
            <span className="absolute hidden md:flex w-0 h-full group-hover:w-full transition-all ease-out duration-300 bg-black"></span>
            <span className="relative group-hover:w-full md:hover:text-white hover:text-indigo-500 transition-all ease-out duration-300 ">
              {" "}
              I'm a Music Producer{" "}
            </span>
          </a>
          <span className="relative group-hover:w-full hover:text-red-600 transition-all ease-out duration-300">
            {" "}
            that loves to code
          </span>{" "}
          <span className="relative group-hover:w-full hover:text-amber-300 hover:underline-offset-2 transition-all ease-out duration-300">
            {" "}
            to create art
          </span>{" "}
          <span className="relative group group-hover:w-full hover:text-blue-400 transition-all ease-out duration-300">
            {" "}
            and{" "}
            <span className="group-hover:text-green-500 group-hover:ring-2 ring-green-500 rounded-xl px-2 transition-all ease-out duration-300">
              solve
            </span>{" "}
            real world{" "}
            <span className="group-hover:text-blue-500 transition-all  ring-red-500 rounded-xl ease-out duration-300">
              problems.
            </span>
          </span>{" "}
        </h1>
      </div>
    </div>
  );
};
export default Landing;
