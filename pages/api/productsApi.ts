import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useUserToken } from './tokenHooks';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/products`,
    prepareHeaders: (headers, { getState = useUserToken }) => {
      // TODO get token from local storage
      // const token = process.env.NEXT_PUBLIC_TOKEN;
      const user = getState();
      if (user) {
        headers.set('Authorization', `Bearer ${user.auth?.user.access}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/',
    }),

    getProductDetail: builder.query({
      query: (id) => ({
        url: '/get_product_by_id/',
        params: {
          id,
        },
      }),
    }),

    getAllProductByID: builder.query({
      query: (id) => ({
        url: '/get_product_by_id_specific_color/',
        params: {
          id,
        },
      }),
    }),

    getProductsByCategory: builder.query({
      query: (category) => ({
        url: `/filter_products/?category=${category}`,
      }),
    }),

    createProduct: builder.mutation({
      query: (product) => ({
        url: '/add_product/',
        method: 'POST',
        body: product,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/delete_product_by_id/?id=${id}`,
        method: 'DELETE',
      }),
    }),

    updateProduct: builder.mutation({
      query: (product) => ({
        url: '/stock_update/',
        method: 'PUT',
        body: product,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailQuery,
  useGetAllProductByIDQuery,
  useGetProductsByCategoryQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
