import React from 'react'

const ProductHero = () => {
  return (
    <div className="w-full min-h-[30vh] sm:min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="text-center px-4">
        <h1 className="uppercase font-['font4'] text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw] font-black text-gray-900 mb-4">
          PRODUCTS
        </h1>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
          Discover our premium collection of teas and accessories
        </p>
      </div>
    </div>
  )
}

export default ProductHero
