import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // Get the trailer using the custom hook
  const trailer = useMovieTrailer(movieId);

  useEffect(() => {
    if (trailer) {
      dispatch(addTrailerVideo(trailer)); // Dispatch the trailer once it's fetched
    }
  }, [trailer, dispatch]);

  return (
    <div className="w-screen h-screen overflow-hidden ">
      {trailerVideo && (
        <iframe
          className="w-screen -mt-20 aspect-video   "
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
