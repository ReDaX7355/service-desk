import { Router } from "express";
import {
  login,
  registration,
  logout,
  refresh,
} from "../controllers/AuthController.js";

const AuthRouter = Router();

AuthRouter.post("/registration", registration);
AuthRouter.post("/login", login);
AuthRouter.post("/logout", logout);
AuthRouter.post("/refresh", refresh);

export default AuthRouter;
