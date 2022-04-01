import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SlideRoutes from 'react-slide-routes'
import Home from '../components/Home'
import Login from '../UserAuth/Login'
import Register from '../UserAuth/Register'

function Routing() {
  return (
    <>
    
     <SlideRoutes>
         <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        </SlideRoutes>
    </>
  )
}

export default Routing