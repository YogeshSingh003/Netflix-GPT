import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../Utils/gptSlice";
import { API_OPTION } from "../Utils/constant";

const GPTSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [promptResponses, setpromptResponses] = useState("");
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const getResponseForGivenPrompt = async () => {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const query =
        "Act as a movie recommendation system and suggest some movies for the query : " +
        inputValue +
        "only give me names, comma seprated like Pathaan, Sholey, Kabhi khushi kabhi gam. give latest and updated data ";

      const result = await model.generateContent(query);
      setInputValue("");
      const response = result.response;
      const text = response.text();
      // setpromptResponses([...promptResponses,text]);
      setpromptResponses(text);
      const gptMovies = text.split(",");
      console.log(gptMovies);
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(
        addGptMovieResults({ movieNames: gptMovies, movieList: tmdbResults })
      );

      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log("Something Went Wrong");
      setLoading(false);
    }
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-9 rounded"
          type="text"
          placeholder="What would you like to watch today?"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button
          className="text-white col-span-3 m-4 py-2 px-2 rounded-lg ml-0 bg-red-700"
          onClick={getResponseForGivenPrompt}
        >
          Search
        </button>
        {loading ? (
          <div className="text-center mt-3">
            <div className="" role="status">
              <span className=" text-white">Loading...</span>
            </div>
          </div>
        ) : (
          <p className="text-center text-white col-span-12">
            {promptResponses}
          </p>
        )}
      </form>
    </div>
  );
};

export default GPTSearchBar;
