const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// router.post("/signup", usersController.create);
router.post("/login", usersController.userLogin);
router.get("/login", (req, res) => {
  res.json({ msg: "yay" });
});

module.exports = router;
