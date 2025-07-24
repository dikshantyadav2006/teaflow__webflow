import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import ThreeImg from "../../fiber3d/ThreeImg";
import { scrollToTopInstant } from "../../../utils/scrollToTop";

const TeaCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { id, name, price, category, description, img } = product;

  const handleViewDetails = (e) => {
    e.stopPropagation();
    scrollToTopInstant();
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      className="h-full w-full flex flex-col items-center justify-between p-4 bg-white/10 backdrop-blur-md shadow-lg rounded-lg border border-white/20 cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewDetails}
    >
      {/* Product Image with 3D Effect */}
      <div className="h-[60vw] w-[70vw] sm:h-[35vw] sm:w-[40vw] lg:h-[20vw] lg:w-[25vw] flex-shrink-0 rounded-lg relative overflow-hidden">
        <ThreeImg img={img} />
        
        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 text-xs sm:text-sm rounded-full">
            {category}
          </span>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold hover:bg-white/30 transition-colors text-xs sm:text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleViewDetails}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="mt-3 sm:mt-4 text-center w-full px-2 sm:px-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors truncate mb-1 sm:mb-0">
            {name}
          </h3>
          <span className="text-base sm:text-lg font-bold text-gray-900">{price}</span>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{description}</p>

        {/* Add to Cart Button */}
        <motion.button
          className="w-full bg-black/80 backdrop-blur-sm text-white py-2 rounded-lg font-medium hover:bg-black transition-colors text-xs sm:text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TeaCard;
