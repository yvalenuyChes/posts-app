import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from './Slices/postSlice'
import { allPostsApi } from './Slices/allPostsSlice'

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [allPostsApi.reducerPath] : allPostsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allPostsApi.middleware, postApi.middleware, ),
})

setupListeners(store.dispatch)