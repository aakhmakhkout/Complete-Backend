# Backend Learning Roadmap

**Primary course:** Sheryians Complete Backend One Shot  
**Video:** https://youtu.be/0IciwnJ6PJI  
**Stack:** JavaScript, Node.js, Express.js, MongoDB, Mongoose  
**Daily lesson limit:** 30–50 minutes total  
**Daily practice:** Additional 2–3 hours (target 3–4 hours of total study)

## How to use this schedule

- Each day has a **30–50 minute learning session**. This includes the assigned video segment and any listed supplementary learning.
- Do not watch more than the day's assigned timestamp range just to get ahead.
- If a video segment is shorter than 30 minutes, use the listed supplement to complete the 30–50 minute lesson.
- If you need more time to understand a topic, split it over another day. Do not rush.
- After the lesson, spend the remaining study time coding, experimenting, debugging and revising.
- Use the Sheryians video as your main course. The extra resources below are references for specific gaps, not another full course to follow.

---

# Part A — Follow the Sheryians video

## Day 1 — Server and Node.js foundations
**Video:** `00:00:00–00:19:45` (about 20 min)

**Topics**
1. Course overview and what a server is.
2. Node.js installation, setup and introduction.

**Supplement to reach 30–50 min (10–20 min)**
- Node.js vs JavaScript in the browser.
- What the V8 engine and Node.js runtime do.
- Basic client-server request/response flow.

**Practice**
- Install/check Node.js and npm.
- Run a JavaScript file with `node`.
- Draw a simple browser → server → response diagram.

## Day 2 — npm, project setup and REST API introduction
**Video:** `00:19:45–00:51:02` (about 31 min)

**Topics**
1. APIs and REST API fundamentals.
2. Creating Notes APIs and testing with Postman.

**Supplement if needed (up to 10–15 min)**
- npm scripts, dependencies and devDependencies.
- HTTP methods: GET, POST, PUT, PATCH and DELETE.
- Request body, route parameters and query parameters.

**Practice**
- Create a small Express project if the video has introduced it.
- Test GET and POST requests in Postman.
- Explain the difference between an endpoint and an HTTP method.

## Day 3 — MongoDB connection and database basics
**Video:** `00:51:02–01:20:00` (about 29 min)

**Topics**
1. MongoDB Atlas setup and database connection.
2. Mongoose schema/model introduction and saving notes.

**Supplement to reach 30–50 min (5–15 min)**
- SQL vs NoSQL.
- Database vs collection vs document.
- What Mongoose does and why it is used with MongoDB.

**Practice**
- Connect your own development project to a MongoDB database.
- Identify the database, collection and document in your Notes API.

## Day 4 — Finish the Notes database work
**Video:** `01:20:00–01:43:39` (about 24 min)

**Topics**
1. Continue the Notes API database implementation.
2. Project overview.

**Supplement to reach 30–50 min (10–20 min)**
- Mongoose CRUD methods: `create`, `find`, `findById`, `findByIdAndUpdate`, `findByIdAndDelete`.
- Schema validation and MongoDB ObjectId basics.

**Practice**
- Implement create, read, update and delete for notes.
- Test successful requests and invalid IDs.

## Day 5 — Project architecture and backend setup
**Video:** `01:43:39–02:20:00` (about 36 min)

**Topics**
1. Project overview and requirements.
2. Backend project structure and initial implementation.

**Practice**
- Recreate the folder structure yourself.
- Identify the purpose of each file and the flow from route to database.
- Do not copy the project blindly; explain what each part does.

## Day 6 — Backend project implementation
**Video:** `02:20:00–03:01:50` (about 42 min)

**Topics**
1. Continue backend development.
2. Connect the backend logic with the database and project requirements.

**Practice**
- Rebuild the day's feature without looking at the video.
- Test the relevant API endpoints in Postman.
- Note any logic you cannot yet explain.

## Day 7 — Cloud setup and frontend introduction
**Video:** `03:01:50–03:30:00` (about 28 min)

**Topics**
1. Cloud service setup and backend configuration.
2. Frontend project introduction.

**Supplement to reach 30–50 min (5–15 min)**
- Environment variables and `.env`.
- Why secrets and database credentials must not be committed to Git.
- Difference between development and production configuration.

**Practice**
- Create a local `.env` file and load configuration safely.
- Add `.env` to `.gitignore`.

## Day 8 — Frontend project basics
**Video:** `03:30:00–04:00:53` (about 31 min)

**Topics**
1. Frontend structure and application flow.
2. Understand which screens/features call which backend endpoints.

