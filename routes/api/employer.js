const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// models
const Employer = require("../../models/Employer");

// @route POST api/jobs
// @desc create a job
// @access Public
router.post(
  "/",
  [check("name", "Employer name is required").not().isEmpty()],
  async (req, res) => {
    try {
      const errors = validationResult(req.body);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, mission, email, location } = req.body;

      // Build employer object
      employer = new Employer({ name, mission, email, location });
      await employer.save();
      await res.json(employer);
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server error...when posting to employer");
    }
  }
);

// @route GET api/jobs
// @desc get all jobs
// @access Public
router.get("/", async (req, res) => {
  try {
    const employers = await Employer.find().populate();
    res.json(employers);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error...when getting all jobs");
  }
});

module.exports = router;
