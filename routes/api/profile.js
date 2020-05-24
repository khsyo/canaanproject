const express = require("express");
const router = express.Router();

// models
const Employer = require("../../models/Employer");
const Job = require("../../models/Job");

// @route GET api/profile
// @desc Test route
// @access Public
router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
