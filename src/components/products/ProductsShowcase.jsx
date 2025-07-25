import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TeaCup3D from './TeaCup3D'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { scrollToTopInstant } from '../../utils/scrollToTop'

const ProductsShowcase = () => {
  const { addToCart } = useCart()
  const [currentProduct, setCurrentProduct] = useState(null)
  const [showAddedFeedback, setShowAddedFeedback] = useState(false)

  // Featured products for the showcase
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Green Tea",
      category: "Green Tea",
      price: "$24.99",
      description: "Organic green tea with delicate floral notes and antioxidants",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
      benefits: ["Rich in antioxidants", "Boosts metabolism", "Calming effect"]
    },
    {
      id: 2,
      name: "Earl Grey Supreme",
      category: "Black Tea",
      price: "$28.99",
      description: "Classic Earl Grey with bergamot oil and cornflower petals",
      image: "https://images.unsplash.com/photo-1597318281675-d6b2c2d0e8d0?w=400&h=400&fit=crop",
      benefits: ["Bold flavor", "Energy boost", "Traditional blend"]
    },
    {
      id: 3,
      name: "Chamomile Dreams",
      category: "Herbal Tea",
      price: "$22.99",
      description: "Soothing chamomile blend perfect for evening relaxation",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop",
      benefits: ["Promotes sleep", "Caffeine-free", "Stress relief"]
    },
    {
      id: 4,
      name: "Dragon Well Oolong",
      category: "Oolong Tea",
      price: "$32.99",
      description: "Semi-fermented oolong with complex flavor profile",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      benefits: ["Complex flavor", "Moderate caffeine", "Traditional processing"]
    },
    {
      id: 5,
      name: "Silver Needle White",
      category: "White Tea",
      price: "$45.99",
      description: "Delicate white tea with subtle sweetness and light body",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=400&fit=crop",
      benefits: ["Delicate flavor", "High antioxidants", "Premium quality"]
    },
    {
      id: 6,
      name: "Immunity Boost",
      category: "Wellness Tea",
      price: "$26.99",
      description: "Herbal blend with ginger, turmeric, and echinacea",
      image: "https://images.unsplash.com/photo-1597318281675-d6b2c2d0e8d0?w=400&h=400&fit=crop",
      benefits: ["Immune support", "Anti-inflammatory", "Natural ingredients"]
    }
  ]

  // Initialize with first product
  useEffect(() => {
    setCurrentProduct(featuredProducts[0])
  }, [])

  const handleProductChange = (product) => {
    setCurrentProduct(product)
  }

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    })
    
    // Show feedback
    setShowAddedFeedback(true)
    setTimeout(() => setShowAddedFeedback(false), 2000)
  }

  if (!currentProduct) return null

  return (
    <div className="w-full min-h-screen webColor py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Experience Our Teas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch your perfect cup come to life. Explore our premium tea collection 
            with interactive 3D visualization.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Tea Cup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <TeaCup3D
              currentProduct={currentProduct}
              onProductChange={handleProductChange}
              onAddToCart={handleAddToCart}
              products={featuredProducts}
            />
            
            {/* Added to Cart Feedback */}
            <AnimatePresence>
              {showAddedFeedback && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg z-10"
                >
                  ✓ Added to Cart!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Product Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentProduct.category}
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    {currentProduct.price}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentProduct.name}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {currentProduct.description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {currentProduct.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={() => handleAddToCart(currentProduct)}
                    className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H3m4 8v6a1 1 0 001 1h8a1 1 0 001-1v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Add to Cart</span>
                  </motion.button>
                  
                  <Link
                    to={`/products/${currentProduct.id}`}
                    onClick={scrollToTopInstant}
                    className="flex-1 bg-white/20 backdrop-blur-sm text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 text-center"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Organic</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Fresh</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-gray-900">5★</div>
                <div className="text-sm text-gray-600">Rated</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/products"
            onClick={scrollToTopInstant}
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <span>Explore All Products</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductsShowcase
