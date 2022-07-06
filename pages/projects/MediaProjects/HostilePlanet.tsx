import Image from "next/image";
import React from "react";
import Container from "../../../components/Container";

export default function HostilePlanet() {
  const meta = {
    title: "Hostile Planet",
    description: "Worldwide Broadcast Campaign",
  };
  return (
    <div>
      <Container>
        <div className="block p-5">
          <a href="../../projects/MediaProjects/HostilePlanet">
            {/* <Image
              src={"/assets/trailers/Hostile-Planet-Natgeo.jpg"}
              width={400}
              height={605}
              layout="intrinsic"
              className="rounded-lg"
            /> */}
          </a>
          <video
            src="/assets/videos/hostile.mp4"
            controls
            className="rounded-xl"
          ></video>
          <h1 className="text-lg font-medium">{meta.title}</h1>
          <p className="font-extralight">{meta.description}</p>
        </div>
      </Container>
    </div>
  );
}
