import { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext(null)

// HARDCODED USERS (our "database")
const USERS = [
  { id: 1, email: 'admin@test.com', password: 'admin123', name: 'Admin User' },
  { id: 2, email: 'user@test.com', password: 'user123', name: 'Regular User' },
  { id: 3, email: 'john@test.com', password: 'john123', name: 'John Doe' }
]

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user already logged in (on app load)
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken')
    const storedUser = localStorage.getItem('authUser')
    
    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }
    
    setLoading(false)
  }, [])

  // Login function
  const login = (email, password) => {
    // Find user in our hardcoded array
    const foundUser = USERS.find(
      u => u.email === email && u.password === password
    )

    if (foundUser) {
      // Generate simple token (in real app, comes from backend)
      const simpleToken = `token_${foundUser.id}_${Date.now()}`
      
      // Store token and user
      setToken(simpleToken)
      setUser({ id: foundUser.id, email: foundUser.email, name: foundUser.name })
      
      // Persist to localStorage
      localStorage.setItem('authToken', simpleToken)
      localStorage.setItem('authUser', JSON.stringify({
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name
      }))
      
      return { success: true }
    } else {
      return { success: false, error: 'Invalid email or password' }
    }
  }

  // Logout function
  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('authToken')
    localStorage.removeItem('authUser')
  }

  const value = {
    token,
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!token  // true if token exists
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}