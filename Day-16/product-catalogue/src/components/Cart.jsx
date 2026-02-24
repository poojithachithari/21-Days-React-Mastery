import { useContext , useMemo} from 'react'
import { CartContext } from '../context/CartContext'
import React from 'react'
const Cart = React.memo(() => {
  const { cart, dispatch } = useContext(CartContext)

  const handleIncrease = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id })
  }

  const handleDecrease = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id })
  }

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

const total = useMemo(() => {
    console.log('💰 Calculating cart total...');
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }, [cart])

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p style={{ color: '#999' }}>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div 
              key={item.id}
              style={{
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginBottom: '15px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 10px 0' }}>{item.name}</h3>
                <p style={{ margin: 0, color: '#667eea', fontWeight: 'bold' }}>
                  ${item.price} × {item.quantity} = ${item.price * item.quantity}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {/* Quantity Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button 
                    onClick={() => handleDecrease(item.id)}
                    style={{
                      padding: '5px 12px',
                      fontSize: '18px',
                      backgroundColor: '#ff6b6b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    −
                  </button>
                  
                  <span style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold',
                    minWidth: '30px',
                    textAlign: 'center'
                  }}>
                    {item.quantity}
                  </span>
                  
                  <button 
                    onClick={() => handleIncrease(item.id)}
                    style={{
                      padding: '5px 12px',
                      fontSize: '18px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button 
                  onClick={() => handleRemove(item.id)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div style={{
            padding: '20px',
            backgroundColor: '#667eea',
            color: 'white',
            borderRadius: '8px',
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'right',
            marginTop: '20px'
          }}>
            Total: ${total}
          </div>
        </div>
      )}
    </div>
  )
})

export default Cart