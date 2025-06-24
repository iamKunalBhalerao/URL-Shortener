import axiosInstance from "../utils/axiosInstance";

export const CreateShortUrl = async (url) => {
  const { data } = await axiosInstance.post("/api/", {
    fullUrl: url,
  });
  return data.shortUrl;
};
