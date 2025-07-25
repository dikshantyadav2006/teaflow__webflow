import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Text } from '@react-three/drei'

// 3D Tea Processing Steps
const TeaStep3D = ({ step, isActive, position }) => {
  const meshRef = React.useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += isActive ? 0.02 : 0.005
      meshRef.current.scale.setScalar(isActive ? 1.2 : 1)
    }
  })

  const getGeometry = () => {
    switch(step) {
      case 'plucking':
        return <sphereGeometry args={[0.5, 16, 16]} />
      case 'withering':
        return <cylinderGeometry args={[0.4, 0.6, 0.8, 8]} />
      case 'rolling':
        return <torusGeometry args={[0.5, 0.2, 8, 16]} />
      case 'oxidation':
        return <octahedronGeometry args={[0.6]} />
      case 'firing':
        return <coneGeometry args={[0.5, 1, 8]} />
      case 'packaging':
        return <boxGeometry args={[0.8, 0.8, 0.8]} />
      default:
        return <sphereGeometry args={[0.5, 16, 16]} />
    }
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        <meshStandardMaterial 
          color={isActive ? '#22c55e' : '#94a3b8'} 
          roughness={0.3} 
          metalness={0.7}
          emissive={isActive ? '#16a34a' : '#000000'}
          emissiveIntensity={isActive ? 0.2 : 0}
        />
      </mesh>
    </Float>
  )
}

const TeaJourney3D = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 'plucking',
      title: 'Tea Plucking',
      description: 'Hand-picking the finest tea leaves at the perfect moment of ripeness.',
      details: 'Our expert tea pickers select only the top two leaves and a bud, ensuring optimal flavor and quality.',
      position: [-4, 2, 0]
    },
    {
      id: 'withering',
      title: 'Withering',
      description: 'Allowing leaves to lose moisture and become pliable for processing.',
      details: 'Leaves are spread on bamboo mats and naturally air-dried to reduce moisture content by 60-70%.',
      position: [-2, 1, 1]
    },
    {
      id: 'rolling',
      title: 'Rolling',
      description: 'Gently rolling leaves to break cell walls and release essential oils.',
      details: 'Traditional hand-rolling or machine rolling breaks down leaf structure to enhance flavor extraction.',
      position: [0, 0, 0]
    },
    {
      id: 'oxidation',
      title: 'Oxidation',
      description: 'Controlled exposure to air develops the tea\'s characteristic flavor.',
      details: 'Careful monitoring of temperature and humidity during oxidation determines the final tea type.',
      position: [2, 1, -1]
    },
    {
      id: 'firing',
      title: 'Firing',
      description: 'Heat treatment stops oxidation and preserves the tea\'s flavor profile.',
      details: 'Precise temperature control during firing locks in the desired flavor characteristics.',
      position: [4, 2, 0]
    },
    {
      id: 'packaging',
      title: 'Packaging',
      description: 'Careful packaging preserves freshness and quality until it reaches you.',
      details: 'Eco-friendly packaging materials protect tea quality while minimizing environmental impact.',
      position: [0, -2, 2]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Tea Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow the fascinating journey from tea garden to your cup, 
            where ancient traditions meet modern quality standards.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 bg-white/30 backdrop-blur-sm rounded-2xl overflow-hidden"
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={0.8} />
              <pointLight position={[-10, -10, -5]} intensity={0.3} color="#22c55e" />
              
              {steps.map((step, index) => (
                <TeaStep3D
                  key={step.id}
                  step={step.id}
                  isActive={index === activeStep}
                  position={step.position}
                />
              ))}
              
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            </Canvas>

            {/* Step Counter */}
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-semibold text-gray-700">
                Step {activeStep + 1} of {steps.length}
              </span>
            </div>
          </motion.div>

          {/* Step Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Active Step Info */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {steps[activeStep].description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {steps[activeStep].details}
              </p>
            </div>

            {/* Step Navigation */}
            <div className="grid grid-cols-3 gap-3">
              {steps.map((step, index) => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    index === activeStep
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white/60 text-gray-700 hover:bg-white/80'
                  }`}
                >
                  {step.title}
                </motion.button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                initial={{ width: 0 }}
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <motion.button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                whileHover={{ scale: activeStep === 0 ? 1 : 1.05 }}
                whileTap={{ scale: activeStep === 0 ? 1 : 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeStep === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                Previous
              </motion.button>
              
              <motion.button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                whileHover={{ scale: activeStep === steps.length - 1 ? 1 : 1.05 }}
                whileTap={{ scale: activeStep === steps.length - 1 ? 1 : 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeStep === steps.length - 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                Next
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TeaJourney3D
