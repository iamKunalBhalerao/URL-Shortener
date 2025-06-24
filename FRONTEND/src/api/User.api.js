import axiosInstance from "../utils/axiosInstance";

export const signup = async (username, email, password) => {
    axiosInstance.defaults.withCredentials = true;
  try {
    const { data } = await axiosInstance.post("/api/auth/signup", {
      username,
      email,
      password,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const signin = async (email, password) => {
    axiosInstance.defaults.withCredentials = true;
  try {
    const { data } = await axiosInstance.post("/api/auth/signin", {
      email,
      password,
    });
    return data;
  } catch (error) {
    return error;
  }
};
