require("dotenv").config();
const express = require("express");
const { dataRouter } = require("./routes/data.route");
const app = express();

app.use(express.json());
app.use("/data", dataRouter);
app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(process.env.PORT, async (req, res) => {
  console.log(`running at port ${process.env.PORT}`);
});
