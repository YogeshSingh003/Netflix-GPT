import { useSelector } from "react-redux";
import useFetchMovieList from "../hooks/useFetchMovieList";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../Utils/moviesSlice";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const nowPlayingMoviesAPI =
    "https://api.themoviedb.org/3/movie/now_playing?page=1";
  const popularMoviesAPI = "https://api.themoviedb.org/3/movie/popular?page=1";
  const upcomingMoviesAPI =
    "https://api.themoviedb.org/3/movie/upcoming?page=1";
  const topRatedMoviesAPI =
    "https://api.themoviedb.org/3/movie/top_rated?page=1";

  useFetchMovieList(nowPlayingMoviesAPI, addNowPlayingMovies);
  useFetchMovieList(popularMoviesAPI, addPopularMovies);
  useFetchMovieList(upcomingMoviesAPI, addUpcomingMovies);
  useFetchMovieList(topRatedMoviesAPI, addTopRatedMovies);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log(showGptSearch);
  return (
    <div>
      <div className="overflow-x-hidden">
        <Header />
        {showGptSearch ? (
          <GPTSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </div>
  );
};
export default Browse;
