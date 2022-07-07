import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen m-auto justify-center items-center bg-amber-50">
      {/* <h1 className="text-7xl font-medium pb-2">About me</h1> */}
      <div className="flex md:flex-row flex-col m-auto max-w-7xl w-screen items-center justify-center min-h-screen md:mt-0 mt-10 p-7">
        <div className="block md:w-[80%] w-[80vw] md:pr-10  ">
          <Image
            src={"/assets/Profile-Greece.jpg"}
            width={500}
            height={500}
            layout={"responsive"}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col md:p-0 p-2 md:w-[50vw] text-lg">
          <h1 className="text-xl font-medium">
            <span className="text-5xl font-medium">
              Jorge <br className="" />
              Delgadillo
            </span>
          </h1>
          <div className="border border-black my-7"></div>
          <p className=" text-justify">
            I'm a full-stack developer who has recently started my journey as a
            web developer.
            <div className="py-5">
              I'm a self-motivated learner with strong organisation, time
              management & communication skills.
            </div>
            I'm able to work independently & collaboratively in a team with a
            meticulous attention to detail.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
