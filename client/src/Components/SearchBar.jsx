import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ example }) => {
  const [user, setUser] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    setUser(example);
  }, [example]);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const searchUser = () => {
    if (user == "") return;
    navigate(`/${user}`);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      searchUser();
    }
  };

  return (
    <div className="w-full px-3">
      <div className="mt-10 flex flex-col items-center m-auto w-full max-w-3xl ">
        <div className="w-full flex shadow-lg rounded-md overflow-hidden">
          <input autoFocus className="text-sm py-4 focus:outline-none px-4 flex-1 placeholder-slate-300 rounded-l-md" type="text" value={user} onChange={handleChange} onKeyDown={handleEnter} ref={inputRef} placeholder="Nombre de un jugador..."></input>
          <button className="border-l border-black bg-gray-500 font-monse text-white text-xl px-2 hover:bg-gray-300 hover:text-gray-600" onClick={searchUser}>
            GO
          </button>
        </div>
        <p className={`text-lg px-4 py-1 font-bold text-center rounded-md bg-gray-700/90 text-white mt-3 transition-opacity duration-1000 ease-in-out delay-500 ${user == "" ? "opacity-0" : "opacity-100"}`}>No te molestes, ya no funciona.</p>
      </div>
    </div>
  );
};

export default SearchBar;
