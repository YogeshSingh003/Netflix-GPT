import { useEffect } from "react";
import { API_OPTION } from "../Utils/constant";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (idOfMovie) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          idOfMovie +
          "/videos?language=en-US",
        API_OPTION
      );
      const json = await data.json();

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
