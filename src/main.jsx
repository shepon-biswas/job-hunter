import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'
import Statistics from './components/Statistics/Statistics'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: 'job/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch('/jobs.json')

      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedjob',
        element: <h1>Applied Job</h1>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
