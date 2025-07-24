import Navbar_btns from './Navbar_btns'
import Nav from './Nav'
import NavbarCard from './NavbarCard.jsx';
import useNavbarAnimations from "./NavbarAnimations";
import CartIcon from '../cart/CartIcon';
import { NavLink } from 'react-router-dom';

const Navbar_main = () => {
  const {showNav,navCardRef,spanRefs,navCardLinksRefs,  navCardToggleButton} = useNavbarAnimations();
  return (
   <div className="nav  w-full h-[10vh]  flex  items-center justify-between px-20  ">
   
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
        <CartIcon />
        <div className="">
            <Nav showNav={showNav} spanRefs={spanRefs}  navCardToggleButton={navCardToggleButton}/>
        </div>
     </div>
     </div>
     {/* Pass navMainRefs to NavMain component */}
     <div  ref={(el) => (navCardRef.current = el )} className={`z-[999] left-0 top-[10vh] absolute w-full bg-white/10 backdrop-blur-md h-[90vh] transition-all duration-300  transform ${showNav ? "translate-y-[0%]" : "-translate-y-[200%] pointer-events-none"} border-b-2 border-white/20 `}  >
      <NavbarCard   showNav={showNav} navCardLinksRefs={navCardLinksRefs} navCardToggleButton={navCardToggleButton}/>
      </div>
   </div>
  )
}

export default Navbar_main
