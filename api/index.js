import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js"

const app = express();
dotenv.config();

const connect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

// Middlewares

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello! Backend Here.");
});

app.listen(3000, () => {
  connect();
  console.log("Connected Backend to port: 3000");
});
