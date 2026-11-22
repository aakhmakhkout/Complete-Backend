# MongoDB & Mongoose -- Backend Journey

A beginner-friendly guide to databases, MongoDB, MongoDB Atlas, Compass,
Mongoose, and a simple Notes CRUD API using Node.js and Express.js.

## 1. What is a Database?

A database is an organized collection of data that can be stored,
accessed, managed, and modified. Unlike JavaScript arrays that store
data temporarily in memory, databases provide persistent storage.

### Types of Databases

**Relational databases (SQL)** - Store data in tables containing rows
and columns. - Data can be connected through relationships. - Usually
follow a defined schema. - Examples: MySQL, PostgreSQL, SQL Server.

**Non-relational databases (NoSQL)** - Use data models other than
traditional relational tables. - Can store documents, key-value pairs,
graphs, and more. - Often support flexible data structures. - Examples:
MongoDB, Redis, Cassandra.

> NoSQL does not mean there are no relationships or schemas.

## 2. Introduction to MongoDB

MongoDB is a document-oriented NoSQL database. It stores data as BSON
documents, which have a JSON-like structure.

```json
{
  "title": "My First Note",
  "description": "Learning MongoDB",
  "completed": false
}
```

### Important terms

Term Meaning

---

Database Organizes collections
Collection Stores related documents
Document An individual record
Field A key-value pair inside a document

### MongoDB vs SQL

SQL MongoDB

---

Database Database
Table Collection
Row Document
Column Field
Usually fixed schema Flexible document structure

## 3. Local MongoDB vs MongoDB Atlas

**Local MongoDB** - Installed on your computer. - Uses your computer's
storage for persistent data and RAM for working operations. - Can be
accessed by other devices if properly configured.

**MongoDB Atlas** - A cloud platform for hosting and managing MongoDB
deployments. - Runs on cloud infrastructure. - Does not require
installing the MongoDB database server locally. - Offers different
deployment plans and resource limits.

Both use the same MongoDB database technology. The main difference is
where the database is hosted and managed.

## 4. MongoDB Atlas Structure

```text
Organization
    |
    └── Project
          |
          └── Cluster
                |
                └── Database
                      |
                      └── Collection
                            |
                            └── Documents
```

- **Organization:** A top-level container for organizing Atlas
  resources and projects.
- **Project:** Organizes related MongoDB resources and configurations.
- **Cluster:** A MongoDB database deployment that provides
  infrastructure for hosting and managing databases. Depending on its
  configuration, it can involve multiple database servers (nodes).
- **Database:** Organizes collections.
- **Collection:** Stores related documents.
- **Document:** Stores an individual record in BSON format.

One cluster can contain multiple databases.

## 5. MongoDB Atlas Security

### Network Access (IP Access List)

Controls which IP addresses are allowed to establish a network
connection to the cluster. It answers: **Where can the connection come
from?**

`0.0.0.0/0` allows connections from any IPv4 address at the IP
access-list level. It does not bypass database authentication.

### Database User

A database user has credentials and permissions to access the database.
It answers: **Who can access the database, and what are they allowed to
do?**

An Atlas website account and a MongoDB database user are different
things.

```text
Application
     |
     v
Network Access Check
     |
     v
Database Authentication
     |
     v
Permission Check
     |
     v
MongoDB Cluster
```

## 6. MongoDB Compass

MongoDB Compass is a GUI (Graphical User Interface) tool for MongoDB. It
allows developers to visually interact with databases.

With Compass, you can: - View databases and collections. - View, insert,
update, and delete documents. - Filter and search documents. - Inspect
document structures.

Compass can connect directly to an Atlas cluster using a connection URI.
It does not sit between Express and MongoDB; it is a separate client
that connects to the same database.

## 7. MongoDB Connection URI

A connection URI is a string that provides the information an
application needs to connect to a MongoDB deployment.

```text
mongodb+srv://username:password@cluster.mongodb.net/databaseName
```

Component Purpose

---

`mongodb+srv://` Connection format using DNS SRV discovery
`username` Database username
`password` Database password
`cluster.mongodb.net` Cluster address
`databaseName` Database name

- `mongodb://` is the standard MongoDB connection string format.
- `mongodb+srv://` uses DNS SRV records to discover cluster servers.

Atlas commonly provides the `mongodb+srv://` format.

## 8. Mongoose

Mongoose is an ODM (Object Data Modeling) library for MongoDB and
Node.js. It provides schemas, models, validation, query methods,
middleware, and other useful features.

