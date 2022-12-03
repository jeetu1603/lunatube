import express from "express";
import { verify } from "../verifyToken.js";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";

const router = express.Router();

// CREATE A VIDEO
router.post("/", verify, addVideo);

// UPDATE A VIDEO
router.put("/:id", verify, updateVideo);

// DELETE A VIDEO
router.delete("/:id", verify, deleteVideo);

// FIND A VIDEO
router.get("/find/:id", getVideo);

// VIEW COUNTER
router.put("/find/:id", addView);

// GET TRENDING
router.get("/trend", trend);

// GET RANDOM
router.get("/random", random);

// GET SUBSCRIBED USER'S VIDEOS
router.get("/sub", verify, sub);

router.get("/tags", verify, getByTag);

router.get("/search", verify, search);

export default router;
