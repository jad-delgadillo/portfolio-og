import React from "react";
import Campaign from "../../../components/Campaigns";
import Container from "../../../components/Container";

import thumbHostile from "../../../public/assets/trailers/Hostile-Planet-Natgeo.jpg";
import thumbClover from "../../../public/assets/trailers/cloverfield-paradox.jpg";
import thumbMike from "../../../public/assets/trailers/magicmikelive.jpg";
import thumbIsYou from "../../../public/assets/trailers/alliseeisyou.jpg";

export default function MediaProjects() {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center max-w-7xl p-7">
          <div className="text-center">
            <a className="relative group  hover:tracking-widest">
              <h1 className="text-7xl cursor-default font-medium">
                <span className="absolute hidden md:flex w-0 h-[120%] group-hover:w-full transition-all ease-out duration-300 bg-black"></span>
                <p className="relative group-hover:w-full  md:hover:text-white hover:text-indigo-500 transition-all ease-out duration-300 ">
                  {" "}
                  Media Projects{" "}
                </p>
              </h1>
            </a>
            <p className="py-10 tracking-wider">
              I had the fortune to work on this media campaigns doing the
              composition and production of the music.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <Campaign
              id="HostilePlanet"
              title="Hostile Planet"
              description="Worldwide Broadcast Campaign"
              thumbnail={thumbHostile}
            ></Campaign>
            <Campaign
              id="CloverField"
              title="Cloverfield Paradox"
              description="Worldwide Broadcast Campaign"
              thumbnail={thumbClover}
            ></Campaign>
            <Campaign
              id="MagicMike"
              title="Magic Mike Las Vegas"
              description="Show Campaign"
              thumbnail={thumbMike}
            ></Campaign>
            <Campaign
              id="IsYou"
              title="All I See is You"
              description="Tonight Show with Jimmy Fallon"
              thumbnail={thumbIsYou}
            ></Campaign>
          </div>
        </div>
      </Container>
    </div>
  );
}
