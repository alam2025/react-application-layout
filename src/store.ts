import { configureStore } from "@reduxjs/toolkit";

import authRouter from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authRouter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
