import React from 'react'
import AboutMain from '../components/about/AboutMain'
import ContactMain from '../components/contact/ContactMain'
import NotFound from '../components/notFound/NotFound'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../components/home/HomePage'
import Journal from '../components/journal/Journal'
import ProductsMain from '../components/products/ProductsMain'
import ProductDetails from '../components/products/ProductDetails'
import PrivacyPolicyMain from '../components/privacyPolicy/PrivacyPolicyMain'
import ScrollToTop from '../components/common/ScrollToTop'
const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsMain/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/journal" element={<Journal/>} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/contacts" element={<ContactMain />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyMain />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
