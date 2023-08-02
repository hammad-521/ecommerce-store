import { createSlice } from "@reduxjs/toolkit";
import { userCredentials } from "../users-credentials";

const initialState = {
  username: null,
  isLoggedIn: false,
  error: "",
};

const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const isValidCredentials = userCredentials.some(
        (user) => user.username === username && user.password === password
      );

      if (isValidCredentials) {
        state.username = username;
        state.isLoggedIn = true;
      } else {
        state.error = "Invalid Credentials";
      }
    },
    logout: () => initialState,
  },
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
