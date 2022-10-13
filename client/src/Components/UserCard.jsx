import React from "react";

const UserCard = ({ userData }) => {
  const isEmpty = (arr) => arr.length === 0;

  const noRankInfo = <div className="text-sm text-center text-gray-300">Este jugador no ha jugado partidas clasificatorias esta temporada.</div>

  const rankData = userData.rankData.map((el, idx) => (
    <div
      key={idx}
      className="m-2 h-20 p-1 rounded-md shadow-md shadow-gray-700 bg-zinc-500 flex flex-col flex-wrap justify-center"
    >
      <div>
        <span className="font-bold ">{el.queueType.split("_")[1]}</span>
        <span className="text-xs font-thin">queue</span>
      </div>
      <span className="ml-2 font-thin">
        {el.tier} {el.rank}
      </span>
      <span className="ml-2 font-thin">{el.leaguePoints}LP</span>
      <span className="mr-2 font-thin text-right">
        {el.wins}V {el.losses}L
      </span>
      <span className="mr-2 text-xs font-thin text-right">
        winrate {Math.floor((el.wins * 100) / (el.wins + el.losses))} %
      </span>
      <div></div>
    </div>
  ));

  return (
    <div className="w-80 h-96 mt-12 p-8 rounded-3xl  shadow-md shadow-gray-700 mb-5  bg-zinc-800 text-white flex flex-col items-center">
      <div className="w-full flex flex-row items-end">
        <img
          src={userData.profileIcon}
          className="w-1/3 rounded-full border-2 border-white"
        ></img>
        <span className="ml-3 text-lg">LvL: {userData.summonerLevel}</span>
      </div>
      <div className="mt-2 text-2xl self-start font-mono font-semibold weight">
        {userData.summonerName}
      </div>
      <div className="m-auto w-full flex flex-col justify-center">
          {isEmpty(rankData) ? noRankInfo : rankData}
      </div>
    </div>
  );
};

export default UserCard;
