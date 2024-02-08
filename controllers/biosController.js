const Bio = require("../models/Bio");

//function to create new post
const bioCreate = async (req, res) => {
  const userId = "65c25ee0416220e1989c0457"; //req.user._id;
  const data = { ...req.body, userId };
  console.log("bioCreate running", data, userId);
  try {
    const createdBio = await Bio.create(data);
    res.json({ createdBio });
  } catch (error) {
    console.error("error in bioCreate function in bioController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to get all entry data
const bioIndex = async (req, res) => {
  const userId = "65c25ee0416220e1989c0457"; //req.user._id;
  try {
    const bio = await Bio.findById({ userId: userId });
    res.json({ bio });
  } catch (error) {
    console.error("error in bioIndex function in bioController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  bioCreate,
  bioIndex,
};
