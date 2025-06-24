import Url from "../models/url.model.js";
import { conflictError } from "../utils/errorHandler.js";

export const saveShortUrlInDB = async (fullUrl, shortUrl, userId) => {
  try {
    const newUrl = new Url({
      fullUrl,
      shortUrl,
    });
    if (userId) {
      newUrl.user = userId;
    }
    await newUrl.save();
  } catch (err) {
    if (err.code === 11000) {
      throw new conflictError(
        `Short URL already exists : ${err.keyValue.shortUrl}`
      );
    }

    throw new Error(err.message || "Error saving short URL in database");
  }
};

export const searchShortUrlInDB = async (shortUrl) => {
  try {
    const url = await Url.findOneAndUpdate(
      { shortUrl },
      { $inc: { clicks: 1 } },
      { new: true }
    );
    if (!url) throw new Error("Short URL not found");
    return url.fullUrl;
  } catch (err) {
    throw new Error(err.message || "Error searching short URL in database");
  }
};

export const getCustomShortUrl = async (slug) => {
  return await Url.findOne({shortUrl: slug})
}