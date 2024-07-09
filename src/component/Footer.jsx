import { useState } from "react";

const Footer = () => {
  const [page, setPage] = useState(1);

  const pageIncrement = () => {
    setPage(page + 1);
    // console.log("https://api.themoviedb.org/3/movie/now_playing?page=" + page);
  };

  const pageDecrement = () => {
    setPage(page - 1);
    // console.log("https://api.themoviedb.org/3/movie/now_playing?page=" + page);
  };
  return (
    <>
      <div className="flex flex-col items-center w-full justify-center h-screen">
        <h2>{page}</h2>
        <div>
          <button
            className="border-red-700 border-[3px]"
            onClick={pageIncrement}
          >
            +
          </button>
          <button onClick={pageDecrement}>-</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
