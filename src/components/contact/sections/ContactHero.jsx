import React from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import ScrollVelocity from '../../animations/marqueAnimation/ScrollVelocity'

// 3D Communication Icons
const CommIcon3D = ({ type, position, color }) => {
  const meshRef = React.useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  const getGeometry = () => {
    switch(type) {
      case 'email':
        return <boxGeometry args={[1, 0.6, 0.1]} />
      case 'phone':
        return <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
      case 'chat':
        return <sphereGeometry args={[0.5, 16, 16]} />
      default:
        return <boxGeometry args={[0.5, 0.5, 0.5]} />
    }
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>
    </Float>
  )
}

const ContactHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          
          {/* Floating Communication Icons */}
          <CommIcon3D type="email" position={[-6, 2, -2]} color="#3b82f6" />
          <CommIcon3D type="phone" position={[6, -1, -1]} color="#8b5cf6" />
          <CommIcon3D type="chat" position={[-4, -3, -3]} color="#06b6d4" />
          <CommIcon3D type="email" position={[4, 3, -2]} color="#10b981" />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Animated Text */}
      <div className="relative z-10 w-full h-fit sm:min-h-[50vh] font-[font2] font-black uppercase leading-none flex overflow-hidden mt-10">
        <div className="sm:my-auto my-5">
          <ScrollVelocity
            texts={['contact us']} 
            velocity={70} 
            className="font-[font2] h-fit text-[10rem] sm:text-[13rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold"
            >
              We're Here to Help
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              Let's Start a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Conversation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-700 leading-relaxed"
            >
              Have questions about our teas? Need brewing advice? Want to share your tea story? 
              We'd love to hear from you! Our tea experts are here to help you discover your perfect cup.
            </motion.p>

            {/* Quick Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-200"
              >
                <div className="text-2xl mb-2">📧</div>
                <div className="font-semibold text-gray-900">Email Us</div>
                <div className="text-sm text-gray-600">Quick Response</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-200"
              >
                <div className="text-2xl mb-2">📞</div>
                <div className="font-semibold text-gray-900">Call Us</div>
                <div className="text-sm text-gray-600">Instant Help</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-indigo-200"
              >
                <div className="text-2xl mb-2">💬</div>
                <div className="font-semibold text-gray-900">Live Chat</div>
                <div className="text-sm text-gray-600">Real-time Support</div>
              </motion.div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center space-x-4 pt-6 border-t border-gray-200"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Average response time: 2 hours</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                We're Always Available
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="text-2xl font-bold text-blue-600">98%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Response Time</span>
                  <span className="text-2xl font-bold text-purple-600">&lt; 2hrs</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Support Languages</span>
                  <span className="text-2xl font-bold text-indigo-600">5+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Happy Customers</span>
                  <span className="text-2xl font-bold text-green-600">10K+</span>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm opacity-90">
                  Emergency support available 24/7 for urgent matters
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
