import Image from "next/image";
import React from "react";
import MusicCampaigns from "../components/musicCampaigns";
import data from "../src/dataCamapigns";
import { motion, Variants } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -50, opacity: 0 },
  onscreen: {
    opacity: 1,
    x: 0,
  },
};

function Projects() {
  const posters = data.map((item, i) => {
    return (
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.7 }}
        transition={{
          duration: 0.1,

          delay: i * 0.1,
        }}
        variants={imageAnimate}
        className="py-16 p-10 text-left transition-all "
      >
        <div className="hover:scale-[103%] transition-all">
          <MusicCampaigns key={item.id} item={item} />
        </div>
      </motion.div>
    );
  });

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.7 }}
      transition={{
        duration: 0.1,

        delay: 0.1,
      }}
      variants={imageAnimate}
      className="flex flex-col min-h-screen w-screen max-w-7xl justify-center border-t-2 border-black p-7 md:p-0"
    >
      <h1 className="text-8xl font-medium mb-16">Projects</h1>
      <h1>
        Here you can find some projects I had the fortune to have participated
        composing and producing the music for.
      </h1>
      <div className="flex md:flex-row flex-col">{posters}</div>
    </motion.div>
  );
}

export default Projects;
