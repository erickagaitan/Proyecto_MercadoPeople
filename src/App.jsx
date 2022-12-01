
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import Context from './context/context'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './views/public/Home'
import Login from './views/public/Login'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login />}>Login</Route>
          <Route path="/" element={<Home />}>Home</Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  )
}

export default App;
