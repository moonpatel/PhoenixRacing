import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './components/Blog'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sponsors from './components/Sponsors'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: 'home', element: <div>Home</div> },
      { path: 'sponsors', element: <Sponsors /> },
      { path: 'blog', element: <Blog /> },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
