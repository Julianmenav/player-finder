import React, { useEffect, useState } from "react";

const GuideText = ({ callback }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, []);

  return (
    <div className={`mx-auto max-w-xs mt-16 shadow-md flex flex-col p-3 bg-zinc-800/60 rounded-xl w-4/6 transition-opacity duration-1000 ${show ? "opacity-100" : "opacity-0"}`}>
      <p className="text-center text-sm font-bold text-white">Si no conoces ningún nombre, puedes probar con estos...</p>
      <button onClick={callback} className="bg-white text-black font-bold py-1 rounded shadow-md hover:bg-sky-900 hover:text-white transition-colors active:translate-y-1 w-1/3 mx-auto mt-2 border border-cyan-400">
        Probar
      </button>
    </div>
  );
};

export default GuideText;
