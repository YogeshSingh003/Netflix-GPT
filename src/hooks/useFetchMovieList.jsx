import { useDispatch } from "react-redux";
import { API_OPTION } from "../Utils/constant";
import { useEffect } from "react";

const useFetchMovieList = (apiLink, movieListFunction) => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(apiLink, API_OPTION);
    const json = await data.json();

    dispatch(movieListFunction(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useFetchMovieList;
