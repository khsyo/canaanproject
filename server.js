const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// Init middleware, allow us to get data from req.body
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running..."));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/jobs", require("./routes/api/jobs"));
app.use("/api/employer", require("./routes/api/employer"));

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
