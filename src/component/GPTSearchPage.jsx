
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import bgImg from "../media/Background.jpg";


const GPTSearchPage = () => {
  return (
    <div>
      <img
        src={bgImg}
        alt="Background"
        className="w-full h-full absolute -z-20 object-cover object-center"
      />
    <GPTSearchBar/>
    <GPTMovieSuggestion/></div>
  )
}

export default GPTSearchPage;