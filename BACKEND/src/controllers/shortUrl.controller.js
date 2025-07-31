import { searchShortUrlInDB } from "../dao/shortUrl.dao.js";
import {
  createShortUrlWithoutUser,
  createShortUrlWithUser,
} from "../services/shortUrl.service.js";
import AsyncHandler from "../utils/tryCatchWrapper.js";

export const createShortUrl = AsyncHandler(async (req, res, next) => {
  try {
    const { fullUrl, slug, maxClicks, expiryTimeInMinutes, isTemporary } = req.body;
    
    if (!fullUrl) throw new Error("Full URL is required");
    
    const userId = req.userId;
    
    if (userId) {
      const result = await createShortUrlWithUser( fullUrl, slug, userId, maxClicks, expiryTimeInMinutes, isTemporary);

      res.status(200).json({
        success: true,
        shortUrl: process.env.APP_URL + result.shortUrl,
        message: result.isTemporary
          ? "Temporary Link is Created."
          : "Permanent Link is Created.",
        expiresAt: result.expiresAt,
        maxClicks: result.maxClicks,
      });
    } else {
      const shortUrl = await createShortUrlWithoutUser(fullUrl);
      res.status(200).json({ 
        success: true,
        shortUrl: process.env.APP_URL + shortUrl
       });
    }
  } catch (err) {
    next(err);
  }
});

export const redirectShortUrl = AsyncHandler(async (req, res, next) => {
  try {
    const { shortUrl } = req.params;

    if (!shortUrl) throw new Error("Short URL is required");

    const fullUrl = await searchShortUrlInDB(shortUrl);

    if (!fullUrl) throw new Error("Short URL not found");

    res.redirect(fullUrl);
  } catch (err) {
    next(err);
  }
});
