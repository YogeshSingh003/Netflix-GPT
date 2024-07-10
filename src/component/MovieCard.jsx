import { IMG_CDN_URL } from "../Utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
