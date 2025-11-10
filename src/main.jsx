import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Post from './routes/Post.jsx'



import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// PAGES
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Admin from './routes/Admin.jsx'
import Edit from './routes/Edit.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new',
        element: <NewPost />,
      },
      {
        path: '/post/:id',
        element: <Post />,
      },

      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/edit/:id',
        element: <Edit />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
