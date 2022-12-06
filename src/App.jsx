import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import Context from './context/context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './views/public/Home'
import Products from './views/public/CategoryProducts'
import DetailProduct from './views/public/DetailProducts'
import Login from './views/public/Login'

import Pay from './views/private/Pay'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/login" element={<Login />}>Login</Route>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/products" element={<Products />}>Products</Route>
          <Route path="/Detail" element={<DetailProduct />}>Products</Route>
          <Route path="/pagar" element={<Pay />}>Pay</Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>

    </div>
  )
}

export default App;
