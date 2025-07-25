import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/navbar/Navbar_main'
import AppRoutes from './utils/AppRoutes'
import FooterMain from './components/footer/FooterMain';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import NotificationSystem from './components/notification/NotificationSystem';
const App = () => {


  const locomotiveScroll = new LocomotiveScroll();
  

  return (
    <AuthProvider>
      <CartProvider>
        <main className='webColor relative'>
          {/* Glass Background */}
          <div className="fixed inset-0 bg-gradient-to-br from-blue-50/30 via-white/20 to-purple-50/30 backdrop-blur-3xl -z-10"></div>
          <Navbar/>
          <NotificationSystem/>
          <div className="pt-[10vh]">
            <AppRoutes/>
          </div>
          <FooterMain/>
        </main>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