### Schema

A schema defines the structure and configuration of documents in a
MongoDB collection.

```js
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});
```

This schema defines two fields: `title` and `description`, both with the
String type.

### Model

A model is created using a schema and provides methods to interact with
the corresponding collection.

```js
const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;
```

### Database connection

Mongoose connects the Node.js application to MongoDB using
`mongoose.connect()`.

```js
const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://username:password@cluster.mongodb.net/notesdb",
  );

  console.log("Connected to DB");
}

module.exports = connectDB;
```

The database name in this example is `notesdb`. MongoDB generally
creates a database and collection when data is first written to them.
Merely connecting does not guarantee their creation.

---

# 9. Practical Project: Notes CRUD API

A simple Notes API built using: - Node.js - Express.js - MongoDB Atlas -
Mongoose

### Project structure

```text
project/
│
├── models/
│   └── note.model.js
│
├── config/
│   └── db.js
│
├── app.js
│
└── server.js
```

### note.model.js

Defines the note schema and creates the model.

```js
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;
```

### db.js

Handles the MongoDB connection.

```js
const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://username:password@cluster.mongodb.net/notesdb",
  );

  console.log("Connected to DB");
}

module.exports = connectDB;
```

### app.js

Contains the Express application and API routes.

```js
const express = require("express");
const noteModel = require("../models/note.model");

const app = express();
app.use(express.json());

// CREATE NOTE
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

// GET NOTES
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  const specificNote = await noteModel.findOne({
    title: "note 2",
  });

  res.status(200).json({
    message: "Notes fetching successfull",
    notes: notes,
    specificNote: specificNote,
  });
});

// DELETE NOTE
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "note deleted successfully",
  });
});

// UPDATE NOTE
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
```

### server.js

Starts the server and connects the database.

```js
const app = require("./app");
const connectDB = require("./config/db");

connectDB();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

The paths in `require()` should match your actual project folder
structure.

## 10. Mongoose Methods Used

---

Method Purpose Return value

---

`create()` Creates a new document Created document

`find()` Finds matching Array
documents

`findOne()` Finds the first Document or `null`
matching document

`findOneAndDelete()` Finds and deletes a Deleted document or
document `null`

`findOneAndUpdate()` Finds and updates a By default, the
document document before update

---

### Examples

**Create**

```js
await noteModel.create({
  title: "Note 1",
  description: "Learning MongoDB",
});
```

**Find all documents**

```js
const notes = await noteModel.find();
```

Returns an array, including an empty array if no documents match.

**Find one document**

```js
const note = await noteModel.findOne({
  title: "Note 1",
});
```

Returns a matching document or `null`.

**Delete a document**

```js
await noteModel.findOneAndDelete({
  _id: id,
});
```

**Update a document**

```js
await noteModel.findOneAndUpdate(
  { _id: id },
  { description: "Updated description" },
);
```

## 11. API Testing with Postman

Method Endpoint Purpose

---

POST `/notes` Create a note
GET `/notes` Fetch notes
PATCH `/notes/:id` Update a note
DELETE `/notes/:id` Delete a note

### POST `/notes`

In Postman, select Body → raw → JSON:

```json
{
  "title": "Note 1",
  "description": "Learning backend development"
}
```

### GET `/notes`

Fetches all notes and one specific note matching the title `note 2`.

### PATCH `/notes/:id`

Replace `:id` with the MongoDB document's `_id`.

```json
{
  "title": "Updated Note",
  "description": "Updated description"
}
```

### DELETE `/notes/:id`

Replace `:id` with the document's `_id` to delete that note.

## 12. Important Things to Remember

- MongoDB stores data as BSON documents.
- Collections contain documents.
- Atlas is a cloud platform for hosting MongoDB deployments.
- A cluster can contain multiple databases.
- Compass is a visual database management tool.
- A connection URI provides the information needed to connect to
  MongoDB.
- Mongoose is an ODM library for Node.js and MongoDB.
- A schema defines document structure.
- A model provides methods to interact with a collection.
- `express.json()` parses incoming JSON request bodies.
- `req.params` gets URL parameters.
- `req.body` gets request body data.
- Mongoose methods such as `find()`, `create()`, and
  `findOneAndUpdate()` perform database operations.

### Current project limitations

This is a beginner-level CRUD API. It does not yet include: - Input
validation. - Error handling with `try/catch`. - Checking whether a note
exists before updating or deleting. - Authentication and
authorization. - Proper handling of partial PATCH updates. - Environment
variables for database credentials.
