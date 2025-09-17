import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Please enter a title"] },
    body: { type: String, required: [true, "Please enter some text"] },
    image: { type: String },
    date: {
      type: Date,
      default: Date.now,
    },
  },

  { collection: "blogpost" },
  { timestamps: true }
);

const Blog = mongoose.model("BlogPost", settingsSchema);

export default Blog;
