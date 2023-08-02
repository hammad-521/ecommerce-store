import React from "react";

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtecteRoutes = ({ children }) => {
  const user = useSelector((state) => state.userAuth.username);
  console.log(user);

  if (!user) {
    return <Navigate to="/" replace={true} />;
  } else return children;
};

export default ProtecteRoutes;
