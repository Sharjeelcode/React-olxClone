import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage from './pages/LandingPage.jsx'
import Form from './pages/Form.jsx'
import App from './App.jsx'
import Fashion from './pages/Fashion.jsx'
import Mobile from './pages/Mobile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element = {<App/> }>
      <Route path='' element = {<LandingPage/>}/>
      <Route path="/form" element = {<Form/>} />
      <Route path="/mobile" element = {<Mobile/>} />
      <Route path="/Fashion" element = {<Fashion/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
