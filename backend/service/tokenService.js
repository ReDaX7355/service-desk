import jsonwebtoken from "jsonwebtoken";
import TokenModel from "./../models/Token.js";

const generateTokens = (payload) => {
  const accessToken = jsonwebtoken.sign(
    payload,
    process.env.TOKEN_ACCESS_SECRET_KEY,
    {
      expiresIn: "1h",
    },
  );
  const refreshToken = jsonwebtoken.sign(
    payload,
    process.env.TOKEN_REFRESH_SECRET_KEY,
    {
      expiresIn: "30d",
    },
  );

  return {
    accessToken,
    refreshToken,
  };
};

const findToken = async (refreshToken) => {
  const tokenData = await TokenModel.findOne({ refreshToken });
  return tokenData;
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

const deleteToken = async (refreshToken) => {
  const tokenData = await TokenModel.deleteOne({ refreshToken });
  return tokenData;
};

const validateAccessToken = (accessToken) => {
  try {
    const userData = jsonwebtoken.verify(
      accessToken,
      process.env.TOKEN_ACCESS_SECRET_KEY,
    );
    return userData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const validateRefreshToken = (refreshToken) => {
  try {
    const userData = jsonwebtoken.verify(
      refreshToken,
      process.env.TOKEN_REFRESH_SECRET_KEY,
    );
    return userData;
  } catch (error) {
    return null;
  }
};

export {
  generateTokens,
  findToken,
  saveToken,
  deleteToken,
  validateAccessToken,
  validateRefreshToken,
};
