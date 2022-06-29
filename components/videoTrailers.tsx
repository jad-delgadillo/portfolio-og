import React from "react";

const VideoTrailers = (props: any) => {
  return (
    <div>
      <video controls autoPlay loop playsInline className="absolute w-[70%]">
        <source
          // src="/assets/videos/1.mp4"
          src={`/assets/videos/${props.item.id}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoTrailers;
