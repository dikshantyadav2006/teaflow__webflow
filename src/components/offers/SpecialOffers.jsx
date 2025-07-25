import React from 'react'
import { motion } from 'framer-motion'
import { GiftIcon, SparklesIcon, ClockIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const SpecialOffers = () => {
  const navigate = useNavigate()

  const offers = [
    {
      id: 1,
      title: "First Order Special",
      discount: "20% OFF",
      code: "TEATIME20",
      description: "Get 20% off your first order with us. Perfect for trying our premium tea collection.",
      validUntil: "Limited time offer",
      color: "from-green-500 to-emerald-500",
      icon: GiftIcon
    },
    {
      id: 2,
      title: "Free Shipping Deal",
      discount: "FREE SHIPPING",
      code: "FREESHIP50",
      description: "Free shipping on all orders over $50. No minimum quantity required.",
      validUntil: "Valid until end of month",
      color: "from-blue-500 to-cyan-500",
      icon: SparklesIcon
    },
    {
      id: 3,
      title: "Weekend Special",
      discount: "15% OFF",
      code: "WEEKEND15",
      description: "Weekend special on all premium tea collections. Perfect for your tea time.",
      validUntil: "Valid weekends only",
      color: "from-purple-500 to-pink-500",
      icon: ClockIcon
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Special Offers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing deals on our premium tea collection. Limited time offers you don't want to miss!
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${offer.color} rounded-full flex items-center justify-center mb-6`}>
                <offer.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
              <div className={`text-3xl font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent mb-4`}>
                {offer.discount}
              </div>

              <p className="text-gray-600 mb-6">{offer.description}</p>

              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-500 mb-1">Promo Code:</p>
                <div className="flex items-center justify-between">
                  <code className="text-lg font-mono font-bold text-gray-900">{offer.code}</code>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigator.clipboard.writeText(offer.code)}
                    className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded transition-colors"
                  >
                    Copy
                  </motion.button>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-6">{offer.validUntil}</p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/products')}
                className={`w-full bg-gradient-to-r ${offer.color} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-shadow`}
              >
                Shop Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-white/20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Tea Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse our complete collection of premium teas and find your perfect blend.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/products')}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:shadow-lg transition-shadow"
          >
            Explore All Products
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default SpecialOffers
