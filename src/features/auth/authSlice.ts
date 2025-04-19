import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: null | { identifier: string };
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },

    loadUserFromStorage: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.user = JSON.parse(user);
      }
    },
  },
});

export const { login, logOut, loadUserFromStorage } = authSlice.actions;

export default authSlice.reducer;
