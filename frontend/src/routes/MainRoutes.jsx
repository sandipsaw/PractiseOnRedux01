import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Service from '../pages/Service'
import CreateProduct from '../pages/CreateProduct'
import Login from '../pages/Login'
import Register from '../pages/Register'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/create-product' element={<CreateProduct />} />
      <Route path='/Service' element={<Service />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  )
}

export default MainRoutes