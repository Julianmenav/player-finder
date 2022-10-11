import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const searchUser = () => {
    if (user == "") return;
    navigate(`/${user}`);
  };

  return (
    <>
      <input type="text" onChange={handleChange}></input>
      <button onClick={searchUser}>Buscar</button>
    </>
  );
};

export default Home;
