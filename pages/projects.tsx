import Image from "next/image";
import React from "react";
import MusicCampaigns from "../components/MusicCampaigns";
import data from "../src/dataCamapigns";

function Projects() {
  const posters = data.map((item) => {
    return (
      <div className="py-16 p-10 text-center hover:scale-[105%] transition-all">
        <MusicCampaigns key={item.id} item={item} />
      </div>
    );
  });

  return (
    <div className="flex flex-col min-h-screen w-screen max-w-7xl justify-center border-t-2 border-black p-7 md:p-0">
      <h1 className="text-5xl font-medium mb-16 underline-offset-3 underline">
        projects
      </h1>
      <h1>
        Here are some projects I have the fortune to have participated composing
        and producing the music for.
      </h1>
      <div className="flex md:flex-row flex-col">{posters}</div>
    </div>
  );
}

export default Projects;
