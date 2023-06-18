// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userSliceApi = createApi({
  reducerPath: 'userSliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/'}),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => 'user',
    }),
    addUser: builder.mutation({
      query: (body)=>({
        url:'user',
        method: 'POST',
        body,
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetuserQuery, useAddUserQuery} = userSliceApi;
