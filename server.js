const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// connect database
connectDB();

// Init middleware, allow us to get data from req.body
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/employerUser", require("./routes/api/employerUser"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/jobs", require("./routes/api/jobs"));
app.use("/api/employer", require("./routes/api/employer"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Serve statics assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

module.exports = app;
