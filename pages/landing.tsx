import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col md:max-w-7xl max-w-md min-h-screen md:items-center md:justify-center pt-32 md:pt-0 m-auto border-b border-black">
      <div className="absolute top-20 -left-4 w-96 h-96 bg-yellow-300 mix-blend-multiply filter blur-2xl opacity-90 rounded-full animate-blob"></div>
      <div className="absolute top-20 left-80 w-96 h-96 bg-purple-300 mix-blend-multiply filter blur-2xl opacity-90 rounded-full animate-blob animation-delay-2000"></div>
      <div className="absolute top-80 left-20 w-96 h-96 bg-pink-300 mix-blend-multiply filter blur-2xl opacity-90 rounded-full animate-blob animation-delay-4000"></div>
      <div className="flex flex-col relative justify-start items-start m-auto ">
        <h1 className="md:text-[5vw] text-[9vw] font-medium cursor-default p-7 md:p-0 leading-tight">
          <a href="#_" className="relative group">
            <span className="absolute hidden md:flex w-0 h-[100%] group-hover:w-full transition-all ease-out duration-300 bg-black"></span>
            <span className="relative group-hover:w-full md:hover:text-white hover:text-indigo-500 transition-all ease-out duration-300 ">
              {" "}
              Hello👋 I'm Jorge,{" "}
            </span>
          </a>
          <br />
          <span className="relative group-hover:w-full group hover:text-amber-300 hover:underline-offset-2 transition-all ease-out duration-300">
            {" "}
            a
            <span className="relative group-hover:w-full group-hover:text-yellow-400 hover:underline-offset-2 transition-all ease-out duration-300">
              {" "}
              software
            </span>{" "}
            <span className="relative group-hover:w-full hover:text-amber-300 hover:underline-offset-2 transition-all ease-out duration-300">
              {" "}
              engineer
            </span>{" "}
          </span>{" "}
          <br />
          <span className="relative group-hover:w-full  group hover:text-red-400 transition-all ease-out duration-300">
            {" "}
            that loves to
            <span className="relative group-hover:text-red-500 transition-all ease-out duration-300">
              {" "}
              code
            </span>{" "}
          </span>{" "}
          <br />
          <span className="relative group group-hover:w-full hover:text-blue-400 transition-all ease-out duration-300">
            {" "}
            and{" "}
            <span className="group-hover:text-green-500 group-hover:ring-2 ring-green-500 rounded-xl px-2 transition-all ease-out duration-300">
              solve
            </span>{" "}
            real world{" "}
            <span className="group-hover:text-blue-500 transition-all rounded-xl ease-out duration-300">
              problems.
            </span>
          </span>{" "}
        </h1>
        {/* <button className="bg-indigo-500 hover:bg-indigo-300 transition-all p-3 rounded-xl text-white mt-5">
          Contact me
        </button> */}
      </div>
    </div>
  );
};
export default Landing;
