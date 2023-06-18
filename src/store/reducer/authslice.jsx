// // Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import dotenv from 'dotenv';
dotenv.config();
// // Define a service using a base URL and expected endpoints
export const authSliceApi = createApi({
  reducerPath: 'authSliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL}),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
        query: (body)=>({
            url:'auth/login',
            method: 'POST',
            body,
          })
    }),
  })
});

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
export const { useLoginUserMutation} = authSliceApi;