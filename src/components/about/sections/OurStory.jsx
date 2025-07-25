import React from 'react'
import { motion } from 'framer-motion'

const OurStory = () => {
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded by tea enthusiasts with a dream to share the finest teas from around the world.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
    },
    {
      year: "2021",
      title: "First Harvest",
      description: "Established partnerships with organic tea gardens in China, India, and Sri Lanka.",
      image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400&h=300&fit=crop"
    },
    {
      year: "2022",
      title: "Going Digital",
      description: "Launched our online platform, bringing premium teas directly to customers worldwide.",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop"
    },
    {
      year: "2023",
      title: "Sustainability Focus",
      description: "Achieved 100% sustainable packaging and carbon-neutral shipping across all products.",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop"
    },
    {
      year: "2024",
      title: "Community Growth",
      description: "Reached 10,000+ happy customers and launched our tea education program.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            What started as a passion for exceptional tea has grown into a mission to connect people 
            with the finest teas while supporting sustainable farming practices around the world.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-600 hidden lg:block"></div>

          {/* Milestones */}
          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className={`text-center lg:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden lg:block">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Image */}
                <div className="flex-1 lg:max-w-md">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                  >
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              "To bridge the gap between ancient tea traditions and modern lifestyles, 
              creating meaningful connections through every cup while supporting sustainable 
              farming communities and preserving the art of tea for future generations."
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory
