import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsJsonApi = createApi({
  reducerPath: "productsJsonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductByCategory: builder.query({
      query: (category) => `products/category/${category}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByCategoryQuery } =
  productsJsonApi;
