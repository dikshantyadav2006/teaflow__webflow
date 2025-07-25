import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, ClockIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline'
import blogService from '../../services/blogService'

const BlogDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true)
        const blogData = await blogService.getBlogBySlug(slug)
        
        if (!blogData) {
          setError('Blog not found')
          return
        }

        setBlog(blogData)
        
        // Load related blogs
        const related = await blogService.getRelatedBlogs(blogData.id)
        setRelatedBlogs(related)
        
      } catch (err) {
        setError('Failed to load blog')
        console.error('Error loading blog:', err)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      loadBlog()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{error || 'Blog not found'}</h1>
          <button
            onClick={() => navigate('/journal')}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Journal
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/journal')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Journal
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">{blog.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-6">
              {blog.excerpt}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <UserIcon className="w-4 h-4 mr-2" />
                {blog.author}
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2" />
                {blog.readTime}
              </div>
              <div>{blog.date}</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <div className="text-xl leading-relaxed text-gray-700 mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
            {blog.content.introduction}
          </div>

          {/* Sections */}
          {blog.content.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              {blog.content.conclusion}
            </p>
          </motion.div>
        </motion.article>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex items-center mb-4">
            <TagIcon className="w-5 h-5 mr-2 text-gray-600" />
            <span className="font-semibold text-gray-900">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <motion.div
                  key={relatedBlog.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 cursor-pointer"
                  onClick={() => navigate(`/journal/${relatedBlog.slug}`)}
                >
                  <img
                    src={relatedBlog.image}
                    alt={relatedBlog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{relatedBlog.date}</div>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {relatedBlog.excerpt}
                    </p>
                    <div className="mt-4 text-sm text-gray-500">
                      {relatedBlog.readTime}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BlogDetail
