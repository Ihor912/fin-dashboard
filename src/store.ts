import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import finnhubReducer from "./features/finnhub/finnhubSlice";

export const store = configureStore({
  reducer: {
    finnhub: finnhubReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
