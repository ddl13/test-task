import { v4 as uuid } from "uuid";

let notes = [];

export const getNotes = (req, res) => {
  res.send(notes);
};

export const createNote = (req, res) => {
  const note = req.body;

  notes.push({ ...note, id: uuid() });
  res.send("Note added successfully");
};

export const getNote = (req, res) => {
  const singleUser = notes.filter((note) => note.id === req.params.id);
  res.send(singleUser);
};

export const deleteNote = (req, res) => {
  notes = notes.filter((note) => note.id !== req.params.id);
  res.send("Note deleted successfully");
};

export const updateNote = (req, res) => {
  const note = note.find((note) => note.id === req.params.id);

  note.time = req.body.time;
  note.note = req.body.note;

  res.send("Note updated successfully");
};
