import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import TicketsRouter from "./routes/Tickets.js";
import AuthRouter from "./routes/Auth.js";
dotenv.config();

const server = express();

server.use(express.json());
server.use("/api", TicketsRouter);
server.use("/auth", AuthRouter);

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
