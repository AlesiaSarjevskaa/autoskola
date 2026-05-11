const express = require("express");
const applicationsController = require("../controllers/applications");

const router = express.Router();

router.get("/", applicationsController.list);
router.post("/", applicationsController.create);

module.exports = router;
