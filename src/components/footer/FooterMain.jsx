import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";

const FooterMain = () => {
  const footerLinks = {
    shop: {
      title: "shop",
      links: {
        home: {
          title: "Home",
          path: "/",
        },
        product: {
          title: "Products",
          path: "/products",
        },
        topSales: {
          title: "Top Sales",
          path: "/topsales",
        },
        premiumTea: {
          title: "Premium Tea",
          path: "/premiumtea",
        },
        set: {
          title: "Set",
          path: "/set",
        },
      },
    },
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

  const socialMedia = [
    {
      path: "https://www.instagram.com/floraldesign/",
      icon: "instagram",
      imgUrl:
        "https://cdn.prod.website-files.com/64899c647bc07ddd2ccf0cef/64899c647bc07ddd2ccf0d6a_Instagram%20icon.svg",
    },
    {
      path: "https://www.facebook.com/floraldesign/",
      icon: "facebook",
      imgUrl:
        "https://cdn.prod.website-files.com/64899c647bc07ddd2ccf0cef/64899c647bc07ddd2ccf0d8a_facebook%20icon.svg",
    },
  ];
  return (
    <div className="w-full overflow-hidden flex flex-col justify-end  lg:h-screen pt-[10vh]">
      <div className="footer w-full h-fit flex mb-[5vw] lg:mb-[20vh]  items-center justify-center ">
        <div className="footer__links  flex  flex-col sm:flex-row">
          {Object.entries(footerLinks).map(([key, headline]) => (
            <div className="p-2   px-[5vw]  flex flex-col   " key={key}>
              <h2 className="font-black sm:text-[1.2vw] font-[font5] uppercase">
                {headline.title}
              </h2>
              {Object.entries(headline.links).map(([key, links]) => (
                <motion.div
                  className="  mt-[2vw] w-fit relative overflow-hidden sm:h-[1.5vw]"
                  key={key}
                  whileHover="hover"
                  initial="rest"
                  animate="animateHover"
                  whileInView="inView"
                  viewport="viewport"
                >
                  <Link to={links.path} onClick={scrollToTop}>
                    <motion.h3
                      className="font-extralight sm:text-[1.2vw] font-[font1]  lowercase    "
                      variants={{
                        rest: { y: "100%" },
                        animateHover: { y: "0%", opacity: 0.7 },
                        hover: { y: ["100%", 0], opacity: [0.8, 1] },
                        inView:{ y: ["100%", 0], opacity: [1,0.8] },
                        viewport: {  amount: 0.8,delay:6   }// Animate to visible and in position
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
        <div className="w-[20vw] h-full flex p-5 justify-end gap-5 flex-col sm:flex-row ">
          {socialMedia.map((social, index) => (
            <img
              key={index}
              src={social.imgUrl}
              alt={social.icon}
              className="social-image h-10 sm:h-[2.5vw]"
            />
          ))}
        </div>
      </div>
      <div className="footer__card h-[10vw] w-full flex justify-between items-center px-[10vw] ">
        <div className="logo">
          <img
            className="w-[118px]"
            src="https://cdn.prod.website-files.com/64899c647bc07ddd2ccf0cef/64899c647bc07ddd2ccf0e26_TeaFlow_logo_black.svg"
            alt=""
          />
        </div>
        <div className="copyright text-opacity-75 text-xs font-thin font-[font3] pl-10 ">
          &copy; 2023 Tea Flow
        </div>
        <div className="devlopedBy font-black text-[1.2vw] font-[font5] uppercase ">
          <h1> dikshant </h1>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