**Practice**
- Trace one user action from the frontend to the API.
- Write down the request method, URL, body and expected response.

## Day 9 — Frontend-backend integration
**Video:** `04:00:53–04:34:05` (about 33 min)

**Topics**
1. Frontend-backend integration.
2. Authentication introduction and basic concepts.

**Supplement if needed (5–15 min)**
- CORS and why browsers enforce it.
- Same-origin policy and preflight requests.
- API base URLs and handling failed HTTP responses.

**Practice**
- Connect a frontend screen to your own API.
- Test success, loading and error states.

## Day 10 — Token-based authentication
**Video:** `04:34:05–05:14:00` (about 40 min)

**Topics**
1. Token-based authentication concepts.
2. Authentication implementation in code.

**Practice**
- Draw the registration/login request flow.
- Explain authentication vs authorization.
- Identify where the password is hashed and where the token is created/verified.

## Day 11 — JWT, cookies and registration
**Video:** `05:14:00–05:59:53` (about 46 min)

**Topics**
1. JWT authentication.
2. Cookies, registration API and why tokens are used.

**Practice**
- Implement or reproduce the registration/login flow.
- Inspect a JWT's header, payload and signature using a safe local test.
- Never put passwords, secrets or sensitive personal data in a JWT payload.

## Day 12 — Spotify project: first section
**Video:** `05:59:53–06:40:00` (about 40 min)

**Topics**
1. Spotify project overview.
2. Backend-focused project implementation.

**Practice**
- Map the project's routes, controllers, models and database collections.
- Rebuild one feature independently.

## Day 13 — Spotify project: second section
**Video:** `06:40:00–07:23:34` (about 44 min)

**Topics**
1. Continue the Spotify backend implementation.
2. Understand how the project's backend features fit together.

**Practice**
- Test the implemented endpoints.
- Explain the data flow from request to response.
- List any unclear parts for revision.

## Day 14 — Express middleware
**Video:** `07:23:34–08:03:44` (about 40 min)

**Topics**
1. Middleware in Express.js.
2. Middleware chaining and request processing.

**Practice**
- Write a simple logging middleware.
- Write a middleware that checks whether a required header exists.
- Understand `req`, `res` and `next()`.

## Day 15 — Testing and input validation
**Video:** `08:03:44–end of video`

**Topics**
1. Jest and Supertest.
2. Express Validator and API validation.

**Supplement**
Use the remaining lesson time, if needed, to understand:
- Unit tests vs integration tests.
- Assertions and test cases.
- Testing successful and failed API requests.
- Validating untrusted user input.

**Practice**
- Write tests for at least one GET endpoint and one POST endpoint.
- Test missing, invalid and valid input.

*The supplied chapter list does not include the exact video end timestamp. Watch from 08:03:44 to the end, keeping the total lesson session within 30–50 minutes. If the remaining video itself exceeds 50 minutes, split it across two days.*

---

# Part B — Important supplementary topics

These topics strengthen gaps that a single crash course cannot cover in depth. Continue using 30–50 minutes per day for learning, then practise separately.

## Day 16 — Asynchronous JavaScript and the Node.js event loop
**Learn (30–50 min)**
- Callbacks, Promises and `async`/`await` revision.
- Event loop, call stack, microtasks and non-blocking I/O.

**Why it matters:** Database calls, file operations and network requests are asynchronous in Node.js.

**Practice:** Predict the output order of short examples using synchronous code, Promises and `setTimeout`.

## Day 17 — Node.js modules, files and streams
**Learn (30–50 min)**
- CommonJS vs ES Modules.
- `fs` and `path` modules.
- Buffers and streams: what they are and when to use them.

**Practice:** Read and write a local file using `fs`; compare reading a whole file with using a stream.

## Day 18 — Express error handling and application structure
**Learn (30–50 min)**
- Centralized error-handling middleware.
- `next(error)`, HTTP error responses and avoiding duplicated try/catch logic.
- Routes, controllers and services: separation of responsibilities.

**Practice:** Refactor one API route into route, controller and service files.

## Day 19 — MongoDB queries and aggregation
**Learn (30–50 min)**
- Filtering, sorting, projection and pagination.
- Aggregation pipeline basics.

**Practice:** Add search, sorting and pagination to the Notes API.

## Day 20 — MongoDB data modelling and indexes
**Learn (30–50 min)**
- Embedding vs referencing documents.
- One-to-one and one-to-many relationships.
- Indexes and why they improve query performance.

