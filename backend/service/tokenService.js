import jsonwebtoken from "jsonwebtoken";
import TokenModel from "./../models/Token.js";

const generateTokens = (payload) => {
  const accessToken = jsonwebtoken.sign(payload, process.env.TOKEN_ACCESS_SECRET_KEY, {
    expiresIn: "15m",
  });
  const refreshToken = jsonwebtoken.sign(payload, process.env.TOKEN_REFRESH_SECRET_KEY, {
    expiresIn: "30d",
  });

  return {
    accessToken,
    refreshToken,
  };
};

const saveToken = async (userId, refreshToken) => {
  const tokenData = await TokenModel.findOne({ userId });
  if (tokenData) {
    tokenData.refreshToken = refreshToken;
    return tokenData.save();
  }

  const token = await TokenModel.create({ userId, refreshToken });
  return token;
};

export { generateTokens, saveToken };
