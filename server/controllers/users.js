import { v4 as uuid } from "uuid";

let users = [];

export const getNotes = (req, res) => {
  res.send(users);
};

export const createNote = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });
  res.send("Note added successfully");
};

export const getNote = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};

export const deleteNote = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("Note deleted successfully");
};

export const updateNote = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.time = req.body.time;
  user.note = req.body.note;

  res.send("Note updated successfully");
};
