import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const server = express();

const port = process.env.PORT || 5000;

async function startServer() {
  try {
    await mongoose.connect(process.env.DB_URL);
    server.listen(port, () => console.log("Server started!"));
  } catch (error) {
    console.log(error);
  }
}

startServer();
