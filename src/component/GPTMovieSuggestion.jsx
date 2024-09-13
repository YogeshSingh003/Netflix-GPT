import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = ({ setGradient }) => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieList } = gpt;

  if (movieNames) {
    setGradient(true);
  } else {
    setGradient(false);
  }

  if (!movieNames) return null;

  return (
    <>
      <div className=" ">
        <div className=" text-white h-full bg-opacity-50">
          {movieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieList[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GPTMovieSuggestion;
