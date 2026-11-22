const express = require("express");
const noteModel = require("../models/note.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(); // returns array or ob jects or empty array if no data
  const specificNote = await noteModel.findOne({
    title: "note 2", // if condition doesn't match we get null value in return ({} or null)
  });

  res.status(200).json({
    message: "Notes fetching successfull",
    notes: notes,
    specificNote: specificNote,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;

  await noteModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      title: title,
      description: description,
    },
  );

  res.status(200).json({
    message: "note patched successfully",
  });
});
module.exports = app;
