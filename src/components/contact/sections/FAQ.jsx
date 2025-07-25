import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      category: 'Orders & Shipping',
      icon: '📦',
      questions: [
        {
          question: 'How long does shipping take?',
          answer: 'We offer free standard shipping (3-5 business days) on orders over $50. Express shipping (1-2 business days) is available for $9.99. International shipping typically takes 7-14 business days.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes! Once your order ships, you\'ll receive a tracking number via email. You can also track your order status in your account dashboard or by contacting our customer service team.'
        },
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely happy with your tea, you can return unopened packages for a full refund. Opened packages can be returned for store credit.'
        }
      ]
    },
    {
      category: 'Tea & Products',
      icon: '🫖',
      questions: [
        {
          question: 'How should I store my tea?',
          answer: 'Store tea in a cool, dry place away from light, air, and strong odors. Use airtight containers and avoid storing in the refrigerator. Properly stored tea can maintain quality for 2-3 years.'
        },
        {
          question: 'Are your teas organic?',
          answer: 'Yes! All our teas are certified organic and sourced from sustainable farms. We work directly with tea gardens that follow organic farming practices and fair trade principles.'
        },
        {
          question: 'How much caffeine is in your teas?',
          answer: 'Caffeine content varies by tea type: Black tea (40-70mg), Green tea (25-50mg), White tea (15-30mg), Oolong tea (30-50mg), and Herbal teas are naturally caffeine-free. All per 8oz cup.'
        }
      ]
    },
    {
      category: 'Brewing & Preparation',
      icon: '☕',
      questions: [
        {
          question: 'What\'s the best water temperature for brewing?',
          answer: 'Water temperature varies by tea type: Black tea (200-212°F), Green tea (175-185°F), White tea (175-185°F), Oolong tea (185-205°F), and Herbal teas (200-212°F). Use a thermometer for best results.'
        },
        {
          question: 'How long should I steep my tea?',
          answer: 'Steeping times depend on tea type and personal preference: Black tea (3-5 minutes), Green tea (2-3 minutes), White tea (4-6 minutes), Oolong tea (3-5 minutes), and Herbal teas (5-7 minutes).'
        },
        {
          question: 'Can I reuse tea leaves?',
          answer: 'Yes! High-quality loose leaf teas can be steeped multiple times. Green and white teas can be steeped 2-3 times, while oolong and pu-erh teas can be steeped 4-6 times with slightly longer steeping times.'
        }
      ]
    },
    {
      category: 'Account & Support',
      icon: '👤',
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Click "Sign Up" in the top right corner of our website. You can also create an account during checkout. Having an account allows you to track orders, save favorites, and earn loyalty points.'
        },
        {
          question: 'Do you offer wholesale pricing?',
          answer: 'Yes! We offer wholesale pricing for cafes, restaurants, and retailers. Contact our wholesale team at wholesale@teaflow.com for pricing and minimum order requirements.'
        },
        {
          question: 'How can I contact customer service?',
          answer: 'You can reach us via email (hello@teaflow.com), phone (+1 555-123-4567), live chat on our website, or by filling out the contact form above. Our team responds within 2 hours during business hours.'
        }
      ]
    }
  ]

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqId = `${categoryIndex}-${questionIndex}`
    setOpenFAQ(openFAQ === faqId ? null : faqId)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Find quick answers to common questions about our teas, orders, and brewing tips. 
            Can't find what you're looking for? Contact our tea experts!
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
              </div>

              {/* Questions */}
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, questionIndex) => {
                  const faqId = `${categoryIndex}-${questionIndex}`
                  const isOpen = openFAQ === faqId

                  return (
                    <div key={questionIndex}>
                      <motion.button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                        whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.8)' }}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h4>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                          </motion.div>
                        </div>
                      </motion.button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Our tea experts are here to help! Get personalized answers and brewing advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Live Chat
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
