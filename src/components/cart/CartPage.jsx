import React from 'react'
import CartMain from './CartMain'
import CartSuggestions from './CartSuggestions'

const CartPage = () => {
  return (
    <div className="w-full webColor">
      <CartMain />
      <CartSuggestions />
    </div>
  )
}

export default CartPage
