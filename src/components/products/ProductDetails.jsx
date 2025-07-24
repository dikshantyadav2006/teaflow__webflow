import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'

// Product data (same as in ProductGrid)
const products = [
  {
    id: 1,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
    name: "Premium Green Tea",
    price: "$24.99",
    category: "Green Tea",
    description: "Organic premium green tea leaves",
    longDescription: "Our Premium Green Tea is carefully sourced from the finest tea gardens in the mountains of China. Each leaf is hand-picked at the perfect moment to ensure maximum flavor and nutritional benefits. This organic green tea offers a delicate, refreshing taste with subtle grassy notes and a clean finish.",
    ingredients: ["Organic Green Tea Leaves", "Natural Antioxidants"],
    brewingInstructions: "Steep 1 teaspoon in 175°F water for 2-3 minutes",
    origin: "Fujian Province, China",
    caffeine: "Medium (25-50mg per cup)"
  },
  {
    id: 2,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
    name: "Relaxation Blend",
    price: "$29.99",
    category: "Herbal Tea",
    description: "Calming herbal tea blend",
    longDescription: "Unwind with our specially crafted Relaxation Blend, a soothing combination of chamomile, lavender, and lemon balm. This caffeine-free herbal tea is perfect for evening relaxation and promoting restful sleep.",
    ingredients: ["Chamomile Flowers", "Lavender Buds", "Lemon Balm", "Passionflower"],
    brewingInstructions: "Steep 1-2 teaspoons in boiling water for 5-7 minutes",
    origin: "European Herb Gardens",
    caffeine: "Caffeine-Free"
  },
  {
    id: 3,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
    name: "Life Flow Tea",
    price: "$34.99",
    category: "Wellness Tea",
    description: "Energizing wellness tea blend",
    longDescription: "Boost your vitality with Life Flow Tea, an invigorating blend of green tea, ginseng, and adaptogenic herbs. This wellness tea supports energy levels and mental clarity throughout the day.",
    ingredients: ["Green Tea", "Ginseng Root", "Rhodiola", "Ginkgo Biloba", "Natural Flavors"],
    brewingInstructions: "Steep 1 teaspoon in 185°F water for 3-4 minutes",
    origin: "Blend of Asian and European Herbs",
    caffeine: "High (50-75mg per cup)"
  },
  {
    id: 4,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
    name: "Earl Grey Classic",
    price: "$22.99",
    category: "Black Tea",
    description: "Traditional Earl Grey with bergamot",
    longDescription: "Experience the timeless elegance of our Earl Grey Classic, featuring premium Ceylon black tea infused with natural bergamot oil. This sophisticated blend offers a perfect balance of robust tea flavor and citrusy bergamot aroma.",
    ingredients: ["Ceylon Black Tea", "Natural Bergamot Oil", "Cornflower Petals"],
    brewingInstructions: "Steep 1 teaspoon in boiling water for 3-5 minutes",
    origin: "Sri Lanka",
    caffeine: "High (40-70mg per cup)"
  },
  {
    id: 5,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
    name: "Chamomile Dreams",
    price: "$26.99",
    category: "Herbal Tea",
    description: "Pure chamomile flowers for relaxation",
    longDescription: "Drift into peaceful slumber with Chamomile Dreams, made from 100% pure chamomile flowers. This gentle, honey-like tea is naturally caffeine-free and perfect for bedtime rituals.",
    ingredients: ["Pure Chamomile Flowers"],
    brewingInstructions: "Steep 2 teaspoons in boiling water for 5-10 minutes",
    origin: "Egyptian Nile Delta",
    caffeine: "Caffeine-Free"
  },
  {
    id: 6,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
    name: "Morning Boost",
    price: "$31.99",
    category: "Energy Tea",
    description: "Energizing morning tea blend",
    longDescription: "Start your day right with Morning Boost, a powerful blend of black tea, yerba mate, and natural energizing herbs. This invigorating tea provides sustained energy without the jitters.",
    ingredients: ["Assam Black Tea", "Yerba Mate", "Guarana", "Ginger Root", "Natural Citrus Flavors"],
    brewingInstructions: "Steep 1 teaspoon in boiling water for 4-5 minutes",
    origin: "Multi-Origin Blend",
    caffeine: "Very High (75-100mg per cup)"
  }
]

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    setQuantity(1)
  }

  return (
    <div className="w-full webColor min-h-screen py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/products')}
          className="flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
          whileHover={{ x: -5 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
            <path
              d="M19 12H5M12 19L5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Products
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-black text-white px-3 py-1 text-sm rounded-full">
                {product.category}
              </span>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{product.price}</p>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-700 font-medium text-sm sm:text-base">Quantity:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-base sm:text-lg font-medium w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add to Cart - ${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
