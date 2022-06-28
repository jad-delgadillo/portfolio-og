import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div className="flex flex-col min-h-screen w-screen max-w-7xl justify-center items-start border-t-2 border-black p-7 md:p-0">
      <h1 className="text-5xl font-medium mb-20 underline-offset-3 underline">
        projects
      </h1>
      <div className="flex flex-row md:justify-start justify-center">
        <div className="flex flex-col w-[70%] justify-center items-center font-extralight">
          <Image
            alt="Hostile Planet Natgeo Tv Series Poster"
            src={"/assets/trailers/Hostile-Planet-natgeo.jpg"}
            width={400}
            height={605}
            className="rounded-2xl"
          />
          <div className="p-1 mt-2">
            Hostile Planet - Worldwide Broadcast Campaign
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
