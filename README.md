# Task Manager API ✅

A small Express-based REST API for managing tasks (created as part of the AirTribe learners challenge).

---

## 🚀 Quick Start

**Prerequisites**
- **Node.js >= 18** (the project runs a pretest that requires Node 18)
- **npm**

**Install**
```bash
npm install
```

**Run**
```bash
# start the server
node app.js
# or, if defined, use
npm start
```

Server listens on port **3000** by default.

---

## 📦 API Endpoints

Base URL: http://localhost:3000

- GET `/tasks` — Returns array of tasks
- GET `/tasks/:id` — Returns a single task by id (404 if not found)
- POST `/tasks` — Create a task
  - Body (JSON): `{ "title": "...", "description": "...", "completed": false }`
  - Returns **201 Created** with the new task
- PUT `/tasks/:id` — Update task (partial updates allowed)
  - Validates that `completed` (if provided) is boolean
- DELETE `/tasks/:id` — Deletes the task (404 if not found)

Example curl (create):
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy milk","description":"From the store"}'
```

---

## ✅ Tests

Run tests:
```bash
npm test
```

Notes:
- The test runner includes a pretest which enforces **Node.js >= 18**.
- Tests use `tap` and expect the Express `app` to be exported so tests can start/stop the server.

> ⚠️ Common test failure (SIGKILL): if tests are killed or report `SIGKILL`, it can be caused by the server being started automatically when `app.js` is required by tests. To avoid that, ensure `app.js` only starts the listener when run directly:

```js
// at bottom of app.js
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server is listening on ${port}`));
}

module.exports = app;
```

This allows tests to `require('./app')` and control the server lifecycle themselves.

---

## 💡 Troubleshooting & Tips

- Check your Node.js version: `node --version` (should be 18.x or later).
- If tests fail with no tests found or `SIGKILL`, confirm tests are importing the `app` and not starting duplicate listeners.

---

## 🧩 Contributing

Feel free to open issues or send PRs to improve functionality or add more tests.

---

**Enjoy!** 🎉
