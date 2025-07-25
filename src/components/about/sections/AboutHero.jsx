import React from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Text3D, Center } from '@react-three/drei'

// 3D Tea Leaves Animation
const FloatingLeaf = ({ position, color, scale = 1 }) => {
  const leafRef = React.useRef()
  
  useFrame((state) => {
    if (leafRef.current) {
      leafRef.current.rotation.z += 0.01
      leafRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={leafRef} position={position} scale={scale}>
        <planeGeometry args={[0.5, 0.8]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh>
    </Float>
  )
}

const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          
          {/* Floating Tea Leaves */}
          <FloatingLeaf position={[-8, 3, -2]} color="#22c55e" scale={1.2} />
          <FloatingLeaf position={[8, -2, -1]} color="#16a34a" scale={0.8} />
          <FloatingLeaf position={[-6, -4, -3]} color="#15803d" scale={1.0} />
          <FloatingLeaf position={[6, 4, -2]} color="#166534" scale={0.9} />
          <FloatingLeaf position={[0, -6, -4]} color="#14532d" scale={1.1} />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold"
              >
                Est. 2020 • Premium Tea Crafters
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
              >
                Crafting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Tea Stories
                </span>
                Since 2020
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-700 leading-relaxed max-w-2xl"
            >
              We believe that every cup of tea tells a story. From the misty mountains where our leaves are grown 
              to the moment you take your first sip, we're dedicated to preserving the ancient art of tea making 
              while embracing modern sustainability practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Our Products
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-emerald-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-gray-600 text-sm">Tea Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">10K+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-gray-600 text-sm">Organic</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop"
                alt="Tea plantation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-emerald-600">4.9★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-emerald-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-emerald-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutHero
