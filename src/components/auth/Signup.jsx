import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { scrollToTopInstant } from '../../utils/scrollToTop'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [passwordError, setPasswordError] = useState('')
  const { signup, loading, error, clearError } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  
  // Get the intended destination or default to home
  const from = location.state?.from?.pathname || '/'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear errors when user starts typing
    if (error) clearError()
    if (passwordError) setPasswordError('')
  }

  const validatePasswords = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match')
      return false
    }
    if (formData.password.length < 6) {
      setPasswordError('Password must be at least 6 characters')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validatePasswords()) {
      return
    }
    
    const result = await signup(formData.name, formData.email, formData.password)
    if (result.success) {
      scrollToTopInstant()
      navigate(from, { replace: true })
    }
  }

  return (
    <div className="w-full min-h-screen webColor flex items-center justify-center py-16">
      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join our tea community</p>
          </div>

          {/* Error Messages */}
          <AnimatePresence>
            {(error || passwordError) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm"
              >
                {error || passwordError}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="Create a password"
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white/50 backdrop-blur-sm transition-all ${
                  formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword
                    ? 'border-red-300'
                    : 'border-gray-300'
                }`}
                placeholder="Confirm your password"
              />
              {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <Link to="/privacypolicy" className="text-black hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacypolicy" className="text-black hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading || (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword)}
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-4">
              Already have an account?
            </p>
            <Link
              to="/login"
              onClick={scrollToTopInstant}
              className="w-full bg-white/20 backdrop-blur-sm text-gray-900 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 block text-center"
            >
              Sign In
            </Link>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                scrollToTopInstant()
                navigate('/')
              }}
              className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Signup
