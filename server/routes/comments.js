import express from "express";
import { verify } from "../verifyToken.js";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";

const router = express.Router();

router.post("/", verify, addComment);
router.delete("/:id", verify, deleteComment);
router.get("/:videoId", getComments);

export default router;
