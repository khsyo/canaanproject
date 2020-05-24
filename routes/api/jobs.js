const express = require("express");
const router = express.Router();

// models
const Employer = require("../../models/Employer");
const Job = require("../../models/Job");

// @route GET api/jobs
// @desc get all jobs
// @access Public
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("employer", ["title", "salary"]);
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error...when get all jobs");
  }
});

module.exports = router;
