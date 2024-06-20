import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/orders',
    prepareHeaders: (headers) => {
      // TODO get token from local storage
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMDU3MzQ1LCJqdGkiOiI0NzQyOGI5NTNhMTU0MzRiODU4YjE3YjcxNDYwMWUyZiIsInVzZXJfaWQiOiI2MDRkMDNkNy0xYmVjLTQ5NjUtODA2OS03ZjRkZTMxYjM1NjIifQ.qVn0_Xp_rzXh5MusCWOgDkx_Rfx0sn3gg-chVeemEMo';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => '/get_orders/',
    }),

    getOrderDetail: builder.query({
      query: (id) => ({
        url: '/get_order_by_id/',
        params: {
          id,
        },
      }),
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        url: '/create_order_new/',
        method: 'POST',
        body: data,
      }),
    }),

    updateOrder: builder.mutation({
      query: (data) => ({
        url: '/edit_order_status/',
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderDetailQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
} = ordersApi;
