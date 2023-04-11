import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from './components/Blog/Blog'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'
import Statistics from './components/Statistics/Statistics'
import './index.css'
import { savedJobData } from './loaders/jobdata'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <AppliedJobs></AppliedJobs>,
        loader: savedJobData
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
