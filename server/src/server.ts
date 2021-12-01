import bodyParser from "body-parser"
import express from "express"
import cors from 'cors'

import connectDB from "../config/database";
import auth from "./routes/api/auth";
import user from "./routes/api/user";
import pet from "./routes/api/pet";

const app = express();

// Connect to MongoDB
connectDB();

// Express configuration
const PORT = process.env.PORT || 5000
app.set("port", PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// @route   GET /
// @desc    Test Base API
// @access  Public
app.get("/", (_req, res) => {
  res.send("Welcome to Pets REST API!");
});

app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/pet", pet);

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
