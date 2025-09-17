import express from "express";
import { protect, restrictTo } from "../controller/authController.js";
import {
  createBlogPost,
  deleteBlogPost,
  getBlogPosts,
} from "../controller/blogController.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router
  .route("/createPost")
  .post(protect, upload.single("image"), restrictTo("admin"), createBlogPost);
router.route("/getPosts").get(getBlogPosts);
router
  .route("/deletePost/:id")
  .delete(protect, restrictTo("admin"), deleteBlogPost);

export default router;
