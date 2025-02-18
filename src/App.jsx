import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/navbar/navbar_main'
import AppRoutes from './utils/AppRoutes'
import FooterMain from './components/footer/FooterMain';
const App = () => {


  const locomotiveScroll = new LocomotiveScroll();
  

  return (
    <main className='webColor'>
       
    <Navbar/>
    <AppRoutes/>
    <FooterMain/>
    </main>
  )
}

export default App
