class BlogService {
  constructor() {
    this.blogs = null
    this.loadBlogs()
  }

  async loadBlogs() {
    try {
      const response = await fetch('/data/blogs.json')
      if (!response.ok) {
        throw new Error('Failed to load blogs')
      }
      this.blogs = await response.json()
      return this.blogs
    } catch (error) {
      console.error('Error loading blogs:', error)
      return []
    }
  }

  async getAllBlogs() {
    if (!this.blogs) {
      await this.loadBlogs()
    }
    return this.blogs || []
  }

  async getBlogById(id) {
    const blogs = await this.getAllBlogs()
    return blogs.find(blog => blog.id === parseInt(id))
  }

  async getBlogBySlug(slug) {
    const blogs = await this.getAllBlogs()
    return blogs.find(blog => blog.slug === slug)
  }

  async getBlogsByCategory(category) {
    const blogs = await this.getAllBlogs()
    return blogs.filter(blog => 
      blog.category.toLowerCase() === category.toLowerCase()
    )
  }

  async searchBlogs(query) {
    const blogs = await this.getAllBlogs()
    const searchTerm = query.toLowerCase()
    
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.excerpt.toLowerCase().includes(searchTerm) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      blog.author.toLowerCase().includes(searchTerm)
    )
  }

  async getRelatedBlogs(currentBlogId, limit = 3) {
    const blogs = await this.getAllBlogs()
    const currentBlog = blogs.find(blog => blog.id === currentBlogId)
    
    if (!currentBlog) return []

    // Find blogs with similar tags or category
    const related = blogs
      .filter(blog => blog.id !== currentBlogId)
      .map(blog => {
        let score = 0
        
        // Same category gets higher score
        if (blog.category === currentBlog.category) {
          score += 3
        }
        
        // Shared tags get points
        const sharedTags = blog.tags.filter(tag => 
          currentBlog.tags.includes(tag)
        )
        score += sharedTags.length
        
        return { ...blog, score }
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)

    return related
  }

  async getCategories() {
    const blogs = await this.getAllBlogs()
    const categories = [...new Set(blogs.map(blog => blog.category))]
    return categories.sort()
  }

  async getTags() {
    const blogs = await this.getAllBlogs()
    const allTags = blogs.flatMap(blog => blog.tags)
    const uniqueTags = [...new Set(allTags)]
    return uniqueTags.sort()
  }

  async getRecentBlogs(limit = 5) {
    const blogs = await this.getAllBlogs()
    return blogs
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit)
  }

  async getBlogStats() {
    const blogs = await this.getAllBlogs()
    const categories = await this.getCategories()
    const tags = await this.getTags()
    
    return {
      totalBlogs: blogs.length,
      totalCategories: categories.length,
      totalTags: tags.length,
      averageReadTime: Math.round(
        blogs.reduce((sum, blog) => {
          const time = parseInt(blog.readTime.split(' ')[0])
          return sum + time
        }, 0) / blogs.length
      )
    }
  }
}

// Create singleton instance
const blogService = new BlogService()

export default blogService
