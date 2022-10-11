import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({example}) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

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

  return (
    <div className="shadow-md flex flex-col items-center p-3 bg-slate-50 rounded-md w-5/6 max-w-lg border border-black">
      <input
        className="my-2 bg-neutral-100 text-center border-2 w-3/4"
        type="text"
        onChange={handleChange}
        value={user}
      ></input>
      <button
        className="bg-blue-200 min-w-fit px-4 py-2 rounded text-center shadow-md hover:bg-blue-300 transition-colors active:translate-y-1"
        onClick={searchUser}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
