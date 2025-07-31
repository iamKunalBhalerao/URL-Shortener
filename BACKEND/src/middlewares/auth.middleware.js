import { verifyAccessToken } from "../utils/generateTokens.js";
import { UnauthorizedError } from "../utils/errorHandler.js";

export const isAuth = async (req, res, next) => {
  try {
    const accessToken = req.cookies?.accessToken;
    if (!accessToken) {
      throw new UnauthorizedError("You are not authorized");
    }

    const decoded = await verifyAccessToken(accessToken);
    if (!decoded) {
      throw new UnauthorizedError("You are not authorized");
    }

    req.userId = decoded._id;
    next();
  } catch (err) {
    next(err);
  }
};

export const shortUrlAuth = async (req, res, next) => {
  try {
    const accessToken = req.cookies?.accessToken;

    if (!accessToken) {
      req.userId = null;
      return next();
    }

    const decoded = await verifyAccessToken(accessToken);
    if (!decoded) {
      req.userId = null;
      return next();
    }

    req.userId = decoded._id;
    next();
  } catch (err) {
    // If token verification fails, treat as anonymous user
    req.userId = null;
    next();
  }
};
