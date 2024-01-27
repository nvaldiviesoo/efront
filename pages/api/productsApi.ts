import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => '/get_products/',
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