**Practice:** Model users and notes; decide which data should be referenced and add an index to a commonly queried field.

## Day 21 — Authentication security beyond the tutorial
**Learn (30–50 min)**
- Access tokens vs refresh tokens.
- Token expiry, refresh and rotation.
- HttpOnly, Secure and SameSite cookie settings.
- Logout and token invalidation approaches.

**Practice:** Draw the login, authenticated request, refresh and logout flows. Implement only after understanding the security trade-offs.

## Day 22 — Backend security essentials
**Learn (30–50 min)**
- Rate limiting and brute-force protection.
- NoSQL injection and safe query construction.
- CORS configuration.
- XSS and CSRF: what they are and how they differ.
- Input validation and sanitization.

**Practice:** Add validation and rate limiting to an authentication endpoint in a test project.

## Day 23 — SQL fundamentals
**Learn (30–50 min)**
- Tables, rows, columns and data types.
- Primary keys and foreign keys.
- SELECT, INSERT, UPDATE and DELETE.
- INNER JOIN and LEFT JOIN.

**Practice:** Write basic SQL queries for users and projects.

## Day 24 — PostgreSQL and relational database design
**Learn (30–50 min)**
- PostgreSQL setup and connection.
- Relationships and normalization basics.
- Transactions and constraints.

**Practice:** Design users, projects and tasks tables with primary and foreign keys.

## Day 25 — Deployment and production fundamentals
**Learn (30–50 min)**
- Deploying a Node.js/Express API.
- Production environment variables.
- Logs, graceful shutdown and basic monitoring.
- Difference between local and production configuration.

**Practice:** Deploy a small API and verify its endpoints from Postman.

## Day 26 — Docker and API documentation
**Learn (30–50 min)**
- Docker images, containers and a basic Dockerfile.
- Docker Compose fundamentals.
- Swagger/OpenAPI: documenting endpoints.

**Practice:** Containerize a simple API or document its endpoints with an OpenAPI specification.

## Day 27 — Redis and caching introduction
**Learn (30–50 min)**
- What caching is and why it is used.
- Redis key-value model.
- TTL and cache invalidation basics.

**Practice:** Sketch a cache-aside flow for a frequently requested API resource.

## Day 28 — CI/CD and system design introduction
**Learn (30–50 min)**
- GitHub Actions fundamentals.
- Automated test workflow.
- Load balancing, horizontal scaling and caching concepts.

**Practice:** Create a simple workflow that runs tests on a push. Draw a basic scalable web application architecture.

---

# Learning checkpoints

Do not move forward only because you finished a video segment. Confirm that you can perform the task independently.

| Checkpoint | Expected ability |
|---|---|
| Day 4 | Build a basic Express Notes API with MongoDB CRUD |
| Day 9 | Connect a frontend to your backend and explain the request/response flow |
| Day 11 | Explain and implement a basic registration/login flow |
| Day 15 | Add input validation and write basic API tests |
| Day 20 | Model related MongoDB data and query it |
| Day 22 | Apply essential API security protections |
| Day 25 | Deploy an API with production configuration |
| Day 28 | Understand the purpose of common production tools and workflows |

# Daily time allocation

The **30–50 minute limit is for learning the assigned video segment or supplementary lesson**. Coding practice is additional.

| Activity | Time |
|---|---:|
| Assigned video / supplementary learning | 30–50 min |
| Rebuild the concept without copying | 60–90 min |
| Independent coding exercises | 30–45 min |
| Debugging, testing and experimentation | 30–45 min |
| Revision and notes | 15–30 min |
| **Total** | **Approximately 3–4 hours** |

If you finish the lesson early, use the remaining lesson time to review that day's topic or consult its documentation. Do not start the next day's video segment.

# Reference resources

Use these when a specific concept is unclear. They are references, not additional full courses.

- [Sheryians Complete Backend One Shot](https://youtu.be/0IciwnJ6PJI)
- [Node.js Learn](https://nodejs.org/en/learn)
- [MDN HTTP documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Express.js documentation](https://expressjs.com/)
- [MongoDB University](https://learn.mongodb.com/)
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [Docker Get Started](https://docs.docker.com/get-started/)
- [Redis Documentation](https://redis.io/docs/latest/)

---

**Important:** The video timestamps and chapter names in Part A are based on the chapter list supplied by the learner. Some segment boundaries are approximate study splits within the supplied chapters. Supplementary lesson times are estimates; adjust them to keep each day's learning session within 30–50 minutes. The schedule is a learning plan, not a guarantee of job readiness.
