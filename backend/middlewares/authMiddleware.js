import ApiError from "../exceptions/apiError.js";
import { validateAccessToken } from "../service/tokenService.js";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(ApiError.UnauthorizedError());
    }

    const accessToken = authHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }

    const userDataFromToken = validateAccessToken(accessToken);
    if (!userDataFromToken) {
      return next(ApiError.UnauthorizedError());
    }

    req.user = userDataFromToken;
    next();
  } catch (error) {
    next(error);
  }
};

export { authMiddleware };
