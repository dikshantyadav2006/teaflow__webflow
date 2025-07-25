import React from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'

// 3D Value Icons
const Value3D = ({ icon, position, color }) => {
  const meshRef = React.useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {icon === 'quality' && <boxGeometry args={[1, 1, 1]} />}
        {icon === 'sustainability' && <sphereGeometry args={[0.6, 32, 32]} />}
        {icon === 'community' && <octahedronGeometry args={[0.8]} />}
        {icon === 'innovation' && <tetrahedronGeometry args={[0.8]} />}
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>
    </Float>
  )
}

const ValuesSection = () => {
  const values = [
    {
      icon: '🌟',
      title: 'Quality Excellence',
      description: 'We source only the finest tea leaves and maintain rigorous quality standards throughout our process.',
      color: '#fbbf24',
      icon3d: 'quality'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Environmental responsibility guides every decision, from farming practices to packaging materials.',
      color: '#22c55e',
      icon3d: 'sustainability'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'We build lasting relationships with tea farmers and customers, creating a global tea community.',
      color: '#3b82f6',
      icon3d: 'community'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Blending traditional tea wisdom with modern techniques to create exceptional experiences.',
      color: '#8b5cf6',
      icon3d: 'innovation'
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-400 rounded-full blur-3xl"></div>
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
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These principles guide everything we do, from sourcing the finest teas 
            to building lasting relationships with our community.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              {/* 3D Icon Container */}
              <div className="relative h-32 mb-6">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[10, 10, 5]} intensity={0.8} />
                  <Value3D 
                    icon={value.icon3d} 
                    position={[0, 0, 0]} 
                    color={value.color} 
                  />
                  <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                </Canvas>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Impact in Numbers
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Tea Farmers Supported</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-gray-600">Sustainable Packaging</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600">Cups Served Monthly</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-emerald-600 mb-2">25</div>
              <div className="text-gray-600">Countries Reached</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValuesSection
