import React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter(notes=>notes.id !== id))
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => (
      <Notes note={note} key={note.id} handleDelete={handleDelete} />
    ));
  };
  return (
    <>
      <h2>Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
