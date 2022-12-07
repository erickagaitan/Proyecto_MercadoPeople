import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Context
import ContextAutentificacion from './context/ContextAutentificacion'
// Views
import Navbar from './components/navbar/Navbar'
import Home from './views/public/Home'
import Products from './views/public/CategoryProducts'
import DetailProduct from './views/public/DetailProducts'
import Login from './views/public/login/Login'
import Register from './views/public/register/Register'
import Favorites from './views/private/Favorites'
import ShoppingCart from './views/private/ShoppingCart'
import CreatePost from './views/private/CreatePost'
import Pay from './views/private/Pay'
import Footer from './components/footer/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
// Styles
import '../src/App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextAutentificacion>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>              
              }>
                Login
            </Route>

            <Route path="/singup" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
              }>
                Login
            </Route>
           
            <Route path="/products" element={<Products />}>Products</Route>
            <Route path="/Detail" element={<DetailProduct />}>Products</Route>
            
            <Route path="/pagar" element={
              <ProtectedRoute>
                <Pay />
              </ProtectedRoute>
            }>
               Pay
            </Route>

            <Route path="/favoritos" element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }>
              Favorites
            </Route>


            <Route path="/carro" element={
              <ProtectedRoute>
                <ShoppingCart />
              </ProtectedRoute>
            }>
              Carro
            </Route>
            
            <Route path="/vender" element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }>
              Vender
            </Route>
          </Routes>
          <Footer></Footer>
        </ContextAutentificacion>

      </BrowserRouter>
    </div>
  )
}

export default App;
