import React from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'

// 3D Earth/Globe Component
const EarthGlobe = () => {
  const earthRef = React.useRef()
  
  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#22c55e" 
          roughness={0.4} 
          metalness={0.1}
          emissive="#16a34a"
          emissiveIntensity={0.1}
        />
        {/* Atmosphere */}
        <mesh scale={1.1}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial 
            color="#3b82f6" 
            transparent 
            opacity={0.2}
            roughness={0.8}
          />
        </mesh>
      </mesh>
    </Float>
  )
}

const Sustainability = () => {
  const initiatives = [
    {
      icon: '🌱',
      title: 'Organic Farming',
      description: 'Supporting 100% organic tea gardens that preserve soil health and biodiversity.',
      impact: '500+ farmers transitioned to organic practices',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: '♻️',
      title: 'Zero Waste Packaging',
      description: 'Biodegradable and compostable packaging materials for all our products.',
      impact: '95% reduction in plastic waste since 2022',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      icon: '🌍',
      title: 'Carbon Neutral Shipping',
      description: 'Offsetting 100% of shipping emissions through verified carbon credits.',
      impact: '10,000 tons of CO2 offset annually',
      color: 'from-purple-400 to-indigo-600'
    },
    {
      icon: '💧',
      title: 'Water Conservation',
      description: 'Implementing water-efficient processing methods in all partner facilities.',
      impact: '40% reduction in water usage per kg of tea',
      color: 'from-teal-400 to-blue-600'
    }
  ]

  const certifications = [
    {
      name: 'USDA Organic',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=100&h=100&fit=crop',
      description: 'Certified organic by USDA standards'
    },
    {
      name: 'Fair Trade',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=100&h=100&fit=crop',
      description: 'Fair trade certified for ethical sourcing'
    },
    {
      name: 'Rainforest Alliance',
      image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=100&h=100&fit=crop',
      description: 'Supporting sustainable agriculture'
    },
    {
      name: 'Carbon Neutral',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100&h=100&fit=crop',
      description: 'Verified carbon neutral operations'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sustainability Commitment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe in protecting the planet that gives us these incredible teas. 
            Our commitment to sustainability goes beyond just words—it's woven into every aspect of our business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={0.8} />
              <pointLight position={[-10, -10, -5]} intensity={0.3} color="#22c55e" />
              <EarthGlobe />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Sustainable</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="text-2xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-600">Waste</div>
            </motion.div>
          </motion.div>

          {/* Initiatives */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${initiative.color} flex items-center justify-center text-white text-xl`}>
                    {initiative.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {initiative.description}
                    </p>
                    <div className="text-sm font-semibold text-green-600">
                      {initiative.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Certifications
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-200 group-hover:border-green-400 transition-colors">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Sustainability Mission
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Every cup you enjoy contributes to a more sustainable future for tea farming communities and our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Shop Sustainable Teas
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sustainability
