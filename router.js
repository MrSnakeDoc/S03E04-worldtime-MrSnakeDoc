const express = require("express");
const path = require("path");
const tz = require("./src/timeZones");
const capitalCities = require("./src/capitalCities");
const router = express.Router();
module.exports = router;
router.use(express.static("public"));

router.use("/favicon.ico", function (req, res) {
  res.status(204);
  res.end();
});

router.get("/", (req, res) => {
  res.render("index", { capitalCities });
});

router.use("/city/:town", (req, res) => {
  let response = tz.chooseTZ(req.params.town.toLowerCase());
  let town = response[0];
  let timeDate = response[1];
  res.render("capitales", { town, timeDate });
});
