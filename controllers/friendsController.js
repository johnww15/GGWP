const Friend = require("../models/Friends");

//function to create new post
const friendCreate = async (req, res) => {
  const userId = req.user._id;
  const data = { ...req.body, userId };
  console.log("friendCreate running", data, userId);
  try {
    const createdFriend = await Friend.create(data);
    res.json({ createdFriend });
  } catch (error) {
    console.error(
      "error in friendCreate function in friendController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to get all entry data
const friendIndex = async (req, res) => {
  const userId = req.user._id;
  try {
    const friends = await Friend.findById({ userId: userId });
    res.json({ friends });
  } catch (error) {
    console.error(
      "error in friendIndex function in friendsController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  friendCreate,
  friendIndex,
};
