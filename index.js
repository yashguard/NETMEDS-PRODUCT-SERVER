const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const {
  covid,
  treatments,
  diabities,
  surgicals,
} = require("./models/product.schema");
const server = express();
server.use(express.json());
server.use(cors());
require("dotenv").config();
let port = process.env.port;

server.get("/", (req, res) => {
  res.send("Home page");
});

server.get("/covid", async (req, res) => {
  const products = await covid.find();
  console.log(products);
  res.send(products);
});

server.get("/diabities", async (req, res) => {
  const products = await diabities.find();
  res.send(products);
});

server.get("/surgicals", async (req, res) => {
  const products = await surgicals.find();
  res.send(products);
});

server.get("/treatments", async (req, res) => {
  const products = await treatments.find();
  res.send(products);
});

server.post("/add", async (req, res) => {
  covid.create(req.body);
  res.send("Successfully added");
});

server.listen(port, () => {
  console.log(`Server is running`);
  connect();
});
