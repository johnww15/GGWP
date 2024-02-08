const Post = require("../models/Post");

//function to create new post
const postCreate = async (req, res) => {
  const userId = "65c25ee0416220e1989c0457"; //req.user._id;
  const data = { ...req.body, userId };
  console.log("postCreate running", data, userId);
  try {
    const createdPost = await Post.create(data);
    res.json({ createdPost });
  } catch (error) {
    console.error("error in postCreate function in postController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to get all entry data
const postIndex = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json({ posts });
  } catch (error) {
    console.error("error in postIndex function in postController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  postCreate,
  postIndex,
};
