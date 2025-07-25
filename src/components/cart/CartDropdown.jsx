import React from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { scrollToTopInstant } from '../../utils/scrollToTop'

const CartDropdown = ({ onClose }) => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Cart Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute right-0 sm:right-0 top-full mt-2 w-80 sm:w-96
                   bg-white/10 backdrop-blur-md rounded-lg shadow-xl border border-white/20 z-50
                    overflow-hidden
                    -left-[50vw] sm:translate-x-0 sm:left-auto"
      >
        <div className="p-3 sm:p-4 border-b border-white/20 bg-white/5">
          <div className="flex justify-between items-center">
            <h3 className="text-base sm:text-lg font-semibold">Shopping Cart</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-h-48 sm:max-h-64 overflow-y-auto">
          {items.length === 0 ? (
            <div className="p-6 sm:p-8 text-center text-gray-500">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                className="mx-auto mb-4 text-gray-300"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Your cart is empty</p>
              <Link
                to="/products"
                onClick={onClose}
                className="text-black hover:underline text-sm mt-2 inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-2 sm:space-x-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 text-xs sm:text-sm"
                    >
                      -
                    </button>
                    <span className="text-xs sm:text-sm font-medium w-6 sm:w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 text-xs sm:text-sm"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-1 flex-shrink-0"
                  >
                    <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 6H5H21M8 6V4C8 3.4 8.4 3 9 3H15C15.6 3 16 3.4 16 4V6M19 6V20C19 20.6 18.6 21 18 21H6C5.4 21 5 20.6 5 20V6H19ZM10 11V17M14 11V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold">Total: ${getCartTotal().toFixed(2)}</span>
              <button
                onClick={clearCart}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Clear Cart
              </button>
            </div>
            <div className="space-y-2">
              <Link
                to="/cart"
                onClick={() => {
                  onClose()
                  scrollToTopInstant()
                }}
                className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center block hover:bg-gray-300 transition-colors"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                onClick={() => {
                  onClose()
                  scrollToTopInstant()
                }}
                className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center block hover:bg-gray-300 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </>
  )
}

export default CartDropdown
