const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

// models
const Job = require("../../models/Job");

// @route GET api/jobs
// @desc get all jobs
// @access Public
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("employeruser", ["name", "email"]);
    const groupBy = (array, property) => {
      return array.reduce((acc, obj) => {
        let key = obj["employeruser"][property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    };
    const newJobs = groupBy(jobs, "name");
    res.json(newJobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error...when get all jobs");
  }
});

// @route GET api/jobs/:job_id
// desc get a job by job id
//access public
router.get("/:job_id", async (req, res) => {
  try {
    const job = await Job.findOne({
      _id: req.params.job_id,
    }).populate("employeruser", [
      "name",
      "email",
      "location",
      "image",
      "website",
      "mission",
    ]);
    if (!job) {
      return res.status(400).json({ msg: "Job not found" });
    }
    console.log(req);
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error...when get a job by id");
  }
});

// @route POST api/jobs
// desc post a job
//access public
router.post(
  "/",
  auth,
  [
    check("salary", "Salary is required").not().isEmpty(),
    check("type", "Job type is required").not().isEmpty(),
    check("title", "Job title is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { salary, type, title, skills, description } = req.body;

      const jobFields = {};
      jobFields.employeruser = req.user.id;
      if (salary) jobFields.salary = salary;
      if (type) jobFields.type = type;
      if (title) jobFields.title = title;
      if (skills) {
        jobFields.skills = skills.split(",").map((skill) => skill.trim());
      }
      if (description) jobFields.description = description;

      let job = new Job(jobFields);
      await job.save();

      return res.json(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error...when creating a job");
    }
  }
);

module.exports = router;
