import { useReducer } from 'react'
import { CartContext } from './context/CartContext'
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'

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

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, dispatch }}>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Header />
        <Products />
        <Cart/>
      </div>
    </CartContext.Provider>
  )
}

export default App