const Post = require("../models/Post");

//function to create new post
const postCreate = async (req, res) => {
  const userId = req.user._id;
  const data = req.body;
  console.log("postCreate running", data, userId);
  try {
    const createdPost = await Post.create(data);
    const updatedPost = await createdPost.populate("userId");
    res.json(updatedPost);
  } catch (error) {
    console.error("error in postCreate function in postController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to get all entry data
const postIndexUserOnly = async (req, res) => {
  const userId = req.user._id;
  try {
    const posts = await Post.find({ userId: userId }).populate(
      "userId",
      "display_name"
    );
    res.json({ posts });
  } catch (error) {
    console.error("error in postIndex function in postController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  postCreate,
  postIndexUserOnly,
};
