import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/nullstyle.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostPage from './pages/PostPage/PostPage.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },

  {
    path:'posts/:postId',
    element:<PostPage/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
