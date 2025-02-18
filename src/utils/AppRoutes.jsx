import React from 'react'
import AboutMain from '../components/about/AboutMain'
import ContactMain from '../components/contact/ContactMain'
import NotFound from '../components/notFound/NotFound'
import { Route, Router ,Routes} from 'react-router-dom'
import HomePage from '../components/home/HomePage'
import Journal from '../components/journal/Journal'
const AppRoutes = () => {
  return (
    <>
     
     
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/journal" element={<Journal/>} />
          <Route path="/about" element={<AboutMain />} />
          <Route path="/contacts" element={<ContactMain />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     
    
    </>
  )
}

export default AppRoutes
