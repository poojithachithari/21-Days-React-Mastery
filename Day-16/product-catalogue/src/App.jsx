import { useReducer, useCallback, lazy, Suspense, useState } from 'react' 
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'
import { CartContext } from './context/CartContext'
// Lazy load Statistics page
const Statistics = lazy(() => import('./components/Statistics'))

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...state, { ...action.payload, quantity: 1 }]
      }
    }
      
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload)
    
    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    
    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    
    default:
      return state
  }
}

function App() {
  const [cart, dispatch] = useReducer(cartReducer, [])
  const [showStats, setShowStats] = useState(false) 
  const addToCart = useCallback((product) => {
    dispatch({ type: 'ADD_ITEM', payload: product })
  }, [])

  return (
    <CartContext.Provider value={{ cart, addToCart, dispatch }}>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Header />
        <Products />
        <Cart/>
        {/* Statistics Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => setShowStats(!showStats)}
            style={{
              padding: '15px 30px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '18px',
              cursor: 'pointer'
            }}
          >
            {showStats ? 'Hide Statistics' : 'View Statistics 📊'}
          </button>
        </div>
        
        {/* Lazy Loaded Statistics */}
        {showStats && (
          <Suspense fallback={
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <h2>Loading Statistics...</h2>
            </div>
          }>
            <Statistics />
          </Suspense>
        )}
      </div>
    </CartContext.Provider>
  )
}

export default App