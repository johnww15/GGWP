const Bio = require("../models/Bio");

//function to get entry data
const bioIndex = async (req, res) => {
  const userId = req.user._id;
  try {
    const bio = await Bio.findById({ userId: userId });
    res.json(bio);
  } catch (error) {
    console.error("error in bioIndex function in bioController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function checks if bio exists, if it doesn't it will create one, if it does it will update
const bioUpdate = async (req, res) => {
  const userId = req.user._id;
  const data = req.body;

  try {
    const checkBioExist = await Bio.findOne({ userId: userId });
    console.log("checkbioexist", checkBioExist);
    if (!checkBioExist) {
      const createdBio = await Bio.create(data);
      res.json(createdBio);
    } else {
      checkBioExist.type = data.type;
      checkBioExist.genre = data.genre;
      checkBioExist.body = data.body;
      const updatedBio = await checkBioExist.save();

      res.json(updatedBio);
    }
  } catch (error) {
    console.error("error in bioUpdate function in bioController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  bioIndex,
  bioUpdate,
};
