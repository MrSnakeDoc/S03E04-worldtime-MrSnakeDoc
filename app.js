const express = require("express");
let ejs = require("ejs");
const config = require("./config");
const router = require("./router");
const app = express();

app.use(router);
app.set("views", "./views");
app.set("view engine", "ejs");
app.listen(config.port, async () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});
