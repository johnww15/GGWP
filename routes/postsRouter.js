const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

router.post("/", postsController.postCreate);
router.get("/", postsController.postIndex);
// router.put("/", postsController.postUpdate);
// router.delete("/:postId", postsController.postDeleteOne);

module.exports = router;
