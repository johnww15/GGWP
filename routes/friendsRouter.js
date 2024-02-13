const express = require("express");
const router = express.Router();
const friendsController = require("../controllers/friendsController");

router.post("/", friendsController.friendCreate);
// router.get("/", biosController.bioIndex);
// router.put("/", biosController.bioUpdate);

module.exports = router;
