import { findUserById } from "../dao/auth.dao.js";
import { verifyAccessToken } from "./generateTokens.js";

export const attachUser = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      req.userId = null;
      next();
      return;
    }

    const decoded = await verifyAccessToken(accessToken);
    if (!decoded) {
      req.userId = null;
      next();
      return;
    }

    req.userId = decoded._id;
    req.user = await findUserById(decoded._id);
    next();
  } catch (err) {
    next(err);
  }
};
