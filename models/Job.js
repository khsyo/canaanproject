const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  employeruser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employeruser",
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  description: [
    {
      title: {
        type: String,
        required: true,
      },
      short_description: {
        type: [String],
        required: true,
      },
    },
  ],
  requiredNumber: {
    type: String,
  },
  workingHours: {
    type: String,
  },
  ctaLink: {
    type: String,
  },
});

module.exports = Job = mongoose.model("job", JobSchema);
