import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/products',
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
        headers: {
          Authorization:
            // TODO: Change this to a real token
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMDU3MzQ1LCJqdGkiOiI0NzQyOGI5NTNhMTU0MzRiODU4YjE3YjcxNDYwMWUyZiIsInVzZXJfaWQiOiI2MDRkMDNkNy0xYmVjLTQ5NjUtODA2OS03ZjRkZTMxYjM1NjIifQ.qVn0_Xp_rzXh5MusCWOgDkx_Rfx0sn3gg-chVeemEMo',
        },
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/delete_product_by_id/?id=${id}`,
        method: 'DELETE',
        headers: {
          Authorization:
            // TODO: Change this to a real token
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMDU3MzQ1LCJqdGkiOiI0NzQyOGI5NTNhMTU0MzRiODU4YjE3YjcxNDYwMWUyZiIsInVzZXJfaWQiOiI2MDRkMDNkNy0xYmVjLTQ5NjUtODA2OS03ZjRkZTMxYjM1NjIifQ.qVn0_Xp_rzXh5MusCWOgDkx_Rfx0sn3gg-chVeemEMo',
        },
      }),
    }),

    updateProduct: builder.mutation({
      query: (product) => ({
        url: '/stock_update/',
        method: 'PUT',
        body: product,
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            // TODO: Change this to a real token
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMDU3MzQ1LCJqdGkiOiI0NzQyOGI5NTNhMTU0MzRiODU4YjE3YjcxNDYwMWUyZiIsInVzZXJfaWQiOiI2MDRkMDNkNy0xYmVjLTQ5NjUtODA2OS03ZjRkZTMxYjM1NjIifQ.qVn0_Xp_rzXh5MusCWOgDkx_Rfx0sn3gg-chVeemEMo',
        },
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
