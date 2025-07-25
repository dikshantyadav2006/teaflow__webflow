import React from 'react'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      primary: 'hello@teaflow.com',
      secondary: 'support@teaflow.com',
      description: 'Get detailed responses to your questions',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: PhoneIcon,
      title: 'Phone Support',
      primary: '+1 (555) 123-4567',
      secondary: '+1 (555) 123-4568',
      description: 'Speak directly with our tea experts',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      primary: 'Available 9 AM - 6 PM EST',
      secondary: 'Instant responses',
      description: 'Real-time support for urgent questions',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Our Store',
      primary: '123 Tea Garden Lane',
      secondary: 'Portland, OR 97201',
      description: 'Experience our teas in person',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ]

  const socialChannels = [
    {
      name: 'Instagram',
      handle: '@teaflow_official',
      followers: '25K',
      icon: '📸',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Twitter',
      handle: '@teaflow',
      followers: '15K',
      icon: '🐦',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Facebook',
      handle: 'TeaFlow Official',
      followers: '30K',
      icon: '👥',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'YouTube',
      handle: 'TeaFlow Channel',
      followers: '12K',
      icon: '📺',
      color: 'from-red-500 to-red-600'
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST', available: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST', available: true },
    { day: 'Sunday', hours: 'Closed', available: false },
    { day: 'Holidays', hours: 'Limited Hours', available: false }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the method that works best for you. We're here to help with any questions about our teas, 
            brewing techniques, or anything else tea-related.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${method.bgColor} ${method.borderColor} border-2 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {method.title}
              </h3>
              
              <div className="space-y-1 mb-3">
                <div className="font-semibold text-gray-800">
                  {method.primary}
                </div>
                <div className="text-gray-600 text-sm">
                  {method.secondary}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Office Hours
              </h3>
            </div>
            
            <div className="space-y-4">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="font-semibold text-gray-800">
                    {schedule.day}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${schedule.available ? 'text-gray-600' : 'text-gray-400'}`}>
                      {schedule.hours}
                    </span>
                    <div className={`w-3 h-3 rounded-full ${schedule.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Currently Available</span>
              </div>
              <p className="text-sm text-gray-600">
                Emergency support available 24/7 for urgent order issues
              </p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <GlobeAltIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Follow Us
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Stay connected with our tea community for brewing tips, new product announcements, and tea culture insights.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {socialChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{channel.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {channel.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {channel.followers} followers
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {channel.handle}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Join our community:</strong> Get exclusive brewing guides, early access to new teas, 
                and connect with fellow tea enthusiasts worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
