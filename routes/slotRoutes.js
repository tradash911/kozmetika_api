import express from "express";
import { protect, restrictTo } from "../controller/authController.js";
import {
  createSlot,
  deleteAllSlots,
  getSlots,
} from "../controller/slotController.js";

const router = express.Router();

router.route("/createSlot").post(protect, restrictTo("admin"), createSlot);
router.route("/getSlots").get(protect, restrictTo("admin"), getSlots);
router
  .route("/deleteAllSlots")
  .delete(protect, restrictTo("admin"), deleteAllSlots);

export default router;
