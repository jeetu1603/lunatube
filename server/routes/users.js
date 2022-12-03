import express from "express";
import { verify } from "../verifyToken.js";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update,
} from "../controllers/user.js";

const router = express.Router();

// update a user
router.put("/:id", verify, update);

// delete a user
router.delete("/:id", verify, deleteUser);

// get a user
router.get("/find/:id", getUser);

// subscribe a user
router.put("/sub/:id", verify, subscribe);

// unsubscribe a user
router.put("/unsub/:id", verify, unsubscribe);

// like a video
router.put("/like/:videoId", verify, like);

// dislike a video
router.put("/dislike/:videoId", verify, dislike);

export default router;
