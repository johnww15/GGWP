const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

async function userLogin(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

function checkToken(req, res) {
  console.log("req.user", req.user);
  res.json(req.exp);
}

//signup function
const userSignup = async (req, res) => {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
};

//non login/signup related functions below
async function userRecommendationList(req, res) {
  const userId = req.user._id;
  const data = req.body;
  const friends = data.friends;
  const limit = 5;
  // console.log("friends", friends);
  try {
    const recommendationList = await User.find(
      { _id: { $ne: userId, $nin: friends } },
      { password: 0 }
    ).limit(limit);
    res.json(recommendationList);
  } catch (error) {
    console.error(
      "error in userRecommendationList function in userController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
}

//premium switch function
async function userPremiumSwitch(req, res) {
  const userId = req.user._id;
  const data = req.body;
  try {
    const updatingUser = await User.findById(userId);
    //find if entry exists, return error 404 if entry doesn't exist
    if (!updatingUser) {
      return res.status(404).json({ error: "Entry not found" });
    }
    // check if user updating is the owner of the entry, if it isn't prevent action
    if (!updatingUser.userId === userId) {
      return res.status(403).json({ error: "Unauthorised User Request" });
    }
    updatingUser.isPremium = data.isPremium;
    const updatedUser = await updatingUser.save();

    res.json(updatedUser);
  } catch (error) {
    console.error(
      "error in userPremiumSwtich function in usersController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  userLogin,
  createJWT,
  checkToken,
  userSignup,
  userRecommendationList,
  userPremiumSwitch,
};
