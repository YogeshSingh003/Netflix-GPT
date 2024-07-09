import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div>
      <div className="flex absolute aspect-video flex-col justify-center w-screen bg-gradient-to-r from-black text-white h-full gap-4 px-6">
        <h1 className="text-5xl font-bold">{title}</h1>
        <div>
          {showInfo && <p className="w-1/4">{overview}</p>}
          <button className="bg-black font-medium  border-[3px] text-white px-4 py-2 rounded-md">
            ▶️Play
          </button>
          <button
            className="bg-black font-medium  border-[3px] text-white px-4 py-2 rounded-md"
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
