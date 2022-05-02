const express = require("express");
const router = require("./controller/routes/routes");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at the ${port}`);
});
