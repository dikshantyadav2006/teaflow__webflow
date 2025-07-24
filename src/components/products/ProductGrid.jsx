import React from 'react'
import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
    name: "Premium Green Tea",
    price: "$24.99",
    category: "Green Tea",
    description: "Organic premium green tea leaves"
  },
  {
    id: 2,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
    name: "Relaxation Blend",
    price: "$29.99",
    category: "Herbal Tea",
    description: "Calming herbal tea blend"
  },
  {
    id: 3,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
    name: "Life Flow Tea",
    price: "$34.99",
    category: "Wellness Tea",
    description: "Energizing wellness tea blend"
  },
  {
    id: 4,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
    name: "Earl Grey Classic",
    price: "$22.99",
    category: "Black Tea",
    description: "Traditional Earl Grey with bergamot"
  },
  {
    id: 5,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
    name: "Chamomile Dreams",
    price: "$26.99",
    category: "Herbal Tea",
    description: "Pure chamomile flowers for relaxation"
  },
  {
    id: 6,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
    name: "Morning Boost",
    price: "$31.99",
    category: "Energy Tea",
    description: "Energizing morning tea blend"
  },
  {
    id: 7,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
    name: "White Tea Delicate",
    price: "$39.99",
    category: "White Tea",
    description: "Delicate white tea with subtle flavor"
  },
  {
    id: 8,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
    name: "Oolong Supreme",
    price: "$36.99",
    category: "Oolong Tea",
    description: "Premium oolong tea with complex flavor"
  },
  {
    id: 9,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
    name: "Jasmine Phoenix Pearls",
    price: "$42.99",
    category: "Scented Tea",
    description: "Hand-rolled jasmine scented green tea"
  },
  {
    id: 10,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
    name: "Rooibos Vanilla",
    price: "$23.99",
    category: "Rooibos Tea",
    description: "Caffeine-free rooibos with vanilla"
  },
  {
    id: 11,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
    name: "Peppermint Fresh",
    price: "$21.99",
    category: "Herbal Tea",
    description: "Refreshing peppermint leaves"
  },
  {
    id: 12,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
    name: "Dragon Well Green",
    price: "$33.99",
    category: "Green Tea",
    description: "Classic Chinese Dragon Well green tea"
  }
]

const ProductGrid = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductGrid
