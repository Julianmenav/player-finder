import React from "react";
import SearchBar from "./SearchBar";

export default function () {
  return (
    <div className="flex flex-col pt-24 items-center">
      <div className="py-6 bg-zinc-700/80 px-16 max-w-5xl rounded-md shadow-md mb-6">
        <p className="text-center font-bold text-white">Player not found</p>
      </div>
      <SearchBar />
    </div>
  );
}
