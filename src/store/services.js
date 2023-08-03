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
    getProductDetail: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByCategoryQuery,
  useGetProductDetailQuery,
} = productsJsonApi;
