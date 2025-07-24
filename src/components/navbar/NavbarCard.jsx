import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scrollToTopInstant } from "../../utils/scrollToTop";

const NavbarCard = ({ showNav, navCardToggleButton, navCardLinksRefs }) => {
  const btns = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "products", path: "/products" },
    { id: 3, name: "top sales", path: "/topsales" },
    { id: 4, name: "journal", path: "/journal" },
    { id: 5, name: "contacts", path: "/contacts" },
  ];
  const navbarCardlinks = {
    help: {
      title: "help",
      links: {
        delivery: {
          title: "Delivery",
          path: "/delivery",
        },
        returnsAndExchanges: {
          title: "Returns & Exchanges",
          path: "/returnsandexchanges",
        },
        termsAndConditions: {
          title: "Terms & Conditions",
          path: "/termsandconditions",
        },
        privacyPolicy: {
          title: "Privacy Policy",
          path: "/privacypolicy",
        },
      },
    },
    aboutUs: {
      title: "about us",
      links: {
        aboutUs: {
          title: "About Us",
          path: "/about",
        },
        contacts: {
          title: "Contacts",
          path: "/contacts",
        },
        ourBlog: {
          title: "Our Blog",
          path: "/journal",
        },
      },
    },
  };
  return (
    <div className="flex flex-col justify-between h-full  overflow-hidden ">
      <div className="links flex flex-col gap-1 mt-10 justify-between items-start pl-[10vw] sm:pl-[50vw]  ">
        {btns.map((btn, index) => (
          <NavLink
            onClick={() => {
              navCardToggleButton();
              scrollToTopInstant();
              //   animate all animations
            }}
            to={btn.path}
            key={index}
            className={({ isActive }) =>
              `uppercase  h-[9vw] sm:h-[4vw] ${
                showNav ? "overflow-visible" : " overflow-hidden"
              }  relative ${isActive ? "" : ""}`
            }
          >
            <h1
              ref={(el) => (navCardLinksRefs.current[index] = el)}
              className={` h-[9vw] sm:h-[4vw]  text-[9vw] sm:text-[4vw] font-black  font-["font2"] leading-none transform
         transition-transform duration-1000 ease-in-out 
         ${showNav ? "" : ""}  `}
            >
              {btn.name}
            </h1>
          </NavLink>
        ))}
      </div>
      <div className="flex justify-end gap-2 sm:mt-[7vh]  pr-[10vw] bg-white/5 backdrop-blur-sm my-auto">
        <div className=" w-full h-fit flex mb-[5vw] lg:mb-[20vh]   justify-end ">
          <div className="flex   sm:flex-row">
            {Object.entries(navbarCardlinks).map(([key, headline]) => (
              <div className="p-2   px-[5vw]  flex flex-col   " key={key}>
                {Object.entries(headline.links).map(([key, links]) => (
                  <motion.div
                    className="  mt-[1vw] w-fit relative overflow-hidden sm:h-[1.5vw]"
                    key={key}
                    whileHover="hover"
                    initial="rest"
                    animate="animateHover"
                    whileInView="inView"
                    viewport="viewport"
                  >
                    <Link to={links.path} onClick={scrollToTopInstant}>
                      <motion.h3
                        className="font-extralight sm:text-[1.2vw] font-[font1]  lowercase    "
                        variants={{
                          rest: { y: "100%" },
                          animateHover: { y: "0%", opacity: 0.7 },
                          hover: { y: ["100%", 0], opacity: [0.8, 1] },
                          inView: { y: ["100%", 0], opacity: [1, 0.8] },
                          viewport: { amount: 0.8, delay: 6 }, // Animate to visible and in position
                        }}
                        onClick={() => {
                          navCardToggleButton(); // animate all animations
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {links.title}
                      </motion.h3>
                    </Link>
                    <motion.div
                      className="absolute bottom-0 left-1/2 sm:h-[.1vh] bg-black"
                      variants={{
                        rest: { width: 0, x: "-50%" },
                        hover: { width: "100%", x: "-50%", opacity: 0.6 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarCard;
