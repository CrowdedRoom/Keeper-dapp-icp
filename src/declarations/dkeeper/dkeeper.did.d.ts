import type { Principal } from '@dfinity/principal';
export interface Note { 'id' : string, 'title' : string, 'content' : string }
export interface _SERVICE {
  'createNote' : (arg_0: string, arg_1: string, arg_2: string) => Promise<
      undefined
    >,
  'deleteAllNotes' : () => Promise<undefined>,
  'deleteNote' : (arg_0: string) => Promise<undefined>,
  'editNote' : (arg_0: Note) => Promise<undefined>,
  'getNotes' : () => Promise<Array<Note>>,
}
