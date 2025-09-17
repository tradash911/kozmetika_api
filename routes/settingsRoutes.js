import express from "express";
import { protect, restrictTo } from "../controller/authController.js";
import {
  getBackgroundImage,
  getContacts,
  getOpeningHours,
  getSettings,
  getSocialLinks,
  getWelcomeMessage,
  setBackground,
  setContacts,
  setOpeningHours,
  setSocialLinks,
  setWelcomeMessage,
} from "../controller/settingsController.js";

const router = express.Router();
router.route("/getHours").get(protect, restrictTo("admin"), getOpeningHours);
router.route("/getSettings").get(getSettings);
router.route("/getContacts").get(protect, restrictTo("admin"), getContacts);
router
  .route("/getWelcomeMessage")
  .get(protect, restrictTo("admin"), getWelcomeMessage);
router.route("/getSocial").get(protect, restrictTo("admin"), getSocialLinks);
router
  .route("/getBackgroundImage")
  .get(protect, restrictTo("admin"), getBackgroundImage);
router.route("/setSocial").put(protect, restrictTo("admin"), setSocialLinks);
router.route("/setBackground").put(protect, restrictTo("admin"), setBackground);
router.route("/setContact").put(protect, restrictTo("admin"), setContacts);
router
  .route("/setWelcomeMessage")
  .put(protect, restrictTo("admin"), setWelcomeMessage);
router
  .route("/setOpeningHours")
  .put(protect, restrictTo("admin"), setOpeningHours);
export default router;
