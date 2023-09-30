require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const { getSummonerData } = require("./middleware/summoner");

const PORT = process.env.PORT ?? 3001;

const corsOptions = {
  origin: process.env.CORS
}

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.get("/:summonerName", getSummonerData);

app.listen(PORT, () => {
  console.log(`Server connected to port ${PORT}`);
});
