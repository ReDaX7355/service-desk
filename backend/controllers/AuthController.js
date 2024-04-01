import User from "../models/User.js";

const registration = async (req, res) => {
  try {
    const { login, email, password } = req.body;

    const candidate = await User.findOne({ login });

    if (candidate) {
      return res
        .status(400)
        .json({ message: "Пользователь с таким логином уже существует" });
    }

    const user = User.create({ login, email, password });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { registration };
