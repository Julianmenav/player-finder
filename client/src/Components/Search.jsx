import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const Search = () => {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true);
  const { summonerName } = useParams();

  useEffect(() => {
    console.log(summonerName);
    async function loadData() {
      await api
        .get(`/${summonerName}`)
        .then((res) => setUserData(res.data))
        .catch((e) => {
          setError(true);
          console.error(e);
        });

      setLoading(false);
    }

    loadData();
  }, [summonerName]);

  return loading ? (
    <h1>Cargando...</h1>
  ) : error ? (
    <h1>El usuario que buscas no existe</h1>
  ) : (
    <>
      <h2>Nombre: {summonerName}</h2>
      <h2>Nivel: {userData.summonerLevel}</h2>
      <h2>Rank: {userData.rankData[0].tier}</h2>
      <img src={userData.profileIcon} alt="" />
    </>
  );
};

export default Search;
