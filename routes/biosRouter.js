const express = require("express");
const router = express.Router();
const biosController = require("../controllers/biosController");

// router.post("/", biosController.bioCreate);
router.get("/", biosController.bioIndex);
router.put("/", biosController.bioUpdate);

module.exports = router;
