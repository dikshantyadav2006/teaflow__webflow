import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, GiftIcon, SparklesIcon, BellIcon } from '@heroicons/react/24/outline'

const NotificationSystem = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [currentNotification, setCurrentNotification] = useState(0)
  const [scrollTimeout, setScrollTimeout] = useState(null)

  const notifications = [
    {
      id: 1,
      icon: GiftIcon,
      title: "Special Offer!",
      message: "Get 20% off on your first order with code TEATIME20",
      type: "offer",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      icon: SparklesIcon,
      title: "New Arrivals!",
      message: "Discover our premium Dragon Well Green Tea collection",
      type: "product",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      icon: BellIcon,
      title: "Free Shipping!",
      message: "Free shipping on orders over $50. Limited time offer!",
      type: "shipping",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      icon: GiftIcon,
      title: "Tea Masterclass",
      message: "Join our free online tea brewing masterclass this weekend",
      type: "event",
      color: "from-orange-500 to-red-500"
    }
  ]

  useEffect(() => {
    let scrollTimer = null

    const handleScroll = () => {
      setIsScrolling(true)
      setShowNotification(false)

      // Clear existing timer
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }

      // Set new timer
      scrollTimer = setTimeout(() => {
        setIsScrolling(false)
        setShowNotification(true)
        
        // Cycle through notifications
        setCurrentNotification(prev => (prev + 1) % notifications.length)
      }, 1500) // Show notification 1.5 seconds after scrolling stops

      setScrollTimeout(scrollTimer)
    }

    window.addEventListener('scroll', handleScroll)

    // Initial notification after 3 seconds
    const initialTimer = setTimeout(() => {
      if (!isScrolling) {
        setShowNotification(true)
      }
    }, 3000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer) clearTimeout(scrollTimer)
      clearTimeout(initialTimer)
    }
  }, [isScrolling, notifications.length])

  const handleCloseNotification = () => {
    setShowNotification(false)
  }

  const notification = notifications[currentNotification]
  const IconComponent = notification?.icon

  return (
    <AnimatePresence>
      {showNotification && !isScrolling && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            duration: 0.6 
          }}
          className="fixed top-20 left-4 z-50 max-w-sm"
        >
          <div className={`bg-gradient-to-r ${notification.color} p-1 rounded-2xl shadow-2xl`}>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${notification.color}`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    {notification.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {notification.message}
                  </p>
                </div>

                <button
                  onClick={handleCloseNotification}
                  className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <XMarkIcon className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Action buttons */}
              <div className="mt-3 flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 bg-gradient-to-r ${notification.color} text-white text-xs font-semibold py-2 px-3 rounded-lg hover:shadow-lg transition-shadow`}
                >
                  {notification.type === 'offer' ? 'Claim Offer' : 
                   notification.type === 'product' ? 'Shop Now' :
                   notification.type === 'shipping' ? 'Shop Now' : 'Learn More'}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCloseNotification}
                  className="px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Later
                </motion.button>
              </div>

              {/* Progress indicator */}
              <div className="mt-3 flex space-x-1">
                {notifications.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      index === currentNotification 
                        ? `bg-gradient-to-r ${notification.color}` 
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating animation elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80"
          />
          
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              x: [0, 3, -3, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -bottom-1 -left-1 w-4 h-4 bg-pink-400 rounded-full opacity-60"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NotificationSystem
