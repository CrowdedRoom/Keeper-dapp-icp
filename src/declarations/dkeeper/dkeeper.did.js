export const idlFactory = ({ IDL }) => {
  const Note = IDL.Record({
    'id' : IDL.Text,
    'title' : IDL.Text,
    'content' : IDL.Text,
  });
  return IDL.Service({
    'createNote' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], ['oneway']),
    'deleteAllNotes' : IDL.Func([], [], ['oneway']),
    'deleteNote' : IDL.Func([IDL.Text], [], ['oneway']),
    'editNote' : IDL.Func([Note], [], ['oneway']),
    'getNotes' : IDL.Func([], [IDL.Vec(Note)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
