const mongoose = require("mongoose");

const EmployerUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  mission: {
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
  image: {
    type: String,
  },
  anchor: {
    type: String,
  },
  website: {
    type: String,
  },
});

module.exports = EmployerUser = mongoose.model(
  "employeruser",
  EmployerUserSchema
);
