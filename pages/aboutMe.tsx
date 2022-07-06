import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen m-auto justify-center items-center bg-amber-50">
      <div className="flex md:flex-row flex-col m-auto max-w-7xl w-screen items-center justify-center min-h-screen md:mt-0 mt-10 p-7">
        <div className="block lg:w-[5000px] md:w-[6000px] w-[80vw] md:pr-10">
          <h1 className="text-7xl font-medium pb-2">About me</h1>
          <Image
            src={"/assets/Profile-Greece.jpg"}
            width={500}
            height={500}
            layout={"responsive"}
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col md:p-0 p-2">
          <h1 className="text-xl font-medium">
            <span className="text-5xl font-medium">
              Jorge <br className="" />
              Delgadillo
            </span>
          </h1>
          <div className="border border-black my-7"></div>
          <p className="font-extralight text-justify">
            I'm from the city of{" "}
            <span className="font-medium">Guadalajara, </span>
            <span className="font-medium">México, </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sodales varius tellus vel efficitur. Nam velit nulla, molestie vel
            orci quis, eleifend porta mauris. Suspendisse in ultrices augue, sit
            amet tristique libero. Nunc bibendum, nisi non ornare dignissim,
            erat eros laoreet metus, maximus laoreet dolor elit ac est.
            Phasellus luctus sollicitudin hendrerit. Cras blandit dui sed
            dignissim porttitor. Quisque et vulputate nibh, bibendum commodo
            lectus.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
