// this file is used to create a server

const express = require("express"); //is a CommonJS function in Node.js that allows us to load code from another module or package so we can use it in our current file.

const app = express();
app.use(express.json()); //express.json() is a built-in Express middleware that reads incoming JSON data from a request body and converts it into a JavaScript object that we can access using req.body.

const notes = []; // array of notes (objects)

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);

  res.status(201).json({
    message: "note added",
  }); //request successful, created a new resource in backend
});

app.get("/notes", (req, res) => {
  // res.send(notes);
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];

  res.status(200).json({
    message: "note deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const description = req.body.description;
  const title = req.body.title;
  notes[index].title = title;
  notes[index].description = description;

  res.status(200).json({
    message: "note updated successfully",
  });
});
module.exports = app; //module.exports is used in CommonJS to decide what a file makes available to other files.
