import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MusicCampaigns = (props: any) => {
  return (
    <a href={`/projects/${props.item.id}`} className="">
      <div className="">
        <Image
          alt=""
          src={`/assets/trailers/${props.item.coverImg}`}
          width={400}
          height={605}
          layout="intrinsic"
          className="rounded-lg"
        />
      </div>
      <div className="p-1 mt-2">{props.item.title}</div>
      <div className="px-1 text-sm font-extralight -mt-2">
        {props.item.description}
      </div>
    </a>
  );
};

export default MusicCampaigns;
