import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userAuthReducer from "./authSlice";
import { productsJsonApi } from "./services";

export const store = configureStore({
  reducer: {
    [productsJsonApi.reducerPath]: productsJsonApi.reducer,
    userAuth: userAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsJsonApi.middleware),
});

setupListeners(store.dispatch);
