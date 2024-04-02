import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Routing/Home'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import CustomerDashboard from './components/Customer Dashboard/CustomerDashboard'
import { CartProvider } from './CartContext'
import SingalProduct from './components/Singal/SingalProduct'
import "react-multi-carousel/lib/styles.css";
import { ProProvider } from './components/ProductContext'
import ProductListing from './components/Listing/ProductListing'
const App = () => {
  return (
    <CartProvider>
    <ProProvider>
      <Router basename="/Kidstoys">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<SingalProduct />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/order' element={<CustomerDashboard />} />
          <Route path='/list' element={<ProductListing />} />

        </Routes>
      </Router>
      </ProProvider>
    </CartProvider>
  )
}

export default App;
