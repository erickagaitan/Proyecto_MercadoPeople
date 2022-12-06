import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextAutentificacion from './context/ContextAutentificacion'
import Footer from './components/Footer'

import Navbar from './components/Navbar'


import Home from './views/public/Home'
import Products from './views/public/CategoryProducts'
import DetailProduct from './views/public/DetailProducts'
import Login from './views/public/Login'
import Register from './views/public/Register'
import '../src/App.css'
import Favorites from './views/private/Favorites'
import ShoppingCart from './views/private/ShoppingCart'
import CreatePost from './views/private/CreatePost'

import Pay from './views/private/Pay'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

       

       

        <ContextAutentificacion>
          <Navbar></Navbar>
          <Routes>

          <Route path="/login" element={<Login />}>Login</Route>
          <Route path="/singup" element={<Register />}>Login</Route>
          <Route path="/" element={<Home />}>Home</Route>

          <Route path="/products" element={<Products />}>Products</Route>
          <Route path="/Detail" element={<DetailProduct />}>Products</Route>
          <Route path="/pagar" element={<Pay />}>Pay</Route>
      

       

          <Route path="/favoritos" element={<Favorites />}>Favorites</Route>
          <Route path="/carro" element={<ShoppingCart />}>Carro</Route>
          <Route path="/vender" element={<CreatePost />}>Vender</Route>
          </Routes>
          <Footer></Footer>
        </ContextAutentificacion>

      </BrowserRouter>
    </div>
  )
}

export default App;
