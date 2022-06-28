import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col max-w-7xl min-h-screen items-center justify-center m-auto">
      <div className="flex flex-col justify-start w-screen max-w-7xl ">
        <a href="#_" className="w-[60px] ml-10 p-1">
          <Image
            alt="logo"
            src={"/assets/logo.png"}
            width={50}
            height={50}
            layout="responsive"
          />
        </a>
      </div>
      <div className="flex flex-row ">
        <nav className="md:flex flex-col max-w-2xl w-60 pt-20 mr-20 text-right hidden">
          <a href="#_" className="relative group">
            <span className="absolute w-0 h-[1px] top-5 group-hover:w-16 transition-all ease-out duration-300 bg-black"></span>
            <span className="relative group-hover:w-full transition-all ease-out duration-300 ">
              Projects
            </span>
          </a>
          <a href="#_" className="relative group my-10">
            <span className="absolute w-0 h-[1px] top-5 group-hover:w-20 transition-all ease-out duration-300 bg-black"></span>
            <span className="relative group-hover:w-full transition-all ease-out duration-300 ">
              About me
            </span>
          </a>
          <a href="#_" className="relative group">
            <span className="absolute w-0 h-[1px] top-5 group-hover:w-[66px] transition-all ease-out duration-300 bg-black"></span>
            <span className="relative group-hover:w-full transition-all ease-out duration-300 ">
              Contact
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
