import { useParams } from "react-router";
import useMovieTrailer from "../hooks/useMovieTrailer";

const PlayVideo = () => {
  const videoId = useParams();
  console.log(videoId);

  const trailer = useMovieTrailer(videoId.videoId);
  console.log(trailer);

  return (
    <div className="w-screen h-screen overflow-hidden ">
      {trailer ? (
        <iframe
          className="w-screen -mt-20 aspect-video   "
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?autoplay=1&mute=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <div>Video Not Available</div>
      )}
    </div>
  );
};

export default PlayVideo;
