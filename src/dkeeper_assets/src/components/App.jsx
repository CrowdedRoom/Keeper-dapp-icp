import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper/";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await dkeeper.getNotes();
    setNotes(data);
  };

  function addNote(newNote) {
    dkeeper.createNote(newNote.id, newNote.title, newNote.content);
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
  }

  function deleteNote(id) {
    dkeeper.deleteNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });
  }

  function editNote(newNote) {
    setNotes((prevNotes) => {
      dkeeper.editNote(newNote);
      return prevNotes.map((note) => {
        return note.id === newNote.id ? newNote : note
      })
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        console.log(noteItem.id)
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onEdit={editNote}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
