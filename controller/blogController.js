import Blog from "../model/BlogpostSchema.js";
import AppError from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";

/* export const createBlogPost = catchAsync(async (req, res, next) => {
  const newPost = await Blog.create({
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
  });

  res.status(200).json({
    status: "success",
    message: "Post created",
    data: newPost,
  });
}); */

export const createBlogPost = catchAsync(async (req, res, next) => {
  const { title, body } = req.body;
  console.log(req.file);
  console.log("geci");
  if (!title || !body) {
    return next(new AppError("Kérlek adj meg egy címet és egy szöveget!"));
  }
  if (!req.file) {
    console.log("nincs file");
  }
  const imageUrl = req.file?.path || null;

  const newPost = await Blog.create({
    title,
    body,
    image: imageUrl,
    author: req.user ? req.user.id : null,
  });

  res.status(201).json({
    status: "success",
    message: "Post created",
    data: { post: newPost },
  });
});

export const getBlogPosts = catchAsync(async (req, res, next) => {
  try {
    const data = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: "succes",
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

export const deleteBlogPost = catchAsync(async (req, res, next) => {
  const post = await Blog.findByIdAndDelete(req.params.id);

  if (!post) {
    return next(new AppError("Nincs ilyen bejegyzés", 404));
  }

  res.status(200).json({
    status: "success",
    message: "Post deleted successfully",
  });
});
