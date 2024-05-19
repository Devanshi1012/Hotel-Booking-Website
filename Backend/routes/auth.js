import express from "express";
import {
  bookings,
  deletebookings,
  getbookings,
  login,
  register,
} from "../controllers/Auth.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/bookings", bookings);
router.post("/getbookings", getbookings);
router.delete("/deletebookings/:userId/:bookingId", deletebookings);

export default router;
