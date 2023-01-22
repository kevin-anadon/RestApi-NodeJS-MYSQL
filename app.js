const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const success = require("console-success");

const { dbConnect } = require("./config/mysql");
const { User } = require("./models/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Cors
app.use(cors());

// Routes (Dynamic routes)
app.use("/api", require("./routes"));

// Listen
app.listen(PORT, () => {
  console.success(`Server started on port: ${PORT}`);
});

dbConnect();
