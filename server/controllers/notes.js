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
  const singleNote = notes.find((note) => note.id === req.params.id);
  res.send([singleNote]);
};

export const deleteNote = (req, res) => {
  notes = notes.filter((note) => note.id !== req.params.id);
  res.send("Note deleted successfully");
};

export const updateNote = (req, res) => {
  const note = notes.find((note) => note.id === req.params.id);

  if (!note) {
    return res.status(404).send("Note not found");
  }

  note.time = req.body.time;
  note.note = req.body.note;

  res.send("Note updated successfully");
};
