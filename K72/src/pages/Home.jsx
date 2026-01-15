import React from "react";
import Video from "../components/Home/Video";
import HomeHeroText from "../components/Home/HomeHeroText";
import Paragraph from "../components/Home/Paragraph";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HomeHeroText />
        <Paragraph />
        
      </div>
    </div>
  );
};

export default Home;
