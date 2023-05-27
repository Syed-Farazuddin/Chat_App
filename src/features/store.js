import themeSliceReducer from "./themeSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    themeKey: themeSliceReducer,
  },
});
