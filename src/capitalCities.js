const capitalCities = [
  {
    name: "Paris",
    tz: "Europe/Paris",
    format: "dddd DD MMMM YYYY  HH:mm:ss z",
    lang: "fr",
  },
  {
    name: "Londres",
    tz: "Europe/London",
  },
  {
    name: "Washington",
    tz: "US/Eastern",
  },
  {
    name: "Beijing",
    tz: "Asia/Shanghai",
  },
  {
    name: "Moscou",
    tz: "Europe/Moscow",
    format: "dddd DD MMMM YYYY  HH:mm:ss z",
    lang: "ru",
  },
  {
    name: "Casablanca",
    tz: "Africa/Casablanca",
    format: "z HH:mm:ss YYYY MMMM DD dddd",
    lang: "ar-ma",
  },
  {
    name: "Tokyo",
    tz: "Asia/Tokyo",
    format: "dddd, MMMM Do YYYY HH:mm:ss z",
    lang: "ja",
  },
  {
    name: "Kolkata",
    tz: "Asia/Kolkata",
    format: "dddd, MMMM Do YYYY HH:mm:ss z",
    lang: "hi",
  },
];

// On exporte notre module afin qu'il soit accessible depuis l'exterieur
module.exports = capitalCities;
