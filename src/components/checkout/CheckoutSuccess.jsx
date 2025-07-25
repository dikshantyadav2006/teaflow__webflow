import React from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToTopInstant } from '../../utils/scrollToTop'

const CheckoutSuccess = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Get order details from navigation state
  const orderDetails = location.state || {
    orderTotal: '0.00',
    orderItems: 0,
    orderNumber: 'TEA-000000'
  }

  const handleContinueShopping = () => {
    scrollToTopInstant()
    navigate('/products')
  }

  const handleGoHome = () => {
    scrollToTopInstant()
    navigate('/')
  }

  return (
    <div className="w-full min-h-screen webColor py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-12">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Order Confirmed!
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for your purchase. Your order has been successfully placed.
              </p>
            </motion.div>

            {/* Order Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 rounded-lg p-6 mb-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
              <div className="space-y-2 text-left max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-medium">{orderDetails.orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Items:</span>
                  <span className="font-medium">{orderDetails.orderItems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-medium">${orderDetails.orderTotal}</span>
                </div>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
              <div className="text-gray-600 space-y-2">
                <p>• You'll receive an email confirmation shortly</p>
                <p>• Your order will be processed within 1-2 business days</p>
                <p>• Shipping typically takes 3-5 business days</p>
                <p>• You'll receive tracking information once shipped</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
            >
              <motion.button
                onClick={handleContinueShopping}
                className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue Shopping
              </motion.button>
              
              <motion.button
                onClick={handleGoHome}
                className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back to Home
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CheckoutSuccess
