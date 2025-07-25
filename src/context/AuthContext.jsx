import { createContext, useContext, useReducer, useEffect, useState } from 'react'

const AuthContext = createContext()

// Auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

// Initialize state with localStorage data if available
const getInitialState = () => {
  if (typeof window !== 'undefined') {
    try {
      const savedUser = localStorage.getItem('teaflow-user')
      if (savedUser && savedUser !== 'undefined' && savedUser !== 'null') {
        const parsedUser = JSON.parse(savedUser)
        if (parsedUser && parsedUser.email) {
          return {
            user: parsedUser,
            isAuthenticated: true,
            loading: false,
            error: null
          }
        }
      }
    } catch (error) {
      console.error('Error reading user from localStorage:', error)
    }
  }
  return {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
  }
}

const initialState = getInitialState()

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const [isInitialized, setIsInitialized] = useState(false)

  // Mark as initialized after first render
  useEffect(() => {
    setIsInitialized(true)
  }, [])

  // Save user to localStorage whenever it changes (but not on initial load)
  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      try {
        if (state.user) {
          localStorage.setItem('teaflow-user', JSON.stringify(state.user))
        } else {
          localStorage.removeItem('teaflow-user')
        }
      } catch (error) {
        console.error('Error saving user to localStorage:', error)
      }
    }
  }, [state.user, isInitialized])

  const login = async (email, password) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'SET_ERROR', payload: null })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock authentication - in real app, this would be an API call
      if (email && password) {
        const user = {
          id: Date.now(),
          email,
          name: email.split('@')[0],
          createdAt: new Date().toISOString()
        }
        dispatch({ type: 'LOGIN', payload: user })
        return { success: true }
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message })
      return { success: false, error: error.message }
    }
  }

  const signup = async (name, email, password) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'SET_ERROR', payload: null })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock registration - in real app, this would be an API call
      if (name && email && password) {
        const user = {
          id: Date.now(),
          email,
          name,
          createdAt: new Date().toISOString()
        }
        dispatch({ type: 'LOGIN', payload: user })
        return { success: true }
      } else {
        throw new Error('All fields are required')
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message })
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  const clearError = () => {
    dispatch({ type: 'SET_ERROR', payload: null })
  }

  const value = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    error: state.error,
    login,
    signup,
    logout,
    clearError
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthContext
