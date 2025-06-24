import { Router } from "express";
import {
  logoutController,
  signinController,
  signupController,
} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.route("/signup").post(signupController);
authRouter.route("/signin").post(signinController);
authRouter.route("/logout").get(logoutController);

export default authRouter;
