
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import Context from './context/context'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './views/public/Home'
import Login from './views/public/Login'
import Favorites from './views/private/Favorites'
import ShoppingCart from './views/private/ShoppingCart'
import CreatePost from './views/private/CreatePost'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login />}>Login</Route>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/favoritos" element={<Favorites />}>Favorites</Route>
          <Route path="/carro" element={<ShoppingCart />}>Carro</Route>
          <Route path="/vender" element={<CreatePost />}>Vender</Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  )
}

export default App;
