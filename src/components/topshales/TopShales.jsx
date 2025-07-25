import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { StarIcon, TrophyIcon, FireIcon } from '@heroicons/react/24/solid'
import productService from '../../services/productService'
import { useNavigate } from 'react-router-dom'

// 3D Trophy Component
const Trophy3D = () => {
  const trophyRef = React.useRef()
  
  useFrame((state) => {
    if (trophyRef.current) {
      trophyRef.current.rotation.y += 0.01
      trophyRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={trophyRef}>
        {/* Trophy Cup */}
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.8, 0.6, 1.2, 32]} />
          <meshStandardMaterial color="#ffd700" roughness={0.1} metalness={0.9} />
        </mesh>
        
        {/* Trophy Base */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[1, 1, 0.5, 32]} />
          <meshStandardMaterial color="#cd7f32" roughness={0.2} metalness={0.8} />
        </mesh>
        
        {/* Trophy Handles */}
        <mesh position={[1, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.3, 0.05, 8, 16]} />
          <meshStandardMaterial color="#ffd700" roughness={0.1} metalness={0.9} />
        </mesh>
        <mesh position={[-1, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.3, 0.05, 8, 16]} />
          <meshStandardMaterial color="#ffd700" roughness={0.1} metalness={0.9} />
        </mesh>
      </group>
    </Float>
  )
}

const TopShales = () => {
  const [topProducts, setTopProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const loadTopProducts = async () => {
      try {
        setLoading(true)
        const products = await productService.getAllProducts()
        
        // Sort by rating and get top products
        const sortedProducts = products
          .sort((a, b) => b.rating.average - a.rating.average)
          .slice(0, 6)
        
        setTopProducts(sortedProducts)
      } catch (err) {
        setError('Failed to load top products')
        console.error('Error loading products:', err)
      } finally {
        setLoading(false)
      }
    }

    loadTopProducts()
  }, [])

  const handleProductClick = (product) => {
    navigate(`/products/${product.id}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-amber-800">Loading top shales...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-60 h-60 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 3D Trophy */}
            <div className="relative h-96">
              <Canvas
                camera={{ position: [0, 0, 6], fov: 75 }}
                className="absolute inset-0"
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#fbbf24" />
                <Trophy3D />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
              </Canvas>
            </div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <TrophyIcon className="w-12 h-12 text-amber-600 mr-4" />
                <span className="text-amber-600 font-semibold text-lg">Premium Collection</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Shales</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Discover our most celebrated tea blends, handpicked by tea masters and loved by connoisseurs worldwide. 
                Each blend represents the pinnacle of quality and craftsmanship.
              </p>

              <div className="flex items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">4.9★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">50+</div>
                  <div className="text-gray-600">Awards Won</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/products')}
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore All Products
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hall of Fame
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most prestigious tea blends that have earned their place among the finest in the world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleProductClick(product)}
              >
                {/* Rank Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                    index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-500' :
                    index === 2 ? 'bg-gradient-to-r from-amber-600 to-amber-800' :
                    'bg-gradient-to-r from-amber-500 to-orange-600'
                  }`}>
                    {index + 1}
                  </div>
                </div>

                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <FireIcon className="w-4 h-4 mr-1" />
                      Hot
                    </div>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{product.rating.average}</span>
                      <span className="text-xs text-gray-500 ml-1">({product.rating.count})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description.short}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProductClick(product)
                      }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Elite Tea Experience
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Become part of our exclusive community and get first access to limited edition blends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/products')}
                className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Collection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/about')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TopShales
