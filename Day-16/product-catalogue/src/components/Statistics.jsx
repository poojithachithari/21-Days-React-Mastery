import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Statistics = () => {
  const { cart } = useContext(CartContext)
  
  const totalProducts = cart.length
  const totalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>📊 Cart Statistics</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        <div style={{
          padding: '30px',
          backgroundColor: '#667eea',
          color: 'white',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h3>Total Products</h3>
          <p style={{ fontSize: '48px', margin: '10px 0' }}>{totalProducts}</p>
        </div>
        
        <div style={{
          padding: '30px',
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h3>Total Items</h3>
          <p style={{ fontSize: '48px', margin: '10px 0' }}>{totalItems}</p>
        </div>
        
        <div style={{
          padding: '30px',
          backgroundColor: '#ff6b6b',
          color: 'white',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h3>Total Value</h3>
          <p style={{ fontSize: '48px', margin: '10px 0' }}>${totalValue}</p>
        </div>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h2>Cart Items Breakdown</h2>
        {cart.map(item => (
          <div key={item.id} style={{
            padding: '15px',
            backgroundColor: '#f0f0f0',
            marginBottom: '10px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>{item.name}</span>
            <span>{item.quantity} × ${item.price} = ${item.quantity * item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Statistics