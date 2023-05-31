import express from "express";

import {
  createNote,
  getNote,
  deleteNote,
  updateNote,
  getNotes,
} from "../controllers/notes.js";

const router = express.Router();

router.get("/notes", getNotes);
router.post("/note", createNote);
router.get("/note/:id", getNote);
router.delete("/note/:id", deleteNote);
router.put("/note/:id", updateNote);

export default router;
