const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect("mongodb+srv://yashguard02:AR9Sr3gR6ohElrgm@cluster0.0hvmtfh.mongodb.net/NETMEDS")
    .then(() => {
      console.log("Connected successfully");
    })
    .catch(() => {
      console.log("Failed to connect");
    });
};

module.exports = connect;
