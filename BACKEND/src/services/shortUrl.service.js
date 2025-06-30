import { getCustomShortUrl, saveShortUrlInDB } from "../dao/shortUrl.dao.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrlWithUser = async ( fullUrl, slug, userId, maxClicks, expiryTimeInMinutes, isTemporary) => {
  try {
    const shortUrl = slug || generateNanoId(7);

    if (!shortUrl) throw new Error("Failed to generate short URL");

    const exists = await getCustomShortUrl(shortUrl);

    if (exists) throw new Error("This custom URL Alredy Exists!");

    const newUrl = await saveShortUrlInDB( fullUrl, shortUrl, userId, maxClicks, expiryTimeInMinutes, isTemporary );

    return {
      shortUrl,
      isTemporary: newUrl.isTemporary || null,
      expiresAt: newUrl.expiresAt || null,
      maxClicks: newUrl.maxClicks || null,
    };
  } catch (err) {
    throw err;
  }
};

export const createShortUrlWithoutUser = async (fullUrl) => {
  try {
    const shortUrl = generateNanoId(7);
    if (!shortUrl) throw new Error("Failed to generate short URL");
    await saveShortUrlInDB(fullUrl, shortUrl);
    return shortUrl;
  } catch (err) {
    throw err;
  }
};
