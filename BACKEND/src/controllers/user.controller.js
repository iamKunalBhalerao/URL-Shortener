import { findUrlofUser } from "../services/user.service.js";
import AsyncHandler from "../utils/tryCatchWrapper.js";

export const getUserUrls = AsyncHandler(async (req, res, next) => {
  try {
    const userId = req.userId;

    const urls = await findUrlofUser(userId);

    res.status(200).json({
      success: true,
      message: 'Urls Fetched Successfully.',
      urls,
    });
  } catch (err) {
    next(err);
  }
});
