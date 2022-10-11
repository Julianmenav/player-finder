import React, { useEffect, useState } from "react";
import GuideText from "./GuideText";
import SearchBar from "./SearchBar";

const Home = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [example, setExample] = useState("");
  const examples = ["javi1310", "josemaSYT", "ŽINK12345678910", "Kyxx"]

  useEffect(() => {
    setTimeout(() => {
      setShowGuide(true);
    }, 3500)
    
  }, []);

  const provideExample = () => {
    const randomNumber = Math.floor(Math.random() * examples.length)
    const newExample = examples[randomNumber]
    if (newExample == example) return provideExample();

    setExample(newExample);
  }

  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="mt-12 md:mt-24 mx-8 rounded-xl p-7 bg-gray-800 shadow-2xl max-w-md md:max-w-xl xl:max-w-2xl">
        <h1 className="font-bold text-center text-white text-4xl md:text-6xl xl:text-6xl">League of Legends player finder</h1>
      </div>
      <p className="mt-6 mb-10 mx-10 text-lg text-center text-white font-bold max-w-lg">
        Introduce el nombre de un jugador para ver sus datos mediante la API de Riot Games.
      </p>
      <SearchBar example={example}/>
      {showGuide ? <GuideText show={showGuide} callback={provideExample}/> : null}
    </div>
  );
};

export default Home;
