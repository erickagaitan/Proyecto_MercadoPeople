import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styles
import '../src/App.css'
// Alert
import Swal from 'sweetalert2'
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
import Favorites from './views/private/favorites/Favorites'
import ShoppingCart from './views/private/cart/ShoppingCart'
import CreatePost from './views/private/CreatePost'
import Pay from './views/private/Pay'
import Footer from './components/footer/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'

function App() {

  const [users, setUsers] = useState([])
  const [categories, setCategories] = useState([])
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])

  const handleFavorites = (item) => {
    const enFavorites = favorites.includes(item)
    if (enFavorites) {
      const updatedFavorites = favorites.filter((favorito) => favorito !== item)
      setFavorites(updatedFavorites)
    } else {
      const updatedFavorites = [...favorites]
      updatedFavorites.push(item)
      setFavorites(updatedFavorites)
    }
  }
  const handleFavoritesAll = (items) => {
    const updateList = [...favorites]
    items.forEach((element) => {
      const itemIndex = favorites.findIndex(f => f.id === element.id)
      console.log(itemIndex);
      if (itemIndex !== -1) {
        updateList.splice(itemIndex, 1);
      }
    });
    setFavorites(updateList)
  }

  const addToCart = (item) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Producto Agregado al Carro de Compras.'
    })
    const itemIndex = cart.findIndex((product) => product.id === item.id)
    const updateCart = [...cart]

    if (itemIndex === -1) {
      const product = {
        id: item.id,
        count: 1,
        img: item.img,
        title: item.title,
        price: item.price
      }
      updateCart.push(product)
    } else {
      updateCart[itemIndex].count += 1
    }
    setCart(updateCart)
  }
  const removeFromCart = (item) => {
    const itemIndex = cart.findIndex((product) => product.id === item.id)
    const updateCart = [...cart]
    updateCart[itemIndex].count -= 1
    if (updateCart[itemIndex].count <= 0) {
      updateCart.splice(itemIndex, 1)
    }
    setCart(updateCart)
  }

  const cartTotal = () => {
    let total = 0
    cart.forEach((item) => total += item.count * item.price)
    return total
  }

  const newItemCategories = (newItem) => {
    newItem.features = ['a', 'b', 'c']
    newItem.user_id = 1
    newItem.id = categories.length + 1
    const newObject = [...categories, newItem]
    setCategories(newObject)
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Producto Agregado!',
      showConfirmButton: false,
      timer: 2500
    })
  }

  useEffect(() => {
    fetch('/categories.json')
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((e) => console.log(e))
  }, [])


  const globalState = { categories, addToCart, cart, removeFromCart, cartTotal, handleFavorites, handleFavoritesAll, favorites, newItemCategories }

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
              <Route path="/detail/:id" element={<DetailProduct />}>Detail</Route>

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
