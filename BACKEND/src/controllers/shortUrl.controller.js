import { searchShortUrlInDB } from "../dao/shortUrl.js";
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js";
import AsyncHandler from "../utils/tryCatchWrapper.js";

export const createShortUrl = AsyncHandler(async (req, res, next) => {
  try {
    const { fullUrl } = req.body;
    if (!fullUrl) throw new Error("Full URL is required");
    const shortUrl = await createShortUrlWithoutUser(fullUrl);
    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
  } catch (err) {
    next(err);
  }
});

export const redirectShortUrl = AsyncHandler(async (req, res, next) => {
  try {
    const { shortUrl } = req.params;
    // if (!shortUrl) throw new Error("Short URL is required");
    const fullUrl = await searchShortUrlInDB(shortUrl);
    if (!fullUrl) throw new Error("Short URL not found");
    res.redirect(fullUrl);
  } catch (err) {
    next(err);
  }
});
