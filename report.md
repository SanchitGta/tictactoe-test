# API and Frontend Testing Report

## Issues Found

*   [ ]  **Issue 1:** The `PUT /tasks/:id` endpoint does not properly update the task.
*   [ ]  **Issue 2:** The frontend does not handle errors gracefully when the API returns a 404 error.
*   [ ]  **Issue 3:** Description of the issue.

## API Endpoints Testing

### GET /tasks

*   [ ]  Returns a list of tasks.
*   [ ]  Returns an empty list if no tasks exist.

### POST /tasks

*   [ ]  Creates a new task with the given title.
*   [ ]  Returns the created task with an ID.

### PUT /tasks/:id

*   [ ]  Updates an existing task with the given ID.
*   [ ]  Returns the updated task.
*   [ ]  Returns a 404 error if the task is not found.

### PATCH /tasks/:id/complete

*   [ ]  Marks a task as complete.
*   [ ]  Returns the updated task.
*   [ ]  Returns a 404 error if the task is not found.

### DELETE /tasks/:id

*   [ ]  Deletes a task with the given ID.
*   [ ]  Returns a 204 status code.
*   [ ]  Returns a 404 error if the task is not found.

## Frontend Testing

### Task List

*   [ ]  Displays a list of tasks.
*   [ ]  Allows adding new tasks.
*   [ ]  Allows marking tasks as complete.
*   [ ]  Allows deleting tasks.

### Task Form

*   [ ]  Allows entering a task title.
*   [ ]  Submits the task to the API.
