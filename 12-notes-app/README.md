# Notes App – Next.js Full Stack CRUD

A simple full-stack Notes Application built with the Next.js App Router. This project demonstrates how to build both the frontend and backend within a single Next.js application using Route Handlers.

## Features

* Create notes
* View notes
* Edit notes
* Delete notes
* Dynamic API routes
* Client-side data fetching
* Component-based architecture

---

## Tech Stack

* Next.js (App Router)
* React
* JavaScript
* Route Handlers (API Routes)

---

## Project Structure

```txt
app/
│
├── page.jsx
│
├── api/
│   └── notes/
│       ├── route.js
│       └── [id]/
│           └── route.js
│
├── components/
│   ├── NoteForm.jsx
│   └── NotesList.jsx
│
└── data/
    └── notes.js
```

---

## API Endpoints

### GET /api/notes

Returns all notes.

Example Response:

```json
[
  {
    "id": 1,
    "title": "Learn Next.js"
  }
]
```

---

### POST /api/notes

Creates a new note.

Request Body:

```json
{
  "title": "Learn Route Handlers"
}
```

---

### PUT /api/notes/[id]

Updates an existing note.

Request Body:

```json
{
  "title": "Updated Title"
}
```

---

### DELETE /api/notes/[id]

Deletes a note by ID.

---

## Concepts Learned

### App Router

* Folder-based routing
* Route Handlers
* Dynamic routes using `[id]`

### React

* useState
* useEffect
* Component composition
* Lifting state up
* Props

### Full Stack Development

* GET requests
* POST requests
* PUT requests
* DELETE requests
* Request and Response objects
* JSON data exchange
* Client-to-server communication using Fetch API

---

## Data Flow

```txt
User Action
    ↓
Client Component
    ↓
fetch()
    ↓
API Route Handler
    ↓
Data Update
    ↓
Response.json()
    ↓
Refresh Notes
    ↓
UI Re-renders
```

---

## Notes

This project uses an in-memory JavaScript array as a temporary data store. Data resets when the development server restarts.

In a production application, the notes would be stored in a database such as PostgreSQL or MongoDB using an ORM like Prisma.

---

## Learning Outcome

This project helped me understand how Next.js can be used as a full-stack framework by combining frontend React components and backend API Route Handlers within a single codebase.
