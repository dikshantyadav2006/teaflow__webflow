class ProductService {
  constructor() {
    this.products = null
    this.loadProducts()
  }

  async loadProducts() {
    try {
      const response = await fetch('/data/products.json')
      if (!response.ok) {
        // Fallback to hardcoded data if products.json doesn't exist
        this.products = this.getHardcodedProducts()
        return this.products
      }
      this.products = await response.json()
      return this.products
    } catch (error) {
      console.error('Error loading products:', error)
      // Fallback to hardcoded data
      this.products = this.getHardcodedProducts()
      return this.products
    }
  }

  getHardcodedProducts() {
    return [
      {
        id: 1,
        name: "Premium Green Tea",
        slug: "premium-green-tea",
        category: "Green Tea",
        price: 24.99,
        description: {
          short: "Organic premium green tea leaves",
          long: "Our Premium Green Tea is carefully sourced from the finest tea gardens in the mountains of China. Each leaf is hand-picked at the perfect moment to ensure maximum flavor and nutritional benefits."
        },
        images: [
          "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop"
        ],
        benefits: ["Rich in antioxidants", "Boosts metabolism", "Calming effect"],
        ingredients: ["Organic Green Tea Leaves", "Natural Antioxidants"],
        brewing: {
          temperature: "175°F",
          time: "2-3 minutes",
          amount: "1 teaspoon"
        },
        nutritional: {
          caffeine: "25-50mg per cup",
          calories: "0",
          antioxidants: "High"
        },
        stock: {
          available: true,
          quantity: 150
        },
        rating: {
          average: 4.8,
          count: 324
        },
        tags: ["organic", "antioxidants", "premium", "green tea"],
        teaColor: "#4ade80",
        featured: true
      },
      {
        id: 2,
        name: "Relaxation Blend",
        slug: "relaxation-blend",
        category: "Herbal Tea",
        price: 29.99,
        description: {
          short: "Calming herbal tea blend",
          long: "A soothing blend of chamomile, lavender, and lemon balm designed to help you unwind and relax after a long day."
        },
        images: [
          "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
          "https://images.unsplash.com/photo-1597318281675-d6b2c2d0e8d0?w=800&h=600&fit=crop"
        ],
        benefits: ["Promotes relaxation", "Improves sleep quality", "Reduces stress"],
        ingredients: ["Chamomile", "Lavender", "Lemon Balm", "Passionflower"],
        brewing: {
          temperature: "212°F",
          time: "5-7 minutes",
          amount: "1 tablespoon"
        },
        nutritional: {
          caffeine: "Caffeine-free",
          calories: "0",
          antioxidants: "Medium"
        },
        stock: {
          available: true,
          quantity: 89
        },
        rating: {
          average: 4.6,
          count: 198
        },
        tags: ["herbal", "relaxation", "caffeine-free", "sleep"],
        teaColor: "#f59e0b",
        featured: false
      },
      {
        id: 3,
        name: "Life Flow Tea",
        slug: "life-flow-tea",
        category: "Wellness Tea",
        price: 34.99,
        description: {
          short: "Energizing wellness tea blend",
          long: "A revitalizing blend of ginseng, ginkgo biloba, and green tea designed to enhance mental clarity and boost energy levels naturally."
        },
        images: [
          "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
          "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&h=600&fit=crop"
        ],
        benefits: ["Boosts energy", "Enhances focus", "Supports mental clarity"],
        ingredients: ["Green Tea", "Ginseng", "Ginkgo Biloba", "Rhodiola"],
        brewing: {
          temperature: "185°F",
          time: "3-4 minutes",
          amount: "1 teaspoon"
        },
        nutritional: {
          caffeine: "40-60mg per cup",
          calories: "0",
          antioxidants: "High"
        },
        stock: {
          available: true,
          quantity: 67
        },
        rating: {
          average: 4.7,
          count: 156
        },
        tags: ["wellness", "energy", "focus", "ginseng"],
        teaColor: "#10b981",
        featured: true
      },
      {
        id: 4,
        name: "Earl Grey Supreme",
        slug: "earl-grey-supreme",
        category: "Black Tea",
        price: 28.99,
        description: {
          short: "Classic Earl Grey with bergamot oil",
          long: "Our signature Earl Grey blend features premium Ceylon black tea infused with natural bergamot oil and cornflower petals for an elegant, aromatic experience."
        },
        images: [
          "https://images.unsplash.com/photo-1597318281675-d6b2c2d0e8d0?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop"
        ],
        benefits: ["Bold flavor", "Energy boost", "Traditional blend"],
        ingredients: ["Ceylon Black Tea", "Bergamot Oil", "Cornflower Petals"],
        brewing: {
          temperature: "212°F",
          time: "3-5 minutes",
          amount: "1 teaspoon"
        },
        nutritional: {
          caffeine: "40-70mg per cup",
          calories: "0",
          antioxidants: "Medium"
        },
        stock: {
          available: true,
          quantity: 112
        },
        rating: {
          average: 4.5,
          count: 287
        },
        tags: ["black tea", "bergamot", "classic", "traditional"],
        teaColor: "#7c2d12",
        featured: false
      },
      {
        id: 5,
        name: "Silver Needle White",
        slug: "silver-needle-white",
        category: "White Tea",
        price: 45.99,
        description: {
          short: "Delicate white tea with subtle sweetness",
          long: "The finest white tea made from young tea buds, offering a delicate flavor profile with natural sweetness and minimal processing for maximum purity."
        },
        images: [
          "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&h=600&fit=crop"
        ],
        benefits: ["Delicate flavor", "High antioxidants", "Premium quality"],
        ingredients: ["White Tea Buds", "Natural Antioxidants"],
        brewing: {
          temperature: "175°F",
          time: "2-3 minutes",
          amount: "1 tablespoon"
        },
        nutritional: {
          caffeine: "15-30mg per cup",
          calories: "0",
          antioxidants: "Very High"
        },
        stock: {
          available: true,
          quantity: 34
        },
        rating: {
          average: 4.9,
          count: 89
        },
        tags: ["white tea", "premium", "delicate", "antioxidants"],
        teaColor: "#fbbf24",
        featured: true
      },
      {
        id: 6,
        name: "Immunity Boost",
        slug: "immunity-boost",
        category: "Wellness Tea",
        price: 26.99,
        description: {
          short: "Herbal blend with ginger, turmeric, and echinacea",
          long: "A powerful immune-supporting blend featuring ginger, turmeric, echinacea, and elderberry to help strengthen your body's natural defenses."
        },
        images: [
          "https://images.unsplash.com/photo-1597318281675-d6b2c2d0e8d0?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop"
        ],
        benefits: ["Immune support", "Anti-inflammatory", "Natural ingredients"],
        ingredients: ["Ginger", "Turmeric", "Echinacea", "Elderberry", "Lemon Peel"],
        brewing: {
          temperature: "212°F",
          time: "5-7 minutes",
          amount: "1 tablespoon"
        },
        nutritional: {
          caffeine: "Caffeine-free",
          calories: "0",
          antioxidants: "High"
        },
        stock: {
          available: true,
          quantity: 78
        },
        rating: {
          average: 4.4,
          count: 203
        },
        tags: ["immunity", "ginger", "turmeric", "wellness"],
        teaColor: "#ef4444",
        featured: false
      }
    ]
  }

  async getAllProducts() {
    if (!this.products) {
      await this.loadProducts()
    }
    return this.products || []
  }

  async getProductById(id) {
    const products = await this.getAllProducts()
    return products.find(product => product.id === parseInt(id))
  }

  async getProductBySlug(slug) {
    const products = await this.getAllProducts()
    return products.find(product => product.slug === slug)
  }

  async getProductsByCategory(category) {
    const products = await this.getAllProducts()
    return products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    )
  }

  async getFeaturedProducts() {
    const products = await this.getAllProducts()
    return products.filter(product => product.featured)
  }

  async searchProducts(query) {
    const products = await this.getAllProducts()
    const searchTerm = query.toLowerCase()
    
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.short.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }

  async getRelatedProducts(currentProductId, limit = 4) {
    const products = await this.getAllProducts()
    const currentProduct = products.find(product => product.id === currentProductId)
    
    if (!currentProduct) return []

    // Find products with similar category or tags
    const related = products
      .filter(product => product.id !== currentProductId)
      .map(product => {
        let score = 0
        
        // Same category gets higher score
        if (product.category === currentProduct.category) {
          score += 3
        }
        
        // Shared tags get points
        const sharedTags = product.tags.filter(tag => 
          currentProduct.tags.includes(tag)
        )
        score += sharedTags.length
        
        return { ...product, score }
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)

    return related
  }

  async getCategories() {
    const products = await this.getAllProducts()
    const categories = [...new Set(products.map(product => product.category))]
    return categories.sort()
  }

  async getPriceRange() {
    const products = await this.getAllProducts()
    const prices = products.map(product => product.price)
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    }
  }

  async getFilteredProducts(filters = {}) {
    const products = await this.getAllProducts()
    let filtered = [...products]

    if (filters.category) {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === filters.category.toLowerCase()
      )
    }

    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(product => product.price >= filters.minPrice)
    }

    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(product => product.price <= filters.maxPrice)
    }

    if (filters.inStock) {
      filtered = filtered.filter(product => product.stock.available)
    }

    if (filters.featured) {
      filtered = filtered.filter(product => product.featured)
    }

    return filtered
  }

  async getProductStats() {
    const products = await this.getAllProducts()
    const categories = await this.getCategories()
    const priceRange = await this.getPriceRange()
    
    return {
      totalProducts: products.length,
      totalCategories: categories.length,
      averagePrice: Math.round(
        products.reduce((sum, product) => sum + product.price, 0) / products.length * 100
      ) / 100,
      priceRange,
      averageRating: Math.round(
        products.reduce((sum, product) => sum + product.rating.average, 0) / products.length * 10
      ) / 10
    }
  }
}

// Create singleton instance
const productService = new ProductService()

export default productService
