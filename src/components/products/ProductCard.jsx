import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { scrollToTopInstant } from '../../utils/scrollToTop'

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { name, price, category, description, img } = product

  const handleViewDetails = () => {
    scrollToTopInstant()
    navigate(`/products/${product.id}`)
  }

  const handleAddToCart = (e) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/20 overflow-hidden cursor-pointer group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewDetails}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={img}
          alt={name}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black text-white px-2 py-1 text-xs rounded-full">
            {category}
          </span>
        </div>
        <motion.div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-2 rounded-full font-semibold hover:bg-white/30 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleViewDetails}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
            {name}
          </h3>
          <span className="text-lg font-bold text-gray-900">{price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <motion.button
          className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProductCard
