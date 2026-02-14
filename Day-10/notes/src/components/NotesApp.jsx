import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const NotesApp = () => {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (title.trim() === '' || content.trim() === '') {
      alert('Please fill in both title and content!');
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      title: title,
      content: content,
      createdAt: new Date().toISOString()
    };

    setNotes([...notes, newNote]);
    setTitle('');
    setContent('');
  };

  const handleDeleteNote = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this note?');
    
    if (confirmDelete) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    }
  };

  return (
    <div className="notes-app">
      <h1>📝 MY NOTES APP</h1>
      
      <div className="note-form">
        <h2>Create New Note</h2>
        
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Enter note title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            rows="4"
            placeholder="Enter note content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button className="btn-add" onClick={handleAddNote}>
          Add Note
        </button>
      </div>

      <div className="notes-container">
        <h2>Your Notes ({notes.length})</h2>
        
        {notes.length === 0 ? (
          <p className="no-notes">No notes yet. Create your first note!</p>
        ) : (
          <div className="notes-grid">
            {notes.map((note) => (
              <div key={note.id} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <div className="note-footer">
                  <small>{new Date(note.createdAt).toLocaleDateString()}</small>
                  <button 
                    className="btn-delete" 
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesApp;