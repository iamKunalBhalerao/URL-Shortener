import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urls: [],
  currentUrl: null,
  loading: false,
  error: null,
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    createUrl: (state, action) => {
      state.urls.push(action.payload);
    },
    fetchUrls: (state, action) => {
      state.urls = action.payload;
    },
  },
});

export const { createUrl, fetchUrl } = urlSlice.actions;

export default urlSlice.reducer;
