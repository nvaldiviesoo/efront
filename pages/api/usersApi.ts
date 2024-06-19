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
            // TODO: Change this to a real token
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMDU0OTk0LCJqdGkiOiJlNmVhNjc4NWJlZjg0NTMxODI0NThjZmQ3MjczYTZiYyIsInVzZXJfaWQiOiIwNmIyYmY5My0xZmVlLTQ1ODctODdmOC1kMjk4Y2U1Yjc1MzEifQ.ZoF-g6D8Vcv3Ioc1udK4JjeR6_krWOy1uq2BSQnlxSs',
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
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMDU0OTk0LCJqdGkiOiJlNmVhNjc4NWJlZjg0NTMxODI0NThjZmQ3MjczYTZiYyIsInVzZXJfaWQiOiIwNmIyYmY5My0xZmVlLTQ1ODctODdmOC1kMjk4Y2U1Yjc1MzEifQ.ZoF-g6D8Vcv3Ioc1udK4JjeR6_krWOy1uq2BSQnlxSs',
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = userApi;
