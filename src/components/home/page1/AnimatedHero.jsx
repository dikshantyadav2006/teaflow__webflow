import React, { useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { scrollToTopInstant } from '../../../utils/scrollToTop'
import * as THREE from 'three'

// Image transition wrapper component with left-to-right slide
const ImageTransition = ({ children, currentId }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentId}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// Enhanced Wave animation component with hover effect
const WaveImage = ({ imageUrl, isActive, opacity = 1, isHovered }) => {
  const meshRef = useRef()
  const groupRef = useRef()
  const texture = useTexture(imageUrl)

  // Create larger wave geometry for better effect
  const geometry = new THREE.PlaneGeometry(6, 6, 64, 64)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      const positions = meshRef.current.geometry.attributes.position

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i)
        const y = positions.getY(i)

          // Enhanced wave intensity with hover effect
        const baseIntensity = isActive ? 0.12 : 0.06
        const hoverMultiplier = isHovered ? 2.5 : 1
        const intensity = baseIntensity * hoverMultiplier

       
        const wave1 = Math.sin(x * 1.5 + time * 1.8) * intensity
        const wave2 = Math.sin(y * 1.3 + time * 1.4) * intensity
        const wave3 = Math.sin((x + y) * 0.8 + time * 2.2) * intensity * 0.5
        const wave4 = Math.sin((x - y) * 1.1 + time * 1.6) * intensity * 0.3

        // Circular wave pattern
        const distance = Math.sqrt(x * x + y * y)
        const circularWave = Math.sin(distance * 2 - time * 3) * intensity * 0.4

        const totalWave = wave1 + wave2 + wave3 + wave4 + circularWave
        positions.setZ(i, totalWave)
      }

      positions.needsUpdate = true
    }

    // Gentle rotation animation
    if (groupRef.current) {
      const rotationSpeed = isHovered ? 0.3 : 0.1
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * rotationSpeed) * 0.02
      groupRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * rotationSpeed * 0.7) * 0.01
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={opacity}
          side={THREE.DoubleSide}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
    </group>
  )
}

const AnimatedHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isCanvasHovered, setIsCanvasHovered] = useState(false)
  const navigate = useNavigate()
  
  // Array of content with images and text//=============================
  const heroContent = [
    {
      id: 1,
      image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
      title: "Premium Green Tea",
      subtitle: "Perfect start to your day",
      description: "Discover the refreshing taste of Premium Green Tea - a perfect blend to energize your morning",
      color: "#2D5016"
    },
    {
      id: 2,
      image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
      title: "Relaxation Blend",
      subtitle: "Unwind and relax",
      description: "Experience the calming effects of our Relaxation Blend - perfect for evening meditation",
      color: "#4A5D23"
    },
    {
      id: 3,
      image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
      title: "Life Flow Tea",
      subtitle: "Energize your soul",
      description: "Boost your vitality with Life Flow Tea - an invigorating blend for active lifestyles",
      color: "#1A4B3A"
    },
    {
      id: 4,
      image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f4_gaba-oolong1-1200-min.jpg",
      title: "Premium Oolong",
      subtitle: "Traditional excellence",
      description: "Savor the complex flavors of our Premium Oolong - a masterpiece of traditional tea crafting",
      color: "#8B4513"
    }
  ]

  // Auto-cycle through content with longer delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length)
    }, 6000) // Change every 6 seconds (increased delay)

    return () => clearInterval(interval)
  }, [heroContent.length])



  const currentContent = heroContent[currentIndex]

  return (
    <div className='w-full min-h-[85vh] overflow-hidden relative'>
      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 w-full p-[5vw] pointer-events-none">
        {/* Mobile Image Section */}
        <div className='w-full flex justify-center items-center mb-8'>
          <div
            className='w-[80vw] h-[80vw] rounded-[7vh] overflow-hidden relative'
            onMouseEnter={() => setIsCanvasHovered(true)}
            onMouseLeave={() => setIsCanvasHovered(false)}
          >
            <ImageTransition currentId={currentContent.id}>
              <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                className="w-full h-full"
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: true }}
              >
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} />

                <WaveImage
                  imageUrl={currentContent.image}
                  isActive={true}
                  opacity={1}
                  isHovered={isCanvasHovered}
                />
              </Canvas>
            </ImageTransition>

            <div
              className="absolute inset-0 pointer-events-none transition-all duration-500"
              style={{
                background: `linear-gradient(45deg, transparent 0%, ${currentContent.color}15 100%)`
              }}
            />
          </div>
        </div>

        {/* Mobile Text Section ============================================================                              - */}
        <div className="w-full flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent.id}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className='font-["font2"] uppercase font-black text-[#222020] text-[8vw] leading-tight mb-4'
            >
              <h1>
                {currentContent.title} {currentContent.subtitle}
              </h1>
            </motion.div>
          </AnimatePresence>

          <div className="w-full max-w-[80vw] mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentContent.id}`}
                initial={{ x: "-50%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "50%", opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-['font1'] leading-6 text-sm font-black text-center"
              >
                {currentContent.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Mobile Button to Products =============================================    */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors pointer-events-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                scrollToTopInstant();
                navigate('/products');
              }}
            >
              Shop Now
            </motion.button>

            {/* Progress Indicators =============================================== */}
            <div className="flex gap-2">
              {heroContent.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  style={{ pointerEvents: 'auto' }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
{/* ================================================================================================= */}
      {/* Desktop Layout =========================================================================== */}
      <div className="hidden lg:block relative z-10 w-full p-[5vw] pointer-events-none">
        <div className="flex w-full">
          {/* Left Text Section */}
          <div className="w-[50vw] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentContent.id}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className='font-["font2"] uppercase font-black text-[#222020] text-[6vw] leading-tight'
              >
                <h1>
                  <span className="w-[10vw] inline-block"></span>
                  {currentContent.title} {currentContent.subtitle}
                </h1>
              </motion.div>
            </AnimatePresence>

            <div className="w-[25vw] mt-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentContent.id}`}
                  initial={{ x: "-50%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "50%", opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-['font1'] leading-6 text-m font-black"
                >
                  {currentContent.description}
                </motion.p>
              </AnimatePresence>

             
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-8">
              {heroContent.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  style={{ pointerEvents: 'auto' }}
                />
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className='w-[50vw] flex justify-center items-center'>
            <div
              className='w-[40vw] h-[40vw] rounded-[7vh] overflow-hidden relative'
              onMouseEnter={() => setIsCanvasHovered(true)}
              onMouseLeave={() => setIsCanvasHovered(false)}
            >
              <ImageTransition currentId={currentContent.id}>
                <Canvas
                  camera={{ position: [0, 0, 6], fov: 60 }}
                  className="w-full h-full"
                  style={{ background: 'transparent' }}
                  gl={{ alpha: true, antialias: true }}
                >
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[10, 10, 5]} intensity={1.2} />
                  <pointLight position={[-10, -10, -5]} intensity={0.5} />

                  {/* Only render the current image with hover effect */}
                  <WaveImage
                    imageUrl={currentContent.image}
                    isActive={true}
                    opacity={1}
                    isHovered={isCanvasHovered}
                  />
                </Canvas>
              </ImageTransition>

              {/* Static overlay gradient */}
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-500"
                style={{
                  background: `linear-gradient(45deg, transparent 0%, ${currentContent.color}15 100%)`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedHero
