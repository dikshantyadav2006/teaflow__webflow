import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Individual Tea Leaf Component
const TeaLeaf = ({ position, rotation, scale, color }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002
    }
  })

  // Create leaf shape geometry
  const leafGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.quadraticCurveTo(0.5, 0.3, 1, 0)
    shape.quadraticCurveTo(0.7, -0.2, 0.5, -0.4)
    shape.quadraticCurveTo(0.3, -0.2, 0, 0)
    
    const extrudeSettings = {
      depth: 0.05,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 0.02,
      bevelThickness: 0.02
    }
    
    return new THREE.ExtrudeGeometry(shape, extrudeSettings)
  }, [])

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={scale}
        geometry={leafGeometry}
      >
        <meshStandardMaterial 
          color={color}
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

// Floating Particles
const FloatingParticles = () => {
  const particlesRef = useRef()
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 20
        ],
        scale: Math.random() * 0.1 + 0.05
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial 
            color="#4ade80"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

// Main Scene Component
const TeaLeafScene = () => {
  const leaves = useMemo(() => {
    const temp = []
    const colors = ['#22c55e', '#16a34a', '#15803d', '#166534', '#14532d']
    
    for (let i = 0; i < 15; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 15
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    return temp
  }, [])

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#fbbf24" />
      
      {/* Tea Leaves */}
      {leaves.map((leaf, index) => (
        <TeaLeaf
          key={index}
          position={leaf.position}
          rotation={leaf.rotation}
          scale={leaf.scale}
          color={leaf.color}
        />
      ))}
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* 3D Text - Removed font dependency for now */}
    </>
  )
}

// Main Component
const FloatingTeaLeaves = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        className="absolute inset-0"
        style={{ background: 'transparent' }}
      >
        <TeaLeafScene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center text-white">
          <h2 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
            Pure Nature
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Experience the essence of nature in every sip
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FloatingTeaLeaves
