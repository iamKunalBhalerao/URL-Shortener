import { saveShortUrlInDB } from "../dao/shortUrl.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrlWithUser = async (fullUrl, userId) => {
  try {
    const shortUrl = await generateNanoId(7);
    if (!shortUrl) throw new Error("Failed to generate short URL");
    await saveShortUrlInDB(fullUrl, shortUrl, userId);
    return shortUrl;
  } catch (err) {
    throw err;
  }
};

export const createShortUrlWithoutUser = async (fullUrl) => {
  try {
    const shortUrl = await generateNanoId(7);
    if (!shortUrl) throw new Error("Failed to generate short URL");
    await saveShortUrlInDB(fullUrl, shortUrl);
    return shortUrl;
  } catch (err) {
    throw err;
  }
};
