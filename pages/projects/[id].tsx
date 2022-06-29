import React from "react";

const Id = (props: any) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      yes
      <video controls autoPlay loop playsInline className="absolute w-[70%]">
        <source
          src="/assets/videos/1.mp4"
          // src={`/assets/videos/${props.id}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Id;
