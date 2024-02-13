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

//function to update post
const postUpdate = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;
  const data = req.body;
  try {
    const updatingPost = await Post.findById(postId).populate(
      "userId",
      "display_name"
    );
    //find if entry exists, return error 404 if entry doesn't exist
    if (!updatingPost) {
      return res.status(404).json({ error: "Entry not found" });
    }
    // check if user updating is the owner of the entry, if it isn't prevent action
    if (!updatingPost.userId === userId) {
      return res.status(403).json({ error: "Unauthorised User Request" });
    }
    updatingPost.content = data.content;
    const updatedPost = await updatingPost.save();

    res.json(updatedPost);
  } catch (error) {
    console.error("error in postUpdate function in postController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to delete one post
const postDeleteOne = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;
  try {
    const deletedPost = await Post.findById(postId);
    //find if entry exists, return error 404 if entry doesn't exist
    if (!deletedPost) {
      return res.status(404).json({ error: "Entry not found" });
    }
    //check if user deleting is the owner of the favourite data, if it isn't prevent deletion
    if (!deletedPost.userId === userId) {
      return res.status(403).json({ error: "Unauthorised User Request" });
    }
    await Post.findByIdAndDelete(postId);
    res.json(deletedPost);
  } catch (error) {
    console.error("error in postDelete function in postController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  postCreate,
  postIndexUserOnly,
  postUpdate,
  postDeleteOne,
};
