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
  const limit = 5;
  try {
    const recommendationList = await User.find(
      { _id: { $ne: userId } },
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

module.exports = {
  userLogin,
  createJWT,
  checkToken,
  userSignup,
  userRecommendationList,
};
