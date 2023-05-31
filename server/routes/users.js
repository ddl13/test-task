import express from "express";

import {
  createNote,
  getNote,
  deleteNote,
  updateNote,
  getNotes,
} from "../controllers/users.js";

const router = express.Router();

router.get("/users", getNotes);
router.post("/user", createNote);
router.get("/user/:id", getNote);
router.delete("/user/:id", deleteNote);
router.put("/user/:id", updateNote);

export default router;
