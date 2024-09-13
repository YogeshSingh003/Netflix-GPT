import { useEffect, useState } from "react";
import { API_OPTION } from "../Utils/constant";

const useMovieTrailer = (idOfMovie) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        // Fetch trailer data
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            idOfMovie +
            "/videos?language=en-US",
          API_OPTION
        );
        const json = await data.json();

        // Filter data where trailer is available
        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailer(trailer);
      } catch (error) {
        console.log("Error");
      }
    };
    getMovieVideos();
  }, [idOfMovie]);

  return trailer;
};

export default useMovieTrailer;
