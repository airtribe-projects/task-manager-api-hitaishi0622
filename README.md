# Task Manager API

A simple task management API built with Express.js that allows you to create, read, update, and delete tasks.

## Features

- **Get all tasks** - Retrieve a list of all tasks
- **Get a specific task** - Retrieve a task by its ID
- **Create a new task** - Add a new task with title, description, and completion status
- **Update a task** - Modify an existing task's title, description, or completion status
- **Delete a task** - Remove a task by its ID

## Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

## Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd task-manager-api-hitaishi0622
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Dependencies

The project uses the following packages:
- **express** - Web framework for Node.js
- **mongoose** - MongoDB object modeling
- **morgan** - HTTP request logger
- **body-parser** - Parse request bodies
- **cors** - Enable Cross-Origin Resource Sharing
- **passport** - Authentication middleware
- **passport-local** - Local authentication strategy
- **passport-local-mongoose** - Mongoose plugin for Passport
- **express-session** - Session middleware
- **connect-mongo** - MongoDB session store
- **jsonwebtoken** - JWT implementation
- **dotenv** - Load environment variables

## Usage

### Starting the Server

Run the following command to start the server:
```bash
npm start
```

The server will listen on port 3000 by default.

### API Endpoints

#### GET /tasks
Retrieve all tasks

**Response:**
```json
[
  {
    "id": 1,
    "title": "Set up environment",
    "description": "Install Node.js, npm, and git",
    "completed": true
  }
]
```

#### GET /tasks/:id
Retrieve a specific task by ID

**Response:**
```json
{
  "id": 1,
  "title": "Set up environment",
  "description": "Install Node.js, npm, and git",
  "completed": true
}
```

#### POST /tasks
Create a new task

**Request Body:**
```json
{
  "title": "New Task",
  "description": "Task Description",
  "completed": false
}
```

**Response:**
```json
{
  "id": 16,
  "title": "New Task",
  "description": "Task Description",
  "completed": false
}
```

#### PUT /tasks/:id
Update an existing task

**Request Body:**
```json
{
  "title": "Updated Task",
  "description": "Updated Description",
  "completed": true
}
```

**Response:**
```json
{
  "id": 1,
  "title": "Updated Task",
  "description": "Updated Description",
  "completed": true
}
```

#### DELETE /tasks/:id
Delete a task

**Response:**
```json
{
  "message": "Task deleted"
}
```

## Testing

Run tests using:
```bash
npm test
```

The test suite includes:
- Creating new tasks with valid and invalid data
- Retrieving all tasks
- Retrieving tasks by ID (valid and invalid IDs)
- Updating tasks with valid and invalid data
- Deleting tasks (valid and invalid IDs)

## Data Storage

Tasks are stored in `task.json` file in the project root. The file contains an array of task objects.

## Error Handling

The API returns appropriate HTTP status codes:
- **200** - Success (GET, PUT, DELETE)
- **201** - Created (POST)
- **400** - Bad Request (invalid data)
- **404** - Not Found (task doesn't exist)

## License

MIT

## Author

Task Manager API - Created for task management purposes
