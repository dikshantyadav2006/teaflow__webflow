import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// 3D Tea Cup Component
const TeaCup = ({ teaColor, fillLevel, isPouring }) => {
  const cupRef = useRef()
  const teaRef = useRef()
  const steamRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Gentle cup rotation
    if (cupRef.current) {
      cupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1
    }
    
    // Tea liquid animation
    if (teaRef.current) {
      teaRef.current.position.y = -0.8 + (fillLevel * 0.6)
      teaRef.current.material.opacity = Math.min(fillLevel * 2, 0.8)
      
      // Gentle wave effect
      teaRef.current.rotation.z = Math.sin(time * 2) * 0.02
    }
    
    // Steam animation
    if (steamRef.current && fillLevel > 0.3) {
      steamRef.current.children.forEach((particle, i) => {
        particle.position.y += 0.01
        particle.position.x += Math.sin(time + i) * 0.002
        particle.material.opacity = Math.max(0, 0.3 - particle.position.y * 0.1)
        
        if (particle.position.y > 2) {
          particle.position.y = 0.5
          particle.material.opacity = 0.3
        }
      })
    }
  })

  // Create steam particles
  const steamParticles = []
  for (let i = 0; i < 8; i++) {
    steamParticles.push(
      <mesh key={i} position={[Math.random() * 0.3 - 0.15, 0.5, Math.random() * 0.3 - 0.15]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="white" transparent opacity={0.3} />
      </mesh>
    )
  }

  return (
    <group ref={cupRef}>
      {/* Cup Base */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.6, 0.4, 1, 32]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.1} metalness={0.1} />
      </mesh>
      
      {/* Cup Handle */}
      <mesh position={[0.7, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.2, 0.05, 8, 16]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.1} metalness={0.1} />
      </mesh>
      
      {/* Tea Liquid */}
      <mesh ref={teaRef} position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.55, 0.35, 0.6, 32]} />
        <meshStandardMaterial 
          color={teaColor} 
          transparent 
          opacity={0.8}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
      
      {/* Steam Particles */}
      <group ref={steamRef}>
        {steamParticles}
      </group>
      
      {/* Pouring Effect */}
      {isPouring && (
        <mesh position={[0, 1.5, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
          <meshStandardMaterial color={teaColor} transparent opacity={0.6} />
        </mesh>
      )}
    </group>
  )
}

// Main 3D Tea Cup Component
const TeaCup3D = ({ currentProduct, onProductChange, onAddToCart, products }) => {
  const [fillLevel, setFillLevel] = useState(0)
  const [isPouring, setIsPouring] = useState(false)
  const [selectedProductIndex, setSelectedProductIndex] = useState(0)

  // Tea colors for different products
  const teaColors = {
    'Green Tea': '#4ade80',
    'Black Tea': '#7c2d12',
    'Herbal Tea': '#f59e0b',
    'Oolong Tea': '#d97706',
    'White Tea': '#fbbf24',
    'Wellness Tea': '#10b981',
    'Energy Tea': '#ef4444'
  }

  const currentTeaColor = teaColors[currentProduct?.category] || '#4ade80'

  // Auto-fill animation
  useEffect(() => {
    setIsPouring(true)
    setFillLevel(0)
    
    const fillAnimation = setInterval(() => {
      setFillLevel(prev => {
        if (prev >= 1) {
          setIsPouring(false)
          clearInterval(fillAnimation)
          return 1
        }
        return prev + 0.02
      })
    }, 50)

    return () => clearInterval(fillAnimation)
  }, [currentProduct])

  const handleProductChange = (direction) => {
    const newIndex = direction === 'next' 
      ? (selectedProductIndex + 1) % products.length
      : (selectedProductIndex - 1 + products.length) % products.length
    
    setSelectedProductIndex(newIndex)
    onProductChange(products[newIndex])
  }

  const handleAddToCart = () => {
    onAddToCart(currentProduct)
    
    // Visual feedback - quick refill animation
    setFillLevel(0)
    setIsPouring(true)
    setTimeout(() => {
      setFillLevel(1)
      setIsPouring(false)
    }, 1000)
  }

  return (
    <div className="w-full h-[60vh] relative bg-gradient-to-b from-white/5 to-white/20 rounded-lg overflow-hidden">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        className="w-full h-full"
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <TeaCup 
          teaColor={currentTeaColor}
          fillLevel={fillLevel}
          isPouring={isPouring}
        />
      </Canvas>

      {/* Product Controls Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Product Info */}
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-4 pointer-events-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{currentProduct?.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{currentProduct?.category}</p>
          <p className="text-xl font-bold text-gray-900">{currentProduct?.price}</p>
        </div>

        {/* Product Navigation */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col space-y-2 pointer-events-auto">
          <motion.button
            onClick={() => handleProductChange('prev')}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 hover:bg-white/30 transition-colors border border-white/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ↑
          </motion.button>
          
          <motion.button
            onClick={() => handleProductChange('next')}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 hover:bg-white/30 transition-colors border border-white/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ↓
          </motion.button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute bottom-4 right-4 pointer-events-auto">
          <motion.button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H3m4 8v6a1 1 0 001 1h8a1 1 0 001-1v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Add to Cart</span>
          </motion.button>
        </div>

        {/* Fill Level Indicator */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 pointer-events-auto">
          <div className="text-xs text-gray-600 mb-1">Tea Level</div>
          <div className="w-20 h-2 bg-gray-300 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: currentTeaColor }}
              initial={{ width: 0 }}
              animate={{ width: `${fillLevel * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-xs text-gray-600 mt-1">{Math.round(fillLevel * 100)}%</div>
        </div>

        {/* Product Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 pointer-events-auto">
          {products.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setSelectedProductIndex(index)
                onProductChange(products[index])
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedProductIndex 
                  ? 'bg-black' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeaCup3D
