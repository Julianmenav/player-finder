import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Search from "../Components/Search";



const Navigation = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/:summonerName" element={<Search />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default Navigation;
