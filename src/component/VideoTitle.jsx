import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div>
      <div className="flex absolute  flex-col justify-center w-full bg-gradient-to-r from-black text-white h-full gap-4 px-16">
        <h1 className="text-5xl font-bold">{title}</h1>
        <div>
          {showInfo && <p className="w-[29%] pb-4">{overview}</p>}
          <button className="bg-white font-medium  text-lg text-black px-10 mr-2 py-2 rounded-md">
            Play
          </button>
          <button
            className="bg-gray-500 bg-opacity-40 font-medium  text-lg text-white px-10 py-2 rounded-md"
            onClick={handleShowInfo}
          >
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
