import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateTokens, saveToken } from "./tokenService.js";

const userRegistration = async (login, email, password) => {
  try {
    const candidate = await UserModel.findOne({ login });

    if (candidate) {
      return { message: "Пользователь с таким логином уже существует!" };
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
  } catch (error) {
    console.log(error);
  }
};

export { userRegistration };
