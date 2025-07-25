import React from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { scrollToTopInstant } from '../../utils/scrollToTop'

const CartMain = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getCartTotal, getCartItemsCount } = useCart()
  const navigate = useNavigate()

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleCheckout = () => {
    scrollToTopInstant()
    navigate('/checkout')
  }

  const handleContinueShopping = () => {
    scrollToTopInstant()
    navigate('/products')
  }

  if (items.length === 0) {
    return (
      <div className="w-full min-h-screen webColor py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-12"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8 text-lg">Looks like you haven't added any items to your cart yet.</p>
              
              <motion.button
                onClick={handleContinueShopping}
                className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen webColor py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{getCartItemsCount()} {getCartItemsCount() === 1 ? 'item' : 'items'} in your cart</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6"
            >
              <div className="space-y-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    {/* Product Image */}
                    <div className="w-full sm:w-24 h-48 sm:h-24 flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 w-full">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <p className="text-lg font-bold text-gray-900">{item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-start">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-medium w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-2"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Clear Cart Button */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 transition-colors text-sm font-medium"
                >
                  Clear All Items
                </button>
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6 sticky top-8"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <motion.button
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Checkout
                </motion.button>
                
                <motion.button
                  onClick={handleContinueShopping}
                  className="w-full bg-white/20 backdrop-blur-sm text-gray-900 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue Shopping
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartMain
