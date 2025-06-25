import { Router } from "express";
import {
  isAuthenticated,
  logoutController,
  signinController,
  signupController,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.route("/signup").post(signupController);
authRouter.route("/signin").post(signinController);
authRouter.route("/me").get(isAuth, isAuthenticated);
authRouter.route("/logout").get(logoutController);

export default authRouter;
