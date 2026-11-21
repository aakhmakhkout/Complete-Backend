# Notes CRUD API

A simple REST API built with **Node.js** and **Express.js** to practice
CRUD operations, HTTP methods, request bodies, route parameters, and API
testing with **Postman**.

## What I Learned

-   Creating API routes in Express.
-   Using `GET`, `POST`, `PATCH`, and `DELETE`.
-   Sending JSON data from Postman.
-   Reading incoming JSON using `express.json()` and `req.body`.
-   Accessing route parameters using `req.params`.
-   Returning JSON responses with HTTP status codes.
-   Testing backend endpoints without building a frontend.

## Tech Stack

-   **Node.js** --- JavaScript runtime.
-   **Express.js** --- Web framework used to create the server and API
    routes.
-   **Postman** --- Tool used to send API requests and inspect
    responses.

## Project Structure

The main application file exports the Express app so it can be imported
by a separate server file.

``` text
project/
├── server.js
└── src/
    └── app.js
```

Adjust the file names or folders above if your actual project structure
is different.

## How It Works

The API stores notes in a JavaScript array:

``` js
const notes = [];
```

Each note is an object:

``` json
{
  "title": "Learn Express",
  "description": "Practice creating REST API routes"
}
```

**Important:** This is in-memory storage. Notes exist only while the
Node.js process is running. Restarting the server clears the array. A
database such as MongoDB can be added later for persistent storage.

## API Endpoints

Base URL:

``` text
http://localhost:3000
```

  HTTP method   Endpoint          Purpose
  ------------- ----------------- -------------------------------------
  `POST`        `/notes`          Add a new note
  `GET`         `/notes`          Fetch all notes
  `PATCH`       `/notes/:index`   Update a note using its array index
  `DELETE`      `/notes/:index`   Delete a note using its array index

### 1. Create a note --- `POST /notes`

In Postman, choose **Body → raw → JSON** and send:

``` json
{
  "title": "Learn Express",
  "description": "Practice REST API methods"
}
```

The route reads the data from `req.body`, adds it to the `notes` array,
and responds:

``` json
{
  "message": "note added"
}
```

Status: `201 Created`

### 2. Get all notes --- `GET /notes`

Fetches the notes currently stored in the array.

Example response:

``` json
{
  "message": "notes fetched successfully",
  "notes": [
    {
      "title": "Learn Express",
      "description": "Practice REST API methods"
    }
  ]
}
```

Status: `200 OK`

### 3. Update a note --- `PATCH /notes/:index`

The `:index` part is a **route parameter**. Express makes its value
available through `req.params`.

Example request:

``` text
PATCH http://localhost:3000/notes/0
```

Send this JSON body:

``` json
{
  "title": "Learn Express and MongoDB",
  "description": "Practice updating a note with PATCH"
}
```

The route uses `req.params.index` to find the note and updates its
`title` and `description`.

Response:

``` json
{
  "message": "note updated successfully"
}
```

Status: `200 OK`

### 4. Delete a note --- `DELETE /notes/:index`

Uses the note's array index as a route parameter.

Example request:

``` text
DELETE http://localhost:3000/notes/0
```

Response:

``` json
{
  "message": "note deleted successfully"
}
```

Status: `200 OK`

## Important Express Concepts

### `express.json()`

``` js
app.use(express.json());
```

Built-in Express middleware that parses incoming JSON request bodies and
makes the resulting JavaScript object available through `req.body`.

### `req.body`

Contains data sent in the request body, such as a note's `title` and
`description`.

### `req.params`

Contains values captured from named route parameters. For
`/notes/:index`, access the value with:

``` js
req.params.index
```

### `res.status().json()`

Sets the HTTP response status code and sends a JSON response:

``` js
res.status(201).json({
  message: "note added"
});
```

### `module.exports`

``` js
module.exports = app;
```

Exports the Express application so another CommonJS file, such as
`server.js`, can load it with `require()`.

## Testing with Postman

1.  Start the Express server.
2.  Open Postman.
3.  Choose the required HTTP method.
4.  Enter the endpoint URL.
5.  For `POST` and `PATCH`, choose **Body → raw → JSON** and enter the
    JSON data.
6.  Click **Send** and inspect the response and status code.

## Current Practice-Project Limitations

-   Notes are stored in an array, not MongoDB, so they disappear when
    the server restarts.
-   Routes use array indexes rather than unique note IDs.
-   The current `DELETE` implementation uses JavaScript's `delete`
    operator. This leaves an empty slot in the array instead of shifting
    later elements.
-   The current `PATCH` implementation assigns both `title` and
    `description` from the request body. Send both fields with the
    current implementation; otherwise, a missing field can overwrite the
    existing value with `undefined`.
-   The routes do not yet validate input or check whether the requested
    index exists.

These are useful improvements to make as the project develops.

## Key Takeaways

-   `GET` --- Read data.
-   `POST` --- Create data.
-   `PATCH` --- Partially update data.
-   `DELETE` --- Delete data.
-   `req.body` --- Access the JSON request body.
-   `req.params` --- Access route parameters.
-   Postman --- Test API requests and responses.
-   `express.json()` --- Parse incoming JSON request bodies.

------------------------------------------------------------------------

**Project:** Beginner Express.js CRUD practice\
**Storage:** In-memory JavaScript array\
**API style:** REST
