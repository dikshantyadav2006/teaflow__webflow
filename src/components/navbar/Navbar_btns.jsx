
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const btns = [
  { name: "shop", path: "/" },
  { name: "about us", path: "/about" },
  { name: "journal", path: "/journal" },
  { name: "contacts", path: "/contacts" },
];
const Navbar_btns = () => {
  return (
    <div className=" gap-10 font-['font1'] items-center hidden lg:flex">
      {btns.map((btn, index) => (
        <motion.div
          key={index}
          className="relative"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <NavLink
            to={btn.path}
            className={({ isActive }) =>
              `lowercase relative ${isActive ? "text-black border-b-[1px] py-1 border-[black]" : "text-gray-600"}`
            }
          >
            {btn.name}
          </NavLink>
          <motion.div
            className="absolute bottom-0 left-1/2 h-[1px] bg-black"
            variants={{
              rest: { width: 0, x: "-50%" },
              hover: { width: "100%", x: "-50%" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar_btns;
