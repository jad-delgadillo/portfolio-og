import Image from "next/image";
import React from "react";

const MusicCampaigns = (props: any) => {
  return (
    <div className="">
      <Image
        alt=""
        src={`/assets/trailers/${props.item.coverImg}`}
        width={400}
        height={605}
        layout="intrinsic"
        className="rounded-2xl"
      />
      <div className="p-1 mt-2">{props.item.title}</div>
    </div>
  );
};

export default MusicCampaigns;
