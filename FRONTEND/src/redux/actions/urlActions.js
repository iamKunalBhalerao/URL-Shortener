import {
  createUrlStart,
  createUrlSuccess,
  createUrlFailure,
  fetchUrlsStart,
  fetchUrlsSuccess,
  fetchUrlsFailure,
} from '../slices/urlSlice';
import { CreateShortUrl } from '../../api/ShortUrl.api';

// Create short URL action
export const createShortUrl = (originalUrl) => async (dispatch) => {
  try {
    dispatch(createUrlStart());
    const shortUrl = await CreateShortUrl(originalUrl);
    
    if (shortUrl) {
      dispatch(createUrlSuccess({ originalUrl, shortUrl }));
      return { success: true, shortUrl };
    } else {
      dispatch(createUrlFailure('Failed to create short URL'));
      return { success: false, message: 'Failed to create short URL' };
    }
  } catch (error) {
    dispatch(createUrlFailure(error.message || 'Failed to create short URL'));
    return { success: false, message: error.message || 'Failed to create short URL' };
  }
};

// Fetch user's URLs (you'll need to implement this API function)
export const fetchUserUrls = () => async (dispatch) => {
  try {
    dispatch(fetchUrlsStart());
    
    // This is a placeholder - you'll need to implement this API function
    // const urls = await getUserUrls();
    
    // For now, we'll just return an empty array
    const urls = [];
    
    dispatch(fetchUrlsSuccess(urls));
    return { success: true, urls };
  } catch (error) {
    dispatch(fetchUrlsFailure(error.message || 'Failed to fetch URLs'));
    return { success: false, message: error.message || 'Failed to fetch URLs' };
  }
};