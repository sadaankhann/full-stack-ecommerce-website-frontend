import React from 'react'
import Homepage from './Homepage'
import { Routes, Route } from 'react-router-dom'
import ProductListing from './ProductListing'
import ProductDetails from './ProductDetails'
import SignUp from './SignUp/SignUp'
import Login from './Login/Login'
import Cart from './Cart'
import LoginAdmin from './Admin/LoginAdmin'


const App = () => {

  

  return (

    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/products' element={<ProductListing/>}/>
        <Route path={`/productsdetails/:id`} element={<ProductDetails/>}/>
        <Route path={'/signup'} element={<SignUp/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/admin/login'} element={<LoginAdmin/>}/>
      </Routes>
    </div>
  )
}

export default App
