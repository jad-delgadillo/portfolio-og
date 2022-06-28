import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen m-auto justify-center items-center bg-amber-50">
      <div className="flex md:flex-row flex-col m-auto max-w-7xl w-screen items-center justify-center min-h-screen md:mt-0 mt-10 p-7">
        <div className="block lg:w-[5000px] md:w-[6000px] w-[80vw] md:pr-10">
          <Image
            src={"/assets/profile-2.JPG"}
            width={500}
            height={700}
            layout={"responsive"}
            className="rounded-xl"
          />
          <p className="font-extralight text-justify w-auto md:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sodales varius tellus vel efficitur. Nam velit nulla, molestie vel
            orci quis, eleifend porta mauris. Suspendisse in ultrices augue, sit
            amet tristique libero. Nunc bibendum, nisi non ornare dignissim,
            erat eros laoreet metus, maximus laoreet dolor elit ac est.
            Phasellus luctus sollicitudin hendrerit. Cras blandit dui sed
            dignissim porttitor. Quisque et vulputate nibh, bibendum commodo
            lectus. Proin sodales non odio et egestas. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vivamus laoreet aliquet venenatis. In interdum sapien
            mauris. In vitae metus nulla. Donec est tellus, molestie quis
            scelerisque a, facilisis sit amet justo. Etiam et metus ac justo
            auctor ultricies.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl">My name is Jorge Delgadillo</h1>
          <p className="font-extralight text-justify hidden md:flex">
            I'm from the city of Guadalajara in México, but here is a photo of
            me in Greece because I love to travel consectetur adipiscing elit.
            Donec sodales varius tellus vel efficitur. Nam velit nulla, molestie
            vel orci quis, eleifend porta mauris. Suspendisse in ultrices augue,
            sit amet tristique libero. Nunc bibendum, nisi non ornare dignissim,
            erat eros laoreet metus, maximus laoreet dolor elit ac est.
            Phasellus luctus sollicitudin hendrerit. Cras blandit dui sed
            dignissim porttitor. Quisque et vulputate nibh, bibendum commodo
            lectus. Proin sodales non odio et egestas. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vivamus laoreet aliquet venenatis. In interdum sapien
            mauris. In vitae metus nulla. Donec est tellus, molestie quis
            scelerisque a, facilisis sit amet justo. Etiam et metus ac justo
            auctor ultricies.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
