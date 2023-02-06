import List "mo:base/List";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor DKeeper {

  public type Note = {
    id : Text;
    title : Text;
    content : Text;
  };

  stable var notes : List.List<Note> = List.nil<Note>();

  public func createNote(id : Text, titleText : Text, contentText : Text) {
    let newNote : Note = {
      id = id;
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);
    // Debug.print(debug_show (notes));
  };

  public query func getNotes() : async [Note] {
    return List.toArray(notes);
  };

  public func deleteNote(id : Text) {

    let newNotes = List.filter(notes, func(note : Note) : Bool { note.id != id });
    Debug.print(debug_show (newNotes));
    notes := newNotes;
  };

  public func deleteAllNotes() {
    notes := List.nil<Note>();
  };

  public func editNote(newNote : Note) {
    let newNotes = List.map(
      notes,
      func(note : Note) : Note {
        if (note.id == newNote.id) return newNote;
        return note;
      },
    );
    notes := newNotes
  };

};
