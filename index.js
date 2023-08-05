const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const { treatments } = require("./models/product.schema");
const server = express();
server.use(express.json());
server.use(cors());
require("dotenv").config();
let port = process.env.port;

server.get("/covid", async (req, res) => {
  const products = await covid.find();
  res.send(products);
});

server.post("/add", async (req, res) => {
  treatments.create(req.body)
  res.send("success");
});

server.listen(port, () => {
  console.log(`Server is running`);
  connect();
});
