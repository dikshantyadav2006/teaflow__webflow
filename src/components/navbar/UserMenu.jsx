import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { scrollToTopInstant } from '../../utils/scrollToTop'

const UserMenu = () => {
  const { user, isAuthenticated, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    scrollToTopInstant()
    navigate('/')
  }

  const handleLogin = () => {
    scrollToTopInstant()
    navigate('/login')
  }

  const handleSignup = () => {
    scrollToTopInstant()
    navigate('/signup')
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-2">
        <motion.button
          onClick={handleLogin}
          className="text-gray-700 hover:text-black transition-colors px-3 py-2 text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
        <motion.button
          onClick={handleSignup}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>
      </div>
    )
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* User Avatar/Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Avatar */}
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">
          {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase()}
        </div>
        
        {/* User Name (hidden on mobile) */}
        <span className="hidden sm:block text-sm font-medium text-gray-700">
          {user?.name || user?.email?.split('@')[0]}
        </span>
        
        {/* Dropdown Arrow */}
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gray-500"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-48 bg-white/80 backdrop-blur-md rounded-lg shadow-xl border border-white/20 z-50 overflow-hidden"
          >
            {/* User Info */}
            <div className="px-4 py-3 border-b border-white/20 bg-white/5">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-600 truncate">{user?.email}</p>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <Link
                to="/cart"
                onClick={() => {
                  setIsOpen(false)
                  scrollToTopInstant()
                }}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-3">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H3m4 8v6a1 1 0 001 1h8a1 1 0 001-1v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                My Cart
              </Link>
              
              <Link
                to="/orders"
                onClick={() => {
                  setIsOpen(false)
                  scrollToTopInstant()
                }}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-3">
                  <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Order History
              </Link>
              
              <Link
                to="/profile"
                onClick={() => {
                  setIsOpen(false)
                  scrollToTopInstant()
                }}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-3">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Profile Settings
              </Link>
            </div>

            {/* Logout */}
            <div className="border-t border-white/20">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-3">
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UserMenu
