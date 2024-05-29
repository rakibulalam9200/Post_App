import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    mode: "cors",
    prepareHeaders: async (headers, { getState }) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builders) => ({}),
});
