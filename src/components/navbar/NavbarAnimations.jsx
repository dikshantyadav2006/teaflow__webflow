import { useRef, useState } from "react";
import gsap from "gsap";

const NavbarAnimations = () => {
  const navCardRef = useRef([]);
  const spanRefs = useRef([]);
  const navCardLinksRefs = useRef([]);
  const [showNav, setShowNav] = useState(false);

  // Animate the Navbar (Show/Hide)
  const animateNavbarCard = () => {
    gsap.to(navCardRef.current, {
      opacity: 1,
      y: showNav ? "-150%" : "0%",
      duration: 1,
      ease: "power1.out",
    });

    setShowNav(!showNav);
  };
  const animateNavbarCardLinks = () => {
    if (!showNav) {
      gsap.fromTo(navCardLinksRefs.current,
        {opacity:0,y:"100%"}, { // Animate all elements in the ref array
        opacity: 1,
        y:0,
        duration: .5,
        ease: "power1.out",
        delay:1,
        stagger: .1, // Adds a delay between animations for a smooth effect
      });
    } else {
      gsap.to(navCardLinksRefs.current, {
        opacity: 0.7,
        y: "150%",
        duration: 0.2,
        ease: "linear",
        stagger: 0.01,
      });
    }
  };
  
  // Animate the menu button (toggle spans)
  const navCardToggleButton = () => {
    animateNavbarCard();
    animateNavbarCardLinks();
    if (!showNav) {
      gsap.to(spanRefs.current[0], {
        y: "100%",
        duration: 0.5,
        ease: "power1.inOut",
        rotate: "45deg",
      });

      gsap.to(spanRefs.current[1], {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });

      gsap.to(spanRefs.current[2], {
        y: "-100%",
        duration: 0.5,
        ease: "power1.inOut",
        rotate: "-45deg",
      });
    } else {
      gsap.to(spanRefs.current[0], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
        rotate: "0deg",
      });

      gsap.to(spanRefs.current[1], {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });

      gsap.to(spanRefs.current[2], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
        rotate: "0deg",
      });
    }

    setShowNav(!showNav);
  };

  return { navCardRef, spanRefs , navCardLinksRefs, showNav,setShowNav, animateNavbarCard, navCardToggleButton };
};

export default NavbarAnimations;
