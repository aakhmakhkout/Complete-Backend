# Backend Development Journey

A practical, project-based repository documenting my journey into backend development. It covers server-side JavaScript, REST APIs, databases, authentication, security, testing, deployment, and the tools used to build and maintain backend applications.

## About This Repository

This repository contains my learning notes, code examples, exercises, and backend projects as I work towards becoming a full-stack developer.

The focus is on understanding how backend systems work, building features independently, testing them, and improving the code as I learn more.

## Tech Stack

### Core technologies
- **JavaScript** – Main programming language
- **Node.js** – JavaScript runtime for server-side development
- **Express.js** – Framework for building web servers and APIs
- **MongoDB** – NoSQL document database
- **Mongoose** – ODM for working with MongoDB from Node.js

### Tools and supporting technologies
- **Postman** – API development and testing
- **MongoDB Atlas** – Cloud-hosted MongoDB
- **MongoDB Compass** – GUI for viewing and managing MongoDB data
- **Git and GitHub** – Version control and project hosting

### Topics planned for later stages
- PostgreSQL and SQL
- Redis and caching
- Docker and Docker Compose
- GitHub Actions and CI/CD
- Swagger / OpenAPI

## Topics Covered

### 1. Backend and Node.js Fundamentals
- Client-server architecture
- Servers, requests, and responses
- Node.js runtime
- npm and packages
- `package.json`, `package-lock.json`, and dependencies
- CommonJS modules and `require()`
- Exporting and importing modules

### 2. Express.js and REST APIs
- Creating an Express server
- Routes and endpoints
- Request and response objects
- REST API fundamentals
- HTTP methods: GET, POST, PUT, PATCH, and DELETE
- Route parameters, query parameters, and request bodies
- Middleware and middleware chaining
- JSON request parsing with `express.json()`
- Testing APIs with Postman

### 3. Databases and MongoDB
- Database fundamentals
- Relational vs non-relational databases
- MongoDB databases, collections, documents, and fields
- Local MongoDB vs MongoDB Atlas
- Atlas projects and clusters
- Network access and database users
- MongoDB connection URIs
- MongoDB Compass

### 4. Mongoose
- Connecting Node.js applications to MongoDB
- Schemas and models
- Creating and reading documents
- Updating and deleting documents
- Mongoose query methods
- Schema validation
- Data modelling and relationships

### 5. API Development and Application Structure
- CRUD API development
- Separating routes, controllers, and services
- Request validation
- Centralized error handling
- Asynchronous code and error handling
- Filtering, sorting, and pagination
- MongoDB queries and aggregation

### 6. Authentication and Authorization
- Registration and login flows
- Password hashing
- Authentication vs authorization
- JSON Web Tokens (JWT)
- Cookies and cookie security
- Access and refresh tokens
- Protected routes and authorization checks

### 7. Backend Security
- Environment variables and secret management
- Input validation and sanitization
- CORS and same-origin policy
- Rate limiting
- NoSQL injection awareness
- XSS and CSRF fundamentals
- Secure authentication practices

### 8. Testing and Quality
- Unit and integration testing
- Jest
- Supertest
- Testing API success and failure cases
- Validating untrusted input

### 9. SQL and Relational Databases
- SQL fundamentals
- Tables, rows, columns, and data types
- Primary and foreign keys
- SELECT, INSERT, UPDATE, and DELETE
- SQL joins
- PostgreSQL
- Relationships, normalization, constraints, and transactions

### 10. Deployment and Production
- Deploying Node.js and Express applications
- Development vs production configuration
- Environment variables in production
- Logging and basic monitoring
- Graceful shutdown
- Docker fundamentals
- API documentation with Swagger / OpenAPI
- CI/CD fundamentals

### 11. Additional Backend Concepts
- Node.js event loop and non-blocking I/O
- Callbacks, Promises, and `async`/`await`
- Node.js file system and streams
- Redis and caching
- Load balancing and horizontal scaling
- Introductory backend system design

## Projects and Practical Work

### 1. Notes CRUD API
A beginner CRUD API built with Node.js, Express.js, MongoDB, and Mongoose.

**Features**
- Create a note
- Fetch all notes
- Find a specific note
- Update a note
- Delete a note

**Concepts practised**
- Express routes
- HTTP methods
- Request parameters and request bodies
- Mongoose schemas and models
- MongoDB CRUD operations
- Postman API testing

### 2. Backend Application Project
A larger backend project used to practise organizing an application and connecting its features to a database.

**Areas of practice**
- Backend project structure
- API routes and application logic
- Database integration
- Frontend-backend communication
- Authentication
- Testing and debugging

### 3. Spotify-Inspired Backend Project
A project-based exercise focused on understanding how backend features work together in a larger application.

**Areas of practice**
- Routes and API design
- Database models and collections
- Authentication-related flows
- Request-to-response data flow
- Testing endpoints

> Project features and implementation details will be documented as they are built.

## Repository Structure

The repository may grow as new topics and projects are added. A typical structure for project work is:

```text
backend-journey/
│
├── notes/
│   ├── nodejs/
│   ├── express/
│   ├── mongodb/
│   └── authentication/
│
├── projects/
│   ├── notes-crud-api/
│   └── other-projects/
│
└── README.md
```

The actual folder structure may differ between projects.

## Learning Approach

- Learn a concept before relying on it in a project.
- Practise by writing code instead of only watching tutorials.
- Rebuild features without copying the original implementation.
- Test APIs with Postman.
- Debug errors and understand their causes.
- Keep notes and document important concepts.
- Improve earlier projects as new concepts are learned.

## Learning Progress

- [x] Node.js and npm fundamentals
- [x] Express server and REST API basics
- [x] HTTP methods and Postman
- [x] Middleware and request handling
- [x] Database and MongoDB fundamentals
- [x] MongoDB Atlas and Compass
- [x] Mongoose introduction
- [x] Basic Notes CRUD API
- [ ] Advanced Mongoose and data modelling
- [ ] Validation and centralized error handling
- [ ] Authentication and authorization
- [ ] Backend security
- [ ] Automated API testing
- [ ] SQL and PostgreSQL
- [ ] Deployment and production practices
- [ ] Docker, Redis, and CI/CD
- [ ] System design fundamentals

This checklist reflects the current learning progress and will be updated as the repository develops.

## Resources

- [Node.js Documentation](https://nodejs.org/en/learn)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [MongoDB University](https://learn.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [Redis Documentation](https://redis.io/docs/latest/)

---

**Purpose:** Learn backend development by understanding the fundamentals, building practical projects, and gradually exploring production-level concepts.
