import React from 'react'
import ProductGrid from './ProductGrid'
import ProductHero from './ProductHero'

const ProductsMain = () => {
  return (
    <div className='w-full webColor'>
      <ProductHero />
      <ProductGrid />
    </div>
  )
}

export default ProductsMain
