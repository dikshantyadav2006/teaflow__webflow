import React from 'react'
import { motion } from 'framer-motion'
import { LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & Tea Master",
      bio: "With over 15 years of experience in tea cultivation and blending, Sarah brings ancient wisdom to modern tea practices.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      specialties: ["Tea Blending", "Quality Control", "Sourcing"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Sustainability",
      bio: "Marcus leads our environmental initiatives, ensuring every step of our process supports both quality and sustainability.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      specialties: ["Sustainable Farming", "Supply Chain", "Environmental Impact"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Aisha Patel",
      role: "Customer Experience Director",
      bio: "Aisha ensures every customer interaction reflects our commitment to excellence and tea education.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      specialties: ["Customer Service", "Tea Education", "Community Building"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Kim",
      role: "Innovation Lead",
      bio: "David combines traditional tea knowledge with modern technology to create unique tea experiences.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      specialties: ["Product Development", "Technology", "Innovation"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate tea experts dedicated to bringing you the finest tea experience 
            while supporting sustainable practices and tea communities worldwide.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <motion.a
                    href={member.social.linkedin}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors"
                  >
                    <LinkedInLogoIcon className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.social.twitter}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors"
                  >
                    <TwitterLogoIcon className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for passionate individuals who share our love for tea and sustainability.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
