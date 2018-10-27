const mongoose = require("mongoose");
const db = require("../models");

// This file empties the NFLTeam collection and inserts the teams below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactnflTeamlist"
);

const nflTeamSeed = [
  {
    teamName: "IND",
    teamCity: "Dome"
  },
  {
    teamName: "ARI",
    teamCity: "Dome"
  },
  {
    teamName: "ATL",
    teamCity: "Dome"
  },
  {
    teamName: "BAL",
    teamCity: "Baltimore"
  },
  {
    teamName: "CLE",
    teamCity: "Cleveland"
  },
  {
    teamName: "BUF",
    teamCity: "Buffalo"
  },
  {
    teamName: "CAR",
    teamCity: "Charlotte"
  },
  {
    teamName: "CHI",
    teamCity: "Chicago"
  },
  {
    teamName: "CIN",
    teamCity: "Cincinnati"
  },
  {
    teamName: "DAL",
    teamCity: "Dome"
  },
  {
    teamName: "DEN",
    teamCity: "Denver"
  },
  {
    teamName: "DET",
    teamCity: "Dome"
  },
  {
    teamName: "GB",
    teamCity: "Green Bay"
  },
  {
    teamName: "HOU",
    teamCity: "Dome"
  },
  {
    teamName: "JAX",
    teamCity: "Jacksonville"
  },
  {
    teamName: "KC",
    teamCity: "Kansas City"
  },
  {
    teamName: "LAC",
    teamCity: "Los Angeles"
  },
  {
    teamName: "LAR",
    teamCity: "Los Angeles"
  },
  {
    teamName: "MIA",
    teamCity: "Miami"
  },
  {
    teamName: "MIN",
    teamCity: "Dome"
  },
  {
    teamName: "NE",
    teamCity: "Foxborough"
  },
  {
    teamName: "NO",
    teamCity: "Dome"
  },
  {
    teamName: "NYG",
    teamCity: "East Rutherford"
  },
  {
    teamName: "NYJ",
    teamCity: "East Rutherford"
  },
  {
    teamName: "PHI",
    teamCity: "Philadelphia"
  },
  {
    teamName: "OAK",
    teamCity: "Oakland"
  },
  {
    teamName: "PIT",
    teamCity: "Pittsburgh"
  },
  {
    teamName: "SEA",
    teamCity: "Seattle"
  },
  {
    teamName: "SF",
    teamCity: "Santa Clara"
  },
  {
    teamName: "TB",
    teamCity: "Tampa"
  },
  {
    teamName: "TEN",
    teamCity: "Nashville"
  },
  {
    teamName: "WAS",
    teamCity: "Landover"
  }
];

db.NFLTeam.remove({})
  .then(() => db.NFLTeam.collection.insertMany(nflTeamSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
