import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import bgImg from "../media/Background.jpg";
import { useState } from "react";

const GPTSearchPage = () => {
  const [gradient, setGradient] = useState(false);
  return (
    <div className={gradient ? "bg-gradient-to-r from-black" : ""}>
      <img
        src={bgImg}
        alt="Background"
        className="w-full h-full fixed -z-20 object-cover object-center"
      />
      <GPTSearchBar />
      <GPTMovieSuggestion setGradient={setGradient} />
    </div>
  );
};

export default GPTSearchPage;
