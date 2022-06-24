import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/users.js";

const router = express.Router();

// GET ALL
router.get("/", getUsers);

// GET
router.get("/:id", getUser);

// CREATE USER
router.post("/", createUser);

// UPDATE USER
router.put("/:id", updateUser);

// DELETE USER
router.delete("/:id", deleteUser);

export default router;
