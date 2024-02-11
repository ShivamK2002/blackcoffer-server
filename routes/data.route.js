const express = require("express");
const { DataModel } = require("../models/data.model");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MY_MONGO_URL);

const dataRouter = express.Router();
dataRouter.get("/", async (req, res) => {
  try {
    let data = await DataModel.find().limit(6);
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(404).send({ msg: "Something went wrong" });
  }
});

module.exports = {
  dataRouter,
};
