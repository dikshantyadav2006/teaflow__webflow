import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      }

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      }

    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload
      }

    default:
      return state
  }
}

// Initialize state with localStorage data if available
const getInitialState = () => {
  if (typeof window !== 'undefined') {
    try {
      const savedCart = localStorage.getItem('teaflow-cart')
      if (savedCart && savedCart !== 'undefined' && savedCart !== 'null') {
        const parsedCart = JSON.parse(savedCart)
        if (Array.isArray(parsedCart)) {
          return { items: parsedCart }
        }
      }
    } catch (error) {
      console.error('Error reading initial cart from localStorage:', error)
    }
  }
  return { items: [] }
}

const initialState = getInitialState()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [isInitialized, setIsInitialized] = useState(false)

  //.............. Mark as initialized after first render
  useEffect(() => {
    setIsInitialized(true)
  }, [])

  //................. Save cart to localStorage whenever it changes (but not on initial load)
  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      console.log('Saving cart to localStorage:', state.items)
      try {
        localStorage.setItem('teaflow-cart', JSON.stringify(state.items))
      } catch (error) {
        console.error('Error saving cart to localStorage:', error)
      }
    }
  }, [state.items, isInitialized])

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
  }

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getCartTotal = () => {
    return state.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''))
      return total + (price * item.quantity)
    }, 0)
  }

  const getCartItemsCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
