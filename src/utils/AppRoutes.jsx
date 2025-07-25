import React from 'react'
import AboutMain from '../components/about/AboutMain'
import ContactMain from '../components/contact/ContactMain'
import NotFound from '../components/notFound/NotFound'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../components/home/HomePage'
import Journal from '../components/journal/Journal'
import BlogDetail from '../components/journal/BlogDetail'
import ProductsMain from '../components/products/ProductsMain'
import ProductDetails from '../components/products/ProductDetails'
import TopShales from '../components/topshales/TopShales'
import PrivacyPolicyMain from '../components/privacyPolicy/PrivacyPolicyMain'
import ScrollToTop from '../components/common/ScrollToTop'
import CartPage from '../components/cart/CartPage'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import CheckoutMain from '../components/checkout/CheckoutMain'
import CheckoutSuccess from '../components/checkout/CheckoutSuccess'
import ProtectedRoute from '../components/auth/ProtectedRoute'
const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsMain/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <CheckoutMain/>
          </ProtectedRoute>
        } />
        <Route path="/checkout/success" element={
          <ProtectedRoute>
            <CheckoutSuccess/>
          </ProtectedRoute>
        } />
        <Route path="/journal" element={<Journal/>} />
        <Route path="/journal/:slug" element={<BlogDetail/>} />
        <Route path="/topshales" element={<TopShales/>} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/contacts" element={<ContactMain />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyMain />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
