import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "The Premium Green Tea has completely transformed my morning routine. The quality is exceptional and the flavor is incredibly smooth. I've been a customer for over a year now!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      product: "Premium Green Tea",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, USA",
      rating: 5,
      text: "As a tea connoisseur, I'm extremely picky about quality. Teaflow's Relaxation Blend is absolutely perfect for evening wind-down. The packaging is also eco-friendly which I love!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      product: "Relaxation Blend",
      verified: true
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Los Angeles, USA",
      rating: 5,
      text: "The Life Flow Tea has become an essential part of my wellness routine. I feel more energized and focused throughout the day. The customer service is also outstanding!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      product: "Life Flow Tea",
      verified: true
    },
    {
      id: 4,
      name: "David Kim",
      location: "Seattle, USA",
      rating: 5,
      text: "I've tried many tea brands, but Teaflow stands out for its consistency and quality. Every cup is perfect, and the subscription service makes it so convenient!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      product: "Earl Grey Supreme",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Chicago, USA",
      rating: 5,
      text: "The attention to detail in every aspect - from sourcing to packaging - is remarkable. You can truly taste the difference in quality. Highly recommended!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      product: "Jasmine Phoenix Pearls",
      verified: true
    }
  ]

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [reviews.length])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index) => {
    setCurrentReview(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made Teaflow part of their daily ritual
          </p>
        </motion.div>

        {/* Reviews Container */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Customer Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={reviews[currentReview].image}
                      alt={reviews[currentReview].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/20"
                    />
                    {reviews[currentReview].verified && (
                      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-lg md:text-xl text-white mb-6 leading-relaxed">
                    "{reviews[currentReview].text}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-white">
                      {reviews[currentReview].name}
                    </h4>
                    <p className="text-gray-300">
                      {reviews[currentReview].location}
                    </p>
                    <p className="text-green-400 font-medium">
                      Verified Purchase: {reviews[currentReview].product}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Tea Varieties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomerReviews
