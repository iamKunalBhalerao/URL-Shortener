import { EmptyFieldError } from "../utils/errorHandler.js";
import AsyncHandler from "../utils/tryCatchWrapper.js";

export const signupController = AsyncHandler((req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      throw new EmptyFieldError("All Fields are Required!");
    }
  } catch (error) {
    next(error);
  }
});

export const signinController = AsyncHandler((req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new EmptyFieldError("All Fields are Required!");
    }
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
