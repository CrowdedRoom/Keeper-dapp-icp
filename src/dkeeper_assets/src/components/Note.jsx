import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

function Note(props) {
  const [isEditing, setIsEditing] = useState();
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: props.title,
    content: props.content,
  });

  function expand() {
    setExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick() {
    props.onDelete(props.id);
  }
  function handleClear() {
    setNote({ title: props.title, content: props.content });
    setIsEditing(false);
  }

  function submitEdit() {
    props.onEdit({ id: props.id, ...note });
    setIsEditing(false)
  }
  function handleEditMode() {
    setIsEditing(true);
  }

  return (
    <div key={props.id} className={`note ${isEditing && "edit-note"}`}>
      {isEditing ? (
        <h1>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        </h1>
      ) : (
        <h1>{props.title}</h1>
      )}
      {isEditing ? (
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
      ) : (
        <p>{props.content}</p>
      )}
      {isEditing ? (
        <>
          <button onClick={submitEdit}>
            <CheckIcon />
          </button>
          <button onClick={handleClear}>
            <ClearIcon />
          </button>
        </>
      ) : (
        <>
          <button onClick={handleEditMode}>
            <EditIcon />
          </button>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </>
      )}
    </div>
  );
}

export default Note;
