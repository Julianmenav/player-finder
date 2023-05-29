import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import NotFound from "./NotFound";

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
        .then((res) => {
          setUserData(res.data);
          setError(false);
        })
        .catch((e) => {
          setError(true);
          console.error(e);
        });

      setLoading(false);
    }
    setLoading(true);
    loadData();
  }, [summonerName]);

  return loading ? (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  ) : error ? (
    <NotFound />
  ) : (
    <div className="flex flex-col items-center">
      <UserCard userData={userData} />
      <SearchBar />
    </div>
  );
};

export default Search;
