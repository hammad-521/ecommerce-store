import React from "react";
import "./App.css";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import RootLayout from "./RootLayout";

import { ConfigProvider } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./pages/productdetail/ProductDetail";
import ProtecteRoutes from "./ProtecteRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { element: <Login />, index: true },
      {
        path: "products",
        element: (
          <ProtecteRoutes>
            <Home />
          </ProtecteRoutes>
        ),
      },
      {
        path: "product-detail/:id",
        element: (
          <ProtecteRoutes>
            <ProductDetail />
          </ProtecteRoutes>
        ),
      },
    ],
  },
]);
const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
