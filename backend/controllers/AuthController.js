import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateAccessToken = (id, role) => {
  const payload = {
    id,
    role,
  };

  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });
};

const registration = async (req, res) => {
  try {
    const { login, email, password } = req.body;

    const candidate = await User.findOne({ login });

    if (candidate) {
      return res
        .status(400)
        .json({ message: "Пользователь с таким логином уже существует" });
    }

    const hashPassword = bcrypt.hashSync(password, 5);

    const user = await User.create({ login, email, password: hashPassword });
    res.status(201).json({ message: "Пользователь успешно зарегистрирован" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ login });
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Неверный пароль" });
    }

    const token = generateAccessToken(user._id, user.role);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { registration, login };
