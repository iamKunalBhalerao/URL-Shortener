// Create a Instance of Axios

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
});

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx cause this function to trigger
    let errorMessage = "An unexpected error occurred";

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, data } = error.response;

      switch (status) {
        case 400:
          errorMessage = data.message || "Bad request";
          break;
        case 401:
          errorMessage = "Unauthorized access";
          break;
        case 404:
          errorMessage = "Resource not found";
          break;
        case 500:
          errorMessage = "Internal server error";
          break;
        default:
          errorMessage = data.message || `Error: ${status}`;
      }
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = "No response from server";
    } else {
      // Something happened in setting up the request
      errorMessage = error.message;
    }

    // You can log errors or perform other actions here
    console.error("API Error:", errorMessage);

    // Return a rejected promise with the error message
    return Promise.reject({
      message:
        error.response?.data?.message ||
        error.message ||
        "Unknown Error Occcured",
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);

export default axiosInstance;
