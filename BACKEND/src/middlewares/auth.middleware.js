import { verifyToken } from "../utils/generateTokens.js";
import { UnauthorizedError } from "../utils/errorHandler.js";

export const isAuth = async (req, res, next) => {
  try {
    const accessToken  = req.cookies?.accessToken
    if (!accessToken) {
      throw new UnauthorizedError("You are not authorized");
    }

    const decoded = await verifyToken(accessToken);
    if (!decoded) {
        throw new UnauthorizedError("You are not authorized");
    }

    req.userId = decoded._id;
    next();
  } catch (err) {
    next(err);
  }
};
