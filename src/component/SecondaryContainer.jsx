import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.nowPlayingMovies);
  return (
    <div>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
