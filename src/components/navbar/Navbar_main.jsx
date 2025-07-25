import Navbar_btns from './Navbar_btns'
import Nav from './Nav'
import NavbarCard from './NavbarCard.jsx';
import useNavbarAnimations from "./NavbarAnimations";
import CartIcon from '../cart/CartIcon';
import UserMenu from './UserMenu';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import useScrollDetection from '../../hooks/useScrollDetection';

const Navbar_main = () => {
  const {showNav,navCardRef,spanRefs,navCardLinksRefs,  navCardToggleButton} = useNavbarAnimations();
  const { isScrolling, showOnScrollStop, scrollDirection, scrollY } = useScrollDetection(1000);

  // Determine navbar visibility
  const shouldShowNavbar = scrollY < 100 || showOnScrollStop || showNav || scrollDirection === 'up';

  return (
   <motion.div
     initial={{ y: 0 }}
     animate={{
       y: shouldShowNavbar ? 0 : -100,
       opacity: shouldShowNavbar ? 1 : 0
     }}
     transition={{
       duration: 0.3,
       ease: "easeInOut"
     }}
     className="nav fixed top-0 left-0 w-full h-[10vh] flex items-center justify-between px-20 bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-[1000]"
   >
   
     <div className="navlogo h-full flex  items-center cursor-pointer font-['font4'] z-[2]">
       {/* link */}
       <NavLink to='/'>
        <div className= "">
          <img className='w-[118px]'  src="https://cdn.prod.website-files.com/64899c647bc07ddd2ccf0cef/64899c647bc07ddd2ccf0e26_TeaFlow_logo_black.svg" alt="" />
        </div>
       </NavLink>
        
     </div>
     <div className="items-center  justify-between lg:w-[50%]  lg:gap-32 flex z-[2] ">
     <div className=" h-full min-w-10  items-center hidden lg:flex ">
        <Navbar_btns/>
     </div>
      <div className="h-full min-w-10 flex items-center gap-4">
        <UserMenu />
        <CartIcon />
        <div className="">
            <Nav showNav={showNav} spanRefs={spanRefs}  navCardToggleButton={navCardToggleButton}/>
        </div>
      </div>
     </div>

     {/* Pass navMainRefs to NavMain component */}
     <div  ref={(el) => (navCardRef.current = el )} className={`z-[999] left-0 top-[10vh] absolute w-full bg-white/95 backdrop-blur-md h-[90vh] transition-all duration-300  transform ${showNav ? "translate-y-[0%]" : "-translate-y-[200%] pointer-events-none"} border-b-2 border-gray-200 `}  >
      <NavbarCard   showNav={showNav} navCardLinksRefs={navCardLinksRefs} navCardToggleButton={navCardToggleButton}/>
     </div>
   </motion.div>
  )
}

export default Navbar_main
