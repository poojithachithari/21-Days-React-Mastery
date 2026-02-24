import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import React from 'react';
const Header = React.memo(() => {
  const { cart } = useContext(CartContext)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div style={{
      backgroundColor: '#667eea',
      color: 'white',
      padding: '20px',
      marginBottom: '20px',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2>My Shop</h2>
      <div style={{ fontSize: '18px' }}>
        🛒 Cart: {totalItems} {totalItems === 1 ? 'item' : 'items'}
      </div>
    </div>
  )
})

export default Header