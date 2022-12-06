import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextAutentificacion from './context/ContextAutentificacion'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './views/public/Home'
import Login from './views/public/login/Login'
import Register from './views/public/register/Register'
import Favorites from './views/private/Favorites'
import ShoppingCart from './views/private/ShoppingCart'
import CreatePost from './views/private/CreatePost'
//import '../src/App.css'

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
