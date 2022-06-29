import React from "react";
import VideoTrailers from "../../components/videoTrailers";

const Id = (props: any) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <VideoTrailers key={item.id} item={item} />
    </div>
  );
};

export default Id;
