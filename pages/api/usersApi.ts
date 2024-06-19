import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/user',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/all/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            //  TODO: Change this to a real token
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMDU3MzQ1LCJqdGkiOiI0NzQyOGI5NTNhMTU0MzRiODU4YjE3YjcxNDYwMWUyZiIsInVzZXJfaWQiOiI2MDRkMDNkNy0xYmVjLTQ5NjUtODA2OS03ZjRkZTMxYjM1NjIifQ.qVn0_Xp_rzXh5MusCWOgDkx_Rfx0sn3gg-chVeemEMo',
        },
      }),
    }),

    updateUser: builder.mutation({
      query: (user) => ({
        url: `/staff/?id=${user.id}`,
        method: 'PUT',
        body: user,
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

export const { useGetUsersQuery, useUpdateUserMutation } = userApi;
