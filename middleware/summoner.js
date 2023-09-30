require("dotenv").config();
const axios = require("axios");

const euwURL = process.env.EUW_URL;
const lolIconURL = process.env.LOL_ICONS;

const getSummonerData = async (req, res) => {
  const { summonerName } = req.params;

  const summonerData = await axios
    .get(`${euwURL}/lol/summoner/v4/summoners/by-name/${summonerName}`, {
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY,
      },
    })
    .catch((error) => {
      console.error(error.response.data);
      return res.status(error.response.status).json(error.response.data);
    });

  if( summonerData.data == undefined) return;

  const { id, profileIconId, summonerLevel } = summonerData.data;
  
  const rankData = await axios
    .get(`${euwURL}/lol/league/v4/entries/by-summoner/${id}`, {
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY,
      },
    })
    .catch((error) => {
      console.error(error.response.data);
      return res.status(error.response.status).json(error.response.data);
    });

  
    
  const iconURL = `${lolIconURL}/${profileIconId}.png`
  return res.json({summonerName, summonerLevel, profileIcon : iconURL, rankData : rankData.data});
};

module.exports = { getSummonerData };
