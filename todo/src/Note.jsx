// Note.js
import React, { useState } from "react";

function Note({ note, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValues, setEditedValues] = useState({ ...note });

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = () => {
    onEdit(editedValues);
    setIsEditing(false);
  };

  const handleDeleteClick = () => onDelete(note.id);

  const handleChange = (event) => { 
    setEditedValues({
      ...editedValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <li key={note.id} className="bg-white text-gray-800 shadow rounded p-4 mb-4">
      {isEditing ? (
        <div className="space-y-3">
          <div className="flex flex-col">
            <label className="font-semibold">Title:</label>
            <input
              type="text"
              name="title"
              value={editedValues.title}
              onChange={handleChange}
              className="border p-2 rounded text-black"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Content:</label>
            <textarea
              name="content"
              value={editedValues.content}
              onChange={handleChange}
              className="border p-2 rounded h-24"
            />
          </div>
          <button onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold">{note.title}</h3>
          <p className="mb-4">{note.content}</p>
          <button onClick={handleEditClick} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600">
            Edit
          </button>
          <button onClick={handleDeleteClick} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default Note;
