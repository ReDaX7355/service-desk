import { Router } from "express";
import { login, registration } from "../controllers/AuthController.js";

const AuthRouter = Router();

AuthRouter.post("/registration", registration);
AuthRouter.post("/login", login);

export default AuthRouter;
