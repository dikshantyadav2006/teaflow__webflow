import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/navbar/Navbar_main'
import AppRoutes from './utils/AppRoutes'
import FooterMain from './components/footer/FooterMain';
import { CartProvider } from './context/CartContext';
const App = () => {


  const locomotiveScroll = new LocomotiveScroll();
  

  return (
    <CartProvider>
      <main className='webColor'>
        <Navbar/>
        <AppRoutes/>
        <FooterMain/>
      </main>
    </CartProvider>
  )
}

export default App
