const mongoose = require("mongoose");
const setupDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/nov-notes-app")
    .then(() => {
      console.log("connected to db");
    })
    .catch(() => {
      console.log("error connecting to the database");
    });
};

module.exports = setupDB;
