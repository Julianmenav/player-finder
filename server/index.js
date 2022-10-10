require("dotenv").config();

const express = require("Express");
const app = express();
const { getSummonerData } = require("./middleware/summoner");

const PORT = process.env.PORT ?? 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.get("/:summonerName", getSummonerData);

app.listen(PORT, () => {
  console.log(`Server connected to port ${PORT}`);
});
