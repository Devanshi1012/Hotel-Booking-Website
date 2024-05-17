import express from "express";
import { bookings, login, register } from "../controllers/Auth.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/bookings", bookings)

export default router;
