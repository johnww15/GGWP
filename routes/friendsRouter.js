const express = require("express");
const router = express.Router();
const friendsController = require("../controllers/friendsController");

router.post("/", friendsController.friendCreate);
router.put("/", friendsController.friendAdd);
router.get("/", friendsController.friendIndex);
router.delete("/:friendId", friendsController.friendDelete);

module.exports = router;
