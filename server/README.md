## 1. What Is a Server?

A **server** is a program that waits for requests from clients and sends back responses.

A client can be:

- A web browser
- A mobile application
- A frontend application built with React or Next.js
- Another server or application

For example, when you open a website:

```text
Browser (Client)
      |
      | HTTP Request
      v
   Server
      |
      | HTTP Response
      v
Browser displays the result
```

A server can receive requests, process data, communicate with databases or other services, and return a response.

---

## 2. What Is Express.js?

**Express.js** is a lightweight web framework for Node.js.

Node.js lets us run JavaScript outside the browser. Express makes it easier to create web servers and handle HTTP requests and responses.

Without Express, we can create a server using Node.js's built-in `http` module. Express provides a simpler way to define routes, handle requests, send responses, and add middleware.

### Install Express

Inside your Node.js project, run:

```bash
npm install express
```

Express will be added to the project's dependencies.

---

## 3. Importing Express

In a CommonJS project, we can load Express using `require()`:

```js
const express = require("express");
```

### What is `require()`?

`require()` is a CommonJS function used to load a module or package into a JavaScript file.

Here, we are loading the Express package so we can use its features.

> Node.js also supports ES Modules, where we commonly use `import`. This example uses CommonJS.

---

## 4. Creating an Express Application

After loading Express, we create an application:

```js
const app = express();
```

Let's understand what happens:

```text
require("express")
       |
       v
Loads the Express package
       |
       v
express()
       |
       v
Creates an Express application
       |
       v
app
```

### What is `app`?

`app` is the Express application object.

We use it to configure our server, define routes, add middleware, and start listening for requests.

For example:

```js
const express = require("express");

const app = express();
```

At this point, we have created the Express application, but it is not yet listening for incoming requests.

---

## 5. Starting the Server with `app.listen()`

To start listening for incoming requests, we use:

```js
app.listen(3000);
```

### What does `app.listen(3000)` mean?

- `app` is our Express application.
- `listen()` starts the server and makes it listen for incoming connections.
- `3000` is the port number.

A **port** is a numbered communication endpoint on a computer. It helps the operating system direct network traffic to the correct application.

Our server can now be accessed locally at:

```text
http://localhost:3000
```

### What is `localhost`?

`localhost` refers to the same computer on which the program is running. It commonly resolves to the loopback address `127.0.0.1`.

### Using a callback

We can also provide a callback that runs after the server starts listening:

```js
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

This is useful because it confirms that the server has started.

---

## 6. Creating Routes with `app.get()`

A **route** defines how the server responds when a request reaches a particular URL path using a particular HTTP method.

For example:

```js
app.get("/", (req, res) => {
  res.send("Hello World");
});
```

Let's break it down.

### `app.get()`

`get()` defines a route that handles HTTP GET requests.

```js
app.get(path, callback);
```

- `path` is the URL path we want to handle.
- `callback` is the function Express runs when a matching request arrives.

### The `/` path

```js
app.get("/", ...);
```

`/` is the root path of our server.

When a client sends a GET request to:

```text
http://localhost:3000/
```

Express runs the callback function.

### `req` and `res`

```js
(req, res) => {
  res.send("Hello World");
};
```

These are two objects provided by Express:

| Object | Meaning  | Purpose                                         |
| ------ | -------- | ----------------------------------------------- |
| `req`  | Request  | Contains information about the incoming request |
| `res`  | Response | Used to send a response back to the client      |

**Request (`req`)** can contain information such as:

- URL and route parameters
- Query parameters
- Request headers
- Request body
- HTTP method

**Response (`res`)** provides methods to send information back, set status codes, and configure response headers.

### `res.send()`

```js
res.send("Hello World");
```

`res.send()` sends a response to the client.

The response can contain text, HTML, or other supported data.

---

## 7. Creating Multiple Routes

We can create different routes for different pages or resources.

```js
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page");
});
```

Now we have two routes:

| URL                           | Response                 |
| ----------------------------- | ------------------------ |
| `http://localhost:3000/`      | Welcome to the Home Page |
| `http://localhost:3000/about` | This is the About Page   |

The route is selected using both the HTTP method and the URL path.

For example, a GET request to `/about` matches `app.get("/about", ...)`.

---

# 8. Complete Example

