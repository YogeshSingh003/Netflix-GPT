import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
      
        <input
        className="p-4 m-4 col-span-9 rounded"
          type="text"
          placeholder="What would you like to watch today?"
        ></input>
        <button className="text-white col-span-3 m-4 py-2 px-2 rounded-lg ml-0 bg-red-700">Search</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
