import React from "react";

const Video = () => {
  return (
      <video
        className="h-full w-full object-cover rounded-full"
        src="../public/videos/home.mp4"
        autoPlay
        loop
        muted
      ></video>
  );
};

export default Video;
