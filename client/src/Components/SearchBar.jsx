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
      <div className="mt-10 rounded-md flex flex-row overflow-hidden m-auto w-full max-w-3xl shadow-lg">
        <input className="text-sm py-4 px-4 flex-1 placeholder-slate-300 rounded-l-md" type="text" value={user} onChange={handleChange} onKeyDown={handleEnter} ref={inputRef} placeholder="Nombre de un jugador..."></input>
        <button className="border-l border-black bg-gray-500 font-monse text-white text-xl px-2 hover:bg-gray-300 hover:text-gray-600" onClick={searchUser}>
          GO
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
