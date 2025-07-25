import React from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { scrollToTopInstant } from '../../utils/scrollToTop'

const CartSuggestions = () => {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  // Suggested products (you might want to fetch these from an API)
  const suggestedProducts = [
    {
      id: 101,
      img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
      name: "Premium Green Tea",
      price: "$24.99",
      category: "Green Tea",
      description: "Organic premium green tea leaves"
    },
    {
      id: 102,
      img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
      name: "Relaxation Blend",
      price: "$29.99",
      category: "Herbal Tea",
      description: "Calming herbal tea blend"
    },
    {
      id: 103,
      img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
      name: "Life Flow Tea",
      price: "$34.99",
      category: "Wellness Tea",
      description: "Energizing wellness tea blend"
    },
    {
      id: 104,
      img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f4_gaba-oolong1-1200-min.jpg",
      name: "Premium Oolong",
      price: "$39.99",
      category: "Oolong Tea",
      description: "Traditional oolong with complex flavors"
    }
  ]

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  const handleViewProduct = (productId) => {
    scrollToTopInstant()
    navigate(`/products/${productId}`)
  }

  return (
    <div className="w-full py-16 bg-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete your tea collection with these carefully selected recommendations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 text-xs rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <motion.button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Cart
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleViewProduct(product.id)}
                    className="w-full bg-white/20 backdrop-blur-sm text-gray-900 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => {
              scrollToTopInstant()
              navigate('/products')
            }}
            className="bg-white/10 backdrop-blur-md text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default CartSuggestions
