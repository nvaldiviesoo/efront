import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useUserToken } from './tokenHooks';

export const metricApi = createApi({
  reducerPath: 'metricApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/metrics`,
    prepareHeaders: (headers, { getState = useUserToken }) => {
      // TODO get token from local storage
      // const token = process.env.NEXT_PUBLIC_TOKEN;
      const user = getState();
      if (user) {
        headers.set('Authorization', `Bearer ${user.auth?.user.access}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMetrics: builder.query({
      query: () => '/get_metrics/',
    }),
  }),
});

export const { useGetMetricsQuery } = metricApi;
