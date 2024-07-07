import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div>
      <div className="flex flex-col justify-center w-full h-screen gap-4 px-6">
        <h1 className="text-5xl font-bold">{title}</h1>
        <div>
          <button className="bg-black font-medium  border-[3px] text-white px-4 py-2 rounded-md">
            ▶️Play
          </button>
          <button
            className="bg-black font-medium  border-[3px] text-white px-4 py-2 rounded-md"
            onClick={handleShowInfo}
          >
            More info
          </button>
          {showInfo && <p className="w-1/3">{overview}</p>}
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
