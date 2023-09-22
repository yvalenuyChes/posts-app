import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const allPostsApi = createApi({
  reducerPath: 'apiAllPost',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => '/posts',
    }),
  }),
})

export const { useGetAllPostsQuery } = allPostsApi