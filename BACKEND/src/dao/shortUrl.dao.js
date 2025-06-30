import Url from "../models/url.model.js";
import { conflictError } from "../utils/errorHandler.js";

export const saveShortUrlInDB = async ( fullUrl, shortUrl, userId, maxClicks, expiryTimeInMinutes, isTemporary) => {
  try {
    const newUrl = new Url({
      fullUrl: fullUrl,
      shortUrl: shortUrl,
      user: userId || null,
    });

    if (isTemporary) {
      if (expiryTimeInMinutes && expiryTimeInMinutes > 0) {
        const expiryDate = new Date();
        expiryDate.setMinutes(expiryDate.getMinutes() + parseInt(expiryTimeInMinutes));
        newUrl.expiresAt = expiryDate;
      }
      if (maxClicks && maxClicks > 0) {
        newUrl.maxClicks = parseInt(maxClicks);
      }
    }
    return await newUrl.save({ validateBeforeSave: false });
  } catch (err) {
    if (err.code === 11000) {
      throw new conflictError(
        `Short URL already exists in DB : ${err.keyValue.shortUrl}`
      );
    }

    throw new Error(err.message || "Error saving short URL in database");
  }
};

export const searchShortUrlInDB = async (shortUrl) => {
  try {
    const url = await Url.findOne({ shortUrl });
    if (!url) throw new Error("Short URL not found");

    const now = new Date();

    if (
      (url.expiresAt && now > url.expiresAt) ||
      (url.maxClicks && url.clicks >= url.maxClicks)
    ) {
      url.expired = true;
      await url.save();
      throw new Error("Link Expired");
    }

    url.clicks++;
    await url.save();

    return url.fullUrl;
  } catch (err) {
    throw new Error(err.message || "Error searching short URL in database");
  }
};

export const getCustomShortUrl = async (slug) => {
  return await Url.findOne({ shortUrl: slug });
};
