import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styles
import '../src/App.css'
// Context
import ContextAutentificacion from './context/ContextAutentificacion'
import Context from './context/context'
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

function App() {

  const [users, setUsers] = useState([])
  const [categories, setCategories] = useState([])


  useEffect(() => {
    fetch('/users.json')
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    fetch('/categories.json')
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((e) => console.log(e))
  }, [])
  const globalState = { categories }

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <ContextAutentificacion>
            <Navbar></Navbar>
            <Routes>
              {/* public */}
              <Route path="/" element={<Home />}>Home</Route>
              <Route path="/products" element={<Products />}>Products</Route>
              <Route path="/detail/:user_id" element={<DetailProduct />}>Detail</Route>

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
                Registrarte
              </Route>


              {/* private */}
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
      </Context.Provider>
    </div>
  )
}

export default App;
