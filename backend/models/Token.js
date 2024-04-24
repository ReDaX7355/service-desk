import { Schema, model } from "mongoose";

export const TokenSchema = Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, require: true },
});

export default model("Tokens", TokenSchema);
