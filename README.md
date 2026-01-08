# Notes Management System

A modern, responsive notes management application built with React, Redux Toolkit, and Tailwind CSS. This application allows users to create, view, and delete notes with real-time form validation and smooth user interactions.

## Project Overview

The Notes Management System is a single-page application that enables users to efficiently organize their notes. It features a clean, intuitive interface with form validation, loading states, and seamless state management through Redux. Users can add notes with titles and descriptions, view all their notes in a list, and delete individual notes as needed.

## How to Run

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port Vite assigns).

### Build for Production

```bash
npm run build
```

## Component Breakdown

### `App.jsx`

The root component that serves as the main container. It renders the application header, the note form, and the notes list within a responsive layout with gradient background styling.

### `NoteForm.jsx`

A controlled form component that handles note creation. It manages local state for title and description inputs, performs client-side validation (title minimum 3 characters, description minimum 5 characters), displays validation errors, and dispatches actions to add notes to the Redux store. The submit button is disabled when the title is empty or during submission, and includes a loading spinner during the async submission process.

### `NoteList.jsx`

A presentation component that displays all notes from the Redux store. It shows a count of total notes and renders an empty state message when no notes exist. It maps over the notes array and renders individual `NoteItem` components.

### `NoteItem.jsx`

A component that renders a single note card with the note's title, description, and creation timestamp. It includes a delete button that dispatches a delete action to remove the note from the Redux store. Features hover effects and smooth transitions for enhanced user experience.

## State Explanation

### State Location

Application state is managed centrally using **Redux Toolkit** and lives in the Redux store located at `src/store/store.js`. The store is configured with a single reducer slice for todos/notes.

### State Structure

The state structure is defined in `src/store/todoSlice.js`:

```javascript
{
  todos: {
    items: [],           // Array of note objects
    isLoading: false     // Loading state during submission
  }
}
```

Each note object contains:

- `id`: Unique identifier (timestamp-based)
- `title`: Note title
- `description`: Note description
- `createdAt`: ISO timestamp of creation

### Data Flow

1. **Adding Notes**:

   - User fills form in `NoteForm` → Local state updates
   - On submit → Validation runs → `setLoading(true)` dispatched
   - After 800ms delay (simulating API call) → `addTodo` action dispatched
   - Redux store updates → `NoteList` re-renders with new note
   - `setLoading(false)` dispatched → Form resets

2. **Deleting Notes**:

   - User clicks delete in `NoteItem` → `deleteTodo` action dispatched with note ID
   - Redux store filters out the note → `NoteList` re-renders without deleted note

3. **Reading State**:
   - Components use `useSelector` hook to read from Redux store
   - `NoteForm` reads `isLoading` to control button state
   - `NoteList` reads `items` array to display notes

### State Management Pattern

The application follows a unidirectional data flow pattern where:

- Actions are dispatched from components
- Reducers update the store immutably
- Components subscribe to store changes via `useSelector`
- All state mutations go through Redux reducers

## Assumptions/Limitations

### Assumptions

1. **No Backend Integration**: The application is frontend-only with no persistence. All data is lost on page refresh.
2. **Simulated API Calls**: The 800ms delay after form submission simulates an API call but doesn't actually persist data.
3. **Client-Side Validation Only**: Validation rules (title ≥ 3 chars, description ≥ 5 chars) are enforced only on the client side.
4. **Unique IDs**: Note IDs are generated using `Date.now()`, which assumes no two notes are created in the same millisecond.

### Limitations

1. **No Data Persistence**: Notes are stored only in Redux state (memory) and are lost when the page is refreshed or the browser is closed.
2. **No Edit Functionality**: Once created, notes cannot be edited—only deleted and recreated.
3. **No Search/Filter**: There is no ability to search or filter notes by title or description.
4. **No Categories/Tags**: Notes cannot be organized into categories or tagged.
5. **No User Authentication**: The application doesn't support multiple users or user-specific note collections.
6. **Browser Compatibility**: The application uses modern JavaScript features and may not work in older browsers without polyfills.

### Trade-offs Made

1. **Redux vs Context API**: Chose Redux Toolkit for better developer experience and scalability, even though Context API could work for this simple use case.
2. **No Local Storage**: Intentionally omitted localStorage to keep the implementation simple and focused on core React/Redux patterns.
3. **Synchronous Validation**: Validation happens on submit rather than real-time to reduce complexity, though real-time validation could improve UX.
4. **Fixed Delay**: Used a fixed 800ms delay instead of a configurable timeout to keep the implementation straightforward.

## Tech Stack

- **React 18.2.0**: UI library
- **Redux Toolkit 2.0.1**: State management
- **React Redux 9.0.4**: React bindings for Redux
- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **Vite 5.0.8**: Build tool and development server
