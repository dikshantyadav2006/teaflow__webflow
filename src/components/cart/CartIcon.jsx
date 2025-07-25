import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import CartDropdown from './CartDropdown'

const CartIcon = () => {
  const { getCartItemsCount } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const itemCount = getCartItemsCount()

  return (
    <div className="relative ">
      <motion.button
        className="relative p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Cart Icon SVG */}
        <svg
          width="20"
          height="20"
          className="sm:w-6 sm:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Cart Count Badge */}
        <AnimatePresence>
          {itemCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium"
            >
              {itemCount > 99 ? '99+' : itemCount}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Cart Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <CartDropdown onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default CartIcon
