import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text3D, Sphere } from '@react-three/drei'
import * as THREE from 'three'

// 3D Tea Cup Component
const TeaCup3D = () => {
  const cupRef = useRef()
  
  useFrame((state) => {
    if (cupRef.current) {
      cupRef.current.rotation.y += 0.01
      cupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={cupRef}>
        {/* Cup Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.6, 1.2, 32]} />
          <meshStandardMaterial color="#f3f4f6" roughness={0.1} metalness={0.8} />
        </mesh>
        
        {/* Tea Liquid */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.75, 0.55, 0.6, 32]} />
          <meshStandardMaterial color="#22c55e" transparent opacity={0.8} />
        </mesh>
        
        {/* Handle */}
        <mesh position={[0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.3, 0.05, 8, 16]} />
          <meshStandardMaterial color="#f3f4f6" roughness={0.1} metalness={0.8} />
        </mesh>
        
        {/* Steam Particles */}
        {[...Array(5)].map((_, i) => (
          <Sphere key={i} position={[Math.random() * 0.4 - 0.2, 1 + i * 0.3, Math.random() * 0.4 - 0.2]} args={[0.02]}>
            <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
          </Sphere>
        ))}
      </group>
    </Float>
  )
}

// Floating Email Icon
const EmailIcon3D = () => {
  const emailRef = useRef()
  
  useFrame((state) => {
    if (emailRef.current) {
      emailRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
      emailRef.current.rotation.y += 0.005
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={emailRef}>
        {/* Email Body */}
        <mesh>
          <boxGeometry args={[1.5, 1, 0.1]} />
          <meshStandardMaterial color="#3b82f6" roughness={0.2} metalness={0.6} />
        </mesh>
        
        {/* Email Flap */}
        <mesh position={[0, 0.3, 0.05]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[1.5, 0.6, 0.05]} />
          <meshStandardMaterial color="#2563eb" roughness={0.2} metalness={0.6} />
        </mesh>
      </group>
    </Float>
  )
}

// 3D Scene Component
const Newsletter3DScene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#22c55e" />
      
      <group position={[-2, 0, 0]}>
        <TeaCup3D />
      </group>
      
      <group position={[2, 0, 0]}>
        <EmailIcon3D />
      </group>
      
      {/* Background Particles */}
      {[...Array(20)].map((_, i) => (
        <Sphere
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 20
          ]}
          args={[0.05]}
        >
          <meshStandardMaterial 
            color={Math.random() > 0.5 ? "#22c55e" : "#3b82f6"} 
            transparent 
            opacity={0.3} 
          />
        </Sphere>
      ))}
    </>
  )
}

const Newsletter3D = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 2000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Canvas */}
          <div className="relative h-96 lg:h-[500px]">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 75 }}
              className="absolute inset-0"
            >
              <Newsletter3DScene />
            </Canvas>
          </div>

          {/* Newsletter Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Steeped in Updates
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our tea community and be the first to know about new blends, 
                exclusive offers, and brewing tips from our tea masters.
              </p>
            </motion.div>

            {!isSubscribed ? (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Subscribing...
                    </div>
                  ) : (
                    'Subscribe to Newsletter'
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Welcome to the Tea Family!
                </h3>
                <p className="text-gray-300">
                  Check your email for a special welcome offer
                </p>
              </motion.div>
            )}

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Exclusive tea releases</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Brewing masterclasses</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Member-only discounts</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Tea wellness tips</span>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4 pt-6 border-t border-white/10"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1494790108755 + i}?w=40&h=40&fit=crop&crop=face`}
                    alt="Subscriber"
                    className="w-10 h-10 rounded-full border-2 border-white/20"
                  />
                ))}
              </div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">12,000+</span> tea lovers already subscribed
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter3D
