import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const TeaBenefitsShowcase = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(0)
  const navigate = useNavigate()

  const benefits = [
    {
      id: 1,
      title: "Antioxidant Power",
      icon: "🛡️",
      description: "Rich in catechins and polyphenols that fight free radicals and support cellular health",
      details: "Our premium teas contain up to 10x more antioxidants than most fruits and vegetables, helping to protect your body from oxidative stress and supporting long-term health.",
      color: "from-green-400 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      stats: "10x More Antioxidants",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Mental Clarity",
      icon: "🧠",
      description: "L-theanine promotes calm focus and enhanced cognitive function",
      details: "The unique combination of caffeine and L-theanine in tea provides sustained energy without jitters, improving concentration and mental performance throughout the day.",
      color: "from-blue-400 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      stats: "4-6 Hours Focus",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Heart Health",
      icon: "❤️",
      description: "Supports cardiovascular health and helps maintain healthy cholesterol levels",
      details: "Regular tea consumption has been linked to reduced risk of heart disease, improved blood circulation, and better overall cardiovascular function.",
      color: "from-red-400 to-pink-600",
      bgColor: "from-red-50 to-pink-50",
      stats: "30% Risk Reduction",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Metabolism Boost",
      icon: "⚡",
      description: "Natural compounds help boost metabolism and support healthy weight management",
      details: "Green tea catechins, particularly EGCG, have been shown to increase metabolic rate and fat oxidation, supporting natural weight management goals.",
      color: "from-orange-400 to-amber-600",
      bgColor: "from-orange-50 to-amber-50",
      stats: "4% Metabolism Increase",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Stress Relief",
      icon: "🧘",
      description: "Calming properties help reduce stress and promote relaxation",
      details: "The ritual of tea drinking combined with natural compounds like L-theanine helps lower cortisol levels and promotes a sense of calm and well-being.",
      color: "from-purple-400 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      stats: "25% Stress Reduction",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Immune Support",
      icon: "🌟",
      description: "Strengthens immune system with natural vitamins and minerals",
      details: "Tea's rich content of vitamins C and E, along with various minerals and bioactive compounds, helps strengthen your body's natural defense mechanisms.",
      color: "from-teal-400 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
      stats: "40% Immune Boost",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Science-Backed Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful health benefits that make tea more than just a beverage
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.button
                key={benefit.id}
                onClick={() => setSelectedBenefit(index)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                  selectedBenefit === index
                    ? `bg-gradient-to-br ${benefit.bgColor} border-2 border-current scale-105 shadow-xl`
                    : 'bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                }`}
                whileHover={{ scale: selectedBenefit === index ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`text-4xl mb-3 ${
                  selectedBenefit === index ? 'scale-110' : ''
                } transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className={`font-semibold text-sm md:text-base ${
                  selectedBenefit === index 
                    ? `bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`
                    : 'text-gray-900'
                }`}>
                  {benefit.title}
                </h3>
              </motion.button>
            ))}
          </div>

          {/* Selected Benefit Details */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBenefit}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={benefits[selectedBenefit].image}
                    alt={benefits[selectedBenefit].title}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefits[selectedBenefit].color} opacity-20`}></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${benefits[selectedBenefit].color} bg-clip-text text-transparent`}>
                      {benefits[selectedBenefit].stats}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`text-5xl`}>
                      {benefits[selectedBenefit].icon}
                    </div>
                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${benefits[selectedBenefit].color} bg-clip-text text-transparent`}>
                      {benefits[selectedBenefit].title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefits[selectedBenefit].description}
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    {benefits[selectedBenefit].details}
                  </p>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${benefits[selectedBenefit].color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Learn More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience These Benefits?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Start your wellness journey with our premium tea collection
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/products')}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeaBenefitsShowcase
