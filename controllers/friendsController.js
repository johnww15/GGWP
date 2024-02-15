const Friend = require("../models/Friends");

//function to create new post
const friendCreate = async (req, res) => {
  const data = req.body;
  try {
    const checkUserExist = await Friend.find({ userId: data.userId });
    if (checkUserExist.length === 0) {
      const createdFriend = await Friend.create(data);
      res.json(createdFriend);
    }
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
    const friends = await Friend.findOne({ userId: userId }).populate(
      "friends",
      "display_name isPremium profilepic"
    );

    res.json(friends.friends);
  } catch (error) {
    console.error(
      "error in friendIndex function in friendsController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to add a friend
const friendAdd = async (req, res) => {
  const userId = req.user._id;
  const data = req.body;
  console.log(data);
  try {
    const friendList = await Friend.findOne({ userId: userId });

    if (!friendList) {
      return res.status(404).json({ error: "User does not exist" });
    }
    if (!friendList.friends.includes(data.friends)) {
      // If the friend doesn't exist, add it to the friend list
      friendList.friends.push(data.friends);
      await friendList.save();
      res.json(friendList);
    }
  } catch (error) {
    console.error(
      "error in friendAdd function in friendsController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to delete friend
const friendDelete = async (req, res) => {
  const userId = req.user._id;
  const { friendId } = req.params;

  try {
    const deletingFriend = await Friend.findOne({ userId: userId }).populate(
      "friends",
      "display_name isPremium profilepic"
    );

    deletingFriend.friends = deletingFriend.friends.filter((friend) => {
      return friend._id.toString() !== friendId;
    });

    const newList = deletingFriend.friends;
    await deletingFriend.save();
    res.json(newList);
  } catch (error) {
    console.error(
      "error in friendDelete function in friendController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  friendCreate,
  friendIndex,
  friendAdd,
  friendDelete,
};
