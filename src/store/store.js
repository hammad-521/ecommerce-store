import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userAuthReducer from "./authSlice";
import { productsJsonApi } from "./services";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    [productsJsonApi.reducerPath]: productsJsonApi.reducer,
    userAuth: userAuthReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsJsonApi.middleware),
});

setupListeners(store.dispatch);
