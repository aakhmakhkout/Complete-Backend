// this file is used to create a server

const express = require("express");

const app = express();

const notes = []; // array of notes (objects)

app.post("/notes", (req, res) => {
  console.log(req.body);
});

module.exports = app;
