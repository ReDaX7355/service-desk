import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import {
  generateTokens,
  saveToken,
  deleteToken,
  validateRefreshToken,
  findToken,
} from "./tokenService.js";
import ApiError from "../exceptions/apiError.js";

const userRegistration = async (login, email, password) => {
  const candidate = await UserModel.findOne({ login });

  if (candidate) {
    throw ApiError.BadRequestError(
      "Пользователь с таким логином уже существует!",
    );
  }

  const hashPassword = bcrypt.hashSync(password, 5);

  const user = await UserModel.create({
    login,
    email,
    password: hashPassword,
  });
  const userData = {
    id: user._id,
    login: user.login,
    email: user.email,
    role: user.role,
  };
  const tokens = generateTokens({
    ...userData,
  });
  await saveToken(userData.id, tokens.refreshToken);

  return {
    ...tokens,
    message: "Вы успешно зарегистрировались!",
    user: userData,
  };
};

const userLogin = async (login, password) => {
  const user = await UserModel.findOne({ login });
  if (!user) {
    throw ApiError.BadRequestError("Пользователь не найден");
  }

  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    throw ApiError.BadRequestError("Неверный пароль");
  }

  const userData = {
    id: user._id,
    login: user.login,
    email: user.email,
    role: user.role,
  };
  const tokens = generateTokens({
    ...userData,
  });
  await saveToken(userData.id, tokens.refreshToken);

  return {
    ...tokens,
    user: userData,
  };
};

const userLogout = async (refreshToken) => {
  const token = await deleteToken(refreshToken);
  return token;
};

const userRefreshToken = async (refreshToken) => {
  const userDataFromToken = validateRefreshToken(refreshToken);
  const token = await findToken(refreshToken);
  if (!userData || !token) {
    throw ApiError.UnauthorizedError();
  }
  const user = await UserModel.findById(userDataFromToken.id);

  const userData = {
    id: user._id,
    login: user.login,
    email: user.email,
    role: user.role,
  };

  const tokens = generateTokens({
    ...userData,
  });
  await saveToken(userData.id, tokens.refreshToken);

  return {
    ...tokens,
    user: userData,
  };
};

export { userRegistration, userLogin, userLogout, userRefreshToken };
