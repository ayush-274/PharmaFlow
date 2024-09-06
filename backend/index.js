import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import chemistRoute from "./routes/chemistRoute.js"; // Import chemistRoute

import { connect } from "mongoose";
import connectDB from "./utils/db.js";

// Config
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/home", (req, res) => {
  return res.status(200).json({
    message: "I am coming from backend",
    success: true,
  });
});

// Mongoose connect
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});


// Use routes
app.use("/api/chemist-users", chemistRoute); // Use chemistRoute for login route
