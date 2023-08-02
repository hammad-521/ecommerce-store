import { useEffect } from "react";
import { setRememberCredentials } from "./authSlice";

export const fetchRememberData = () => {
  return (dispatch) => {
    const usersCredentials = JSON.parse(localStorage.getItem("credentials"));
    usersCredentials && dispatch(setRememberCredentials(usersCredentials));
  };
};
