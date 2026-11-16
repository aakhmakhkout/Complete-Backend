// this file is used to create a server

const express = require("express"); //is a CommonJS function in Node.js that allows us to load code from another module or package so we can use it in our current file.

const app = express();

const notes = []; // array of notes (objects)

app.post("/notes", (req, res) => {
  console.log(req.body);
});

module.exports = app; //module.exports is used in CommonJS to decide what a file makes available to other files.
