import {
  userRegistration,
  userLogin,
  userLogout,
} from "./../service/authService.js";

const registration = async (req, res, next) => {
  try {
    const { login, email, password } = req.body;

    const responseData = await userRegistration(login, email, password);

    // res.cookie("refreshToken", responseData.refreshToken, {
    //   maxAge: 30 * 24 * 60 * 60 * 1000,
    //   httpOnly: true,
    // });
    return res.status(201).json(responseData);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { login, password } = req.body;

    const responseData = await userLogin(login, password);

    res.cookie("refreshToken", responseData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(responseData);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    console.log(refreshToken);
    await userLogout(refreshToken);
    res.clearCookie("refreshToken");
    res.status(200).json({ message: "Успешный выход из аккаунта" });
  } catch (error) {
    next(error);
  }
};

const refresh = async (req, res, next) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    throw ApiError.UnauthorizedError();
  }

  const responseData = await userRefreshToken(refreshToken);
  res.cookie("refreshToken", responseData.refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  return res.json(responseData);
};

export { registration, login, logout, refresh };
