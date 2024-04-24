import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import { userRegistration } from "./../service/authService.js";

const registration = async (req, res) => {
  try {
    const { login, email, password } = req.body;

    const responseData = await userRegistration(login, email, password);

    if (responseData.refreshToken) {
      res.cookie("refreshToken", responseData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(201).json(responseData);
    } else {
      return res.status(400).json(responseData);
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

const login = async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await UserModel.findOne({ login });
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Неверный пароль" });
    }

    const token = generateAccessToken(user._id, user.role);
    return res.json({ token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

const logout = (req, res) => {
  try {
  } catch (e) {}
};

const refresh = (req, res) => {};

export { registration, login, logout, refresh };
