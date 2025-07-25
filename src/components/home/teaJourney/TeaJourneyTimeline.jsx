import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TeaJourneyTimeline = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const journeySteps = [
    {
      id: 1,
      title: "Cultivation",
      description: "Hand-picked from the finest tea gardens at optimal altitude",
      icon: "🌱",
      color: "from-green-400 to-emerald-600",
      image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Processing",
      description: "Traditional methods preserve the natural essence and flavor",
      icon: "⚡",
      color: "from-amber-400 to-orange-600",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Quality Testing",
      description: "Rigorous testing ensures premium quality in every batch",
      icon: "🔬",
      color: "from-blue-400 to-indigo-600",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Packaging",
      description: "Eco-friendly packaging preserves freshness and flavor",
      icon: "📦",
      color: "from-purple-400 to-pink-600",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Your Cup",
      description: "The perfect moment of tranquility in your daily routine",
      icon: "☕",
      color: "from-rose-400 to-red-600",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop"
    }
  ]

  useEffect(() => {
    if (isInView) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      })

      journeySteps.forEach((_, index) => {
        timeline.fromTo(
          `.journey-step-${index}`,
          { 
            opacity: 0, 
            y: 100,
            scale: 0.8
          },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          },
          index * 0.2
        )
      })

      // Animate the connecting line
      timeline.fromTo(
        ".journey-line",
        { scaleY: 0 },
        { scaleY: 1, duration: 2, ease: "power2.inOut" },
        0
      )
    }
  }, [isInView])

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Tea Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From garden to cup, discover the meticulous process that brings you the perfect tea experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="journey-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-amber-400 via-blue-400 via-purple-400 to-rose-400 origin-top"></div>

          <div className="space-y-24">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`journey-step-${index} flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8 lg:gap-16`}
              >
                {/* Content */}
                <div className="flex-1 max-w-md">
                  <div className={`p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20 ${
                    index % 2 === 0 ? 'text-left' : 'text-right'
                  }`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white text-2xl mb-4 ${
                      index % 2 === 0 ? '' : 'ml-auto'
                    }`}>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-20">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} shadow-lg`}></div>
                </div>

                {/* Image */}
                <div className="flex-1 max-w-md">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-2xl"></div>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeaJourneyTimeline
