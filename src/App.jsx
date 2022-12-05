import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextAutentificacion from './context/ContextAutentificacion'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './views/public/Home'
import Login from './views/public/Login'
import Register from './views/public/Register'
import '../src/App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextAutentificacion>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home />}>Home</Route>
            <Route exact path="/singup" element={<Register />}>Registrarse</Route>
            <Route exact path="/login" element={<Login />}>Login</Route>
          </Routes>
          <Footer></Footer>
        </ContextAutentificacion>
      </BrowserRouter>
    </div>
  )
}

export default App;
