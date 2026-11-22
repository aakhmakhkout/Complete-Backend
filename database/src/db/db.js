const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://user1:user16677@backendjourney.ojb6rhm.mongodb.net/notesdb",
  );

  console.log("Connected to DB");
}

module.exports = connectDB;
