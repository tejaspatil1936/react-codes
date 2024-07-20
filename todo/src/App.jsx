// App.js
import React, { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const addNote = (title, content) =>
    setNotes([...notes, { title, content, id: Date.now() }]);

  const handleDelete = (id) => setNotes(notes.filter((note) => note.id !== id));

  const handleEdit = (updatedNote) =>
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );

  return (
    <div className="App flex flex-col h-screen bg-slate-900 text-white justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-4">My Notes</h1>
      <NoteForm onSubmit={addNote} />
      <div className="w-full max-w-3xl">
        <ul className="space-y-4">
          {notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
