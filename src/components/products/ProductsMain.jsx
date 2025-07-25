import React from 'react'
import ProductGrid from './ProductGrid'
import ProductHero from './ProductHero'
import ProductsShowcase from './ProductsShowcase'

const ProductsMain = () => {
  return (
    <div className='w-full webColor'>
      <ProductsShowcase />
      <ProductHero />
      <ProductGrid />
    </div>
  )
}

export default ProductsMain