Let's put everything together.

Create a file named `index.js`:

```js
const express = require("express");

const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About Page");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

Run the file:

```bash
node index.js
```

You should see:

```text
Server is running on http://localhost:3000
```

Now open these URLs in your browser:

```text
http://localhost:3000/
http://localhost:3000/about
```

You should receive different responses depending on the route.

> Keep the terminal running while testing. The server continues listening until the process is stopped, commonly with `Ctrl + C`.

---

# 9. How the Request-Response Cycle Works

Let's understand what happens when a user visits `/about`.

```text
       User opens:
  localhost:3000/about
              |
              v
       Browser sends
       GET request
              |
              v
       Express server
        receives it
              |
              v
    Checks registered routes
              |
              v
    Matches GET + "/about"
              |
              v
       Runs callback
              |
              v
       res.send(...)
              |
              v
     Response sent to browser
              |
              v
       Browser displays
       "This is the About Page"
```

### Important point

The server does not automatically know which response to send. We define routes that tell Express how to handle matching requests.

---

# 10. Important Concepts to Remember

| Concept        | Meaning                                                            |
| -------------- | ------------------------------------------------------------------ |
| Server         | A program that receives requests and sends responses               |
| Node.js        | JavaScript runtime that lets us run JavaScript outside the browser |
| Express.js     | Node.js web framework used to build servers and APIs               |
| `require()`    | Loads a CommonJS module or package                                 |
| `express()`    | Creates an Express application                                     |
| `app`          | The Express application object                                     |
| `app.listen()` | Starts listening for incoming connections                          |
| Port           | A numbered communication endpoint                                  |
| Route          | A rule matching an HTTP method and URL path                        |
| `app.get()`    | Defines a route for GET requests                                   |
| `req`          | Incoming request information                                       |
| `res`          | Methods for creating and sending the response                      |
| `res.send()`   | Sends a response to the client                                     |

---

# 11. Common Mistakes

### Mistake 1: Forgetting to call Express

Incorrect:

```js
const app = express;
```

Correct:

```js
const app = express();
```

`express` is the function. Calling it with `()` creates the application.

### Mistake 2: Forgetting to start the server

Defining routes alone does not start the server.

You also need:

```js
app.listen(3000);
```

### Mistake 3: Using the wrong route path

These are different paths:

```js
"/";
"/about";
"/contact";
```

A request to `/about` will not match a route registered for `/`.

### Mistake 4: Not sending a response

A route handler should normally send a response or pass control to the next middleware. If it does neither, the client may keep waiting.

---

# 12. Key Takeaways

1. A server receives client requests and sends responses.
2. Express.js is a framework built for Node.js.
3. We install Express using `npm install express`.
4. We load Express in CommonJS using `require("express")`.
5. `express()` creates an Express application.
6. `app.listen(3000)` starts the server on port `3000`.
7. `app.get()` creates a route that handles GET requests.
8. `req` contains information about the incoming request.
9. `res` is used to send a response.
10. `res.send()` sends data back to the client.
11. Different URL paths can have different route handlers.

---

# 🧪 Practice Tasks

Try these yourself instead of only reading the code. Your fingers need some employment too.

### Task 1: Create a server

- Create an Express application.
- Start it on port `3000`.
- Print a message when the server starts.

### Task 2: Create routes

Create these GET routes:

| Route       | Expected response    |
| ----------- | -------------------- |
| `/`         | Welcome to my server |
| `/about`    | About me             |
| `/contact`  | Contact page         |
| `/services` | Our services         |

### Task 3: Experiment

- Change the port from `3000` to `5000`.
- Visit a route that you have not created.
- Observe what happens.
- Try changing the response text.

---

# 🚀 Next Concepts to Learn

Once you are comfortable with creating a server and basic GET routes, continue with:

1. HTTP methods: GET, POST, PUT, PATCH, DELETE
2. HTTP status codes
3. Request parameters (`req.params`)
4. Query parameters (`req.query`)
5. Request body (`req.body`)
6. Express middleware
7. Sending JSON responses with `res.json()`
8. Error handling
9. Building REST APIs

**Learning checkpoint:** You should now be able to explain how a request reaches an Express route, how Express runs its handler, and how the server sends a response back to the client.
"""
