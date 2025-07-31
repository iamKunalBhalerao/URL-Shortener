import axiosInstance from "../utils/axiosInstance";

export const CreateShortUrl = async (url, slug) => {
  const { data } = await axiosInstance.post("/", {
    fullUrl: url,
    slug,
  });
  return data.shortUrl;
};
