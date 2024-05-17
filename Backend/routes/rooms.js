import express from "express";
import {
  createRoom,
  deleteRoom,
  updateRoom,
  getRoom,
  getRooms,
  updateRoomAvailability,
} from "../controllers/Room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);
//update
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//get
router.get("/:id", getRoom);
//Get All
router.get("/", getRooms);
export default router;
