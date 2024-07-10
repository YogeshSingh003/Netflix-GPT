import useFetchMovieList from "../hooks/useFetchMovieList";
import { addNowPlayingMovies, addPopularMovies } from "../Utils/moviesSlice";
import Header from "./Header";
import MainContainer from "./MainContainer";

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
  useFetchMovieList(upcomingMoviesAPI, addPopularMovies);
  useFetchMovieList(topRatedMoviesAPI, addPopularMovies);

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};
export default Browse;
