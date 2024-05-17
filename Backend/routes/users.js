import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/User.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello User,You are logged in");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello User,You are logged in and you can delete your account ");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello Admin,You are logged in and you can delete all account ");
});

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);
export default router;
