import React from 'react'
import { useCart } from '../../context/CartContext'

const CartDebug = () => {
  const { items, getCartItemsCount, getCartTotal } = useCart()

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg text-xs max-w-xs z-50">
      <h4 className="font-bold mb-2">Cart Debug</h4>
      <p>Items: {getCartItemsCount()}</p>
      <p>Total: ${getCartTotal().toFixed(2)}</p>
      <p>LocalStorage: {localStorage.getItem('teaflow-cart')?.length || 0} chars</p>
      <details className="mt-2">
        <summary className="cursor-pointer">Items Detail</summary>
        <pre className="mt-1 text-xs overflow-auto max-h-32">
          {JSON.stringify(items, null, 2)}
        </pre>
      </details>
    </div>
  )
}

export default CartDebug
