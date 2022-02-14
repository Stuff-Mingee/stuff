import { configureStore } from "@reduxjs/toolkit";
import storiesReducer, { fetchStories } from "../features/storiesSlice";

export const store = configureStore({
  reducer: {
    stories: storiesReducer,
  },
});

store.dispatch(fetchStories());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
