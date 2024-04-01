import { Schema, model } from "mongoose";

export const User = new Schema({
  login: { type: String, required: true, unigue: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
});

export default model("User", User);
