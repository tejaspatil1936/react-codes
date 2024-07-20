// NoteForm.js
import React, { useState } from "react";

function NoteForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="m-3 rounded-md text-black h-6 "
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-black h-6 rounded-md -my-2-3 mx-2"
        />
      </label>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
