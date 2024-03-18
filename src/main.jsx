import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage from './pages/LandingPage.jsx'
import Form from './pages/Form.jsx'
import App from './App.jsx'
import Fashion from './pages/Fashion.jsx'
import Cars from './pages/Cars.jsx'
import Mobiles from './pages/Mobiles.jsx'
import Bikes from './pages/Bikes.jsx'
import Houses from './pages/Houses.jsx'
import Electronics from './pages/Electronics.jsx'
import Tablets from './pages/Tablets.jsx'
import Jobs from './pages/Jobs.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element = {<App/> }>
      <Route path='' element = {<LandingPage/>}/>
      <Route path="/form" element = {<Form/>} />
      <Route path="/Fashion" element = {<Fashion/>} />
      <Route path="/Cars" element = {<Cars/>} />
      <Route path="/Mobiles" element = {<Mobiles/>} />
      <Route path="/Bikes" element = {<Bikes/>} />
      <Route path="/Houses" element = {<Houses/>} />
      <Route path="/Electronics" element = {<Electronics/>} />
      <Route path="/Tablets" element = {<Tablets/>} />
      <Route path="/Jobs" element = {<Jobs/>} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
