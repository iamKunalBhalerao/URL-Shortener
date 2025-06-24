import { getCustomShortUrl, saveShortUrlInDB } from "../dao/shortUrl.dao.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrlWithUser = async (fullUrl, userId, slug) => {
  try {
    const shortUrl = slug || generateNanoId(7);
    if (!shortUrl) throw new Error("Failed to generate short URL");
    const exists = await getCustomShortUrl(slug)
    if(exists) throw new Error("This custom URL Alredy Exists!");
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
