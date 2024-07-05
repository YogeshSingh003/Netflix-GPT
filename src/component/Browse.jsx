import { useEffect, useState } from "react";
import { API_OPTION } from "../Utils/constant";
import Header from "./Header";

const Browse = () => {
  const [page, setPage] = useState(1);

  const pageIncrement = () => {
    setPage(page + 1);
    console.log("https://api.themoviedb.org/3/movie/now_playing?page=" + page);
  };

  const pageDecrement = () => {
    setPage(page - 1);
    console.log("https://api.themoviedb.org/3/movie/now_playing?page=" + page);
  };

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=" + page,
      API_OPTION
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [page]);

  return (
    <div>
      <Header />
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
    </div>
  );
};
export default Browse;
