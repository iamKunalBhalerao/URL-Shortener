import jwt from "jsonwebtoken";
import { findUserById } from "../dao/auth.dao.js";

export const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const accessToken = jwt.sign(
      { _id: userId },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: process.env.JWT_ACCESS_EXPIRY,
      }
    );

    const refreshToken = jwt.sign(
      { _id: userId },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: process.env.JWT_REFRESH_EXPIRY,
      }
    );

    const user = await findUserById(userId);

    (user.refreshToken = refreshToken),
      await user.save({ validateBeforeSave: true });

    return { accessToken, refreshToken };
  } catch (err) {
    throw err;
  }
};
