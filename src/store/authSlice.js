import { createSlice } from "@reduxjs/toolkit";
import { userCredentials } from "../users-credentials";

const initialState = {
  username: null,
  password: null,
  isLoggedIn: false,
  error: "",
};

const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password, remember } = action.payload;
      const isValidCredentials = userCredentials.some(
        (user) => user.username === username && user.password === password
      );

      if (isValidCredentials) {
        state.username = username;
        state.isLoggedIn = true;
        if (remember) {
          localStorage.setItem("credentials", JSON.stringify(action.payload));
        }
      } else {
        state.error = "Invalid Credentials";
      }
    },
    logout: (state) => {
      localStorage.removeItem("credentials");
      return initialState;
    },
    setRememberCredentials: (state, action) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
      state.isLoggedIn = true;
    },
  },
});

export const { login, logout, setRememberCredentials } = userAuthSlice.actions;

export default userAuthSlice.reducer;
