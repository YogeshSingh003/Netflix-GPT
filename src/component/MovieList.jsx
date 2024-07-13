import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="overflow-x-hidden px-6  text-white ">
      <h1 className="text-3xl font-bold py-6">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-none">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
