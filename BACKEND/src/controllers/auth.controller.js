import AsyncHandler from "../utils/tryCatchWrapper.js";
import { EmptyFieldError } from "../utils/errorHandler.js";
import {  signinUser, signupUser } from "../services/auth.service.js";
import { cookieOptions } from "../utils/helper.js";

export const signupController = AsyncHandler(async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      throw new EmptyFieldError("All Fields are Required!");
    }

    const { user, accessToken, refreshToken } = await signupUser(
      username,
      email,
      password
    );

    res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json({
        success: true,
        message: "You are Signed Up SuccessFully".user,
        user,
        accessToken,
        refreshToken,
      });
  } catch (error) {
    next(error);
  }
});

export const signinController = AsyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new EmptyFieldError("All Fields are Required!");
    }

    const { user, accessToken, refreshToken } = await signinUser(email, password);

    res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json({
        success: true,
        message: "You are Signed In SuccessFully",
        user,
        accessToken,
        refreshToken,
      });

  } catch (error) {
    next(error);
  }
  ``;
});

export const logoutController = AsyncHandler((req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
