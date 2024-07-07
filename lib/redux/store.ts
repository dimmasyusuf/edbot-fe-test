import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./features/progressSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      progress: progressReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
