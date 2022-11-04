import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getProducts } from "./slice";

export const productsAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  }),
  reducerPath: "productsAPI",
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products?populate=%2A`,
      transformResponse: (response) => response.data,
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `products/${id}?populate=%2A`,
      }),
      transformResponse: (response) => response.data,
    }),
    getProductByCategory: builder.query({
      query: (category) => ({
        url: `products?populate=%2A&filters[categorie][$eq]=${encodeURIComponent(
          category
        )}`,
      }),
      transformResponse: (response) => response.data,
    }),
    createQuote: builder.mutation({
      query: (data) => ({ url: "quotes", body: data, method: "POST" }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateQuoteMutation,
  useGetProductByCategoryQuery,
  endpoints,
} = productsAPI;
