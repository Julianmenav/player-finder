import React, { useEffect, useState } from "react";
import GuideText from "./GuideText";
import SearchBar from "./SearchBar";

const Home = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [example, setExample] = useState("");
  const examples = import.meta.env.VITE_SAMPLE_PLAYERS.split(";");

  useEffect(() => {
    setTimeout(() => {
      setShowGuide(true);
    }, 3000);
  }, []);

  const provideExample = () => {
    const randomNumber = Math.floor(Math.random() * examples.length);
    const newExample = examples[randomNumber];
    if (newExample == example) return provideExample();

    setExample(newExample);
  };

  return (
    <div className="pt-14 flex flex-col justify-center items-center">
      <h1 className="text-6xl sm:text-8xl lg:text-9xl text-white font-monse bg-dark-blue px-0.5">LOL FIND</h1>
      <SearchBar example={example} />
      {true && <GuideText show={showGuide} callback={provideExample} />}
    </div>
  );
};

export default Home;
