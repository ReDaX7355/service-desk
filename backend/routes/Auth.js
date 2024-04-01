import { Router } from "express";
import { registration } from "../controllers/AuthController.js";

const AuthRouter = Router();

AuthRouter.post("/login", registration);

export default AuthRouter;
