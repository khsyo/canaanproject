const mongoose = require("mongoose");

const EmployerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mission: {
    type: String,
  },
  email: {
    type: String,
  },
  location: {
    type: String,
  },
  benefit: {
    title: String,
    description: {
      type: [String],
    },
  },
});

module.exports = Employer = mongoose.model("employer", EmployerSchema);
