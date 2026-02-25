import React, { useState } from 'react'

const BuggyCounter = () => {
    const [count,setCount]= useState(0)
     console.log('🔵 BuggyCounter rendered, count:', count)
     if (count === 5) {
    console.log('💥 About to crash!')
    throw new Error('I crashed because count reached 5!')
  }
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px'
    }}>
      <h3>Buggy Counter Demo</h3>
      <p style={{ color: '#666' }}>
        This component will crash when count reaches 5
      </p>
      
      <div style={{ 
        fontSize: '48px', 
        fontWeight: 'bold',
        color: '#667eea',
        margin: '20px 0' 
      }}>
        {count}
      </div>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#999',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Reset
      </button>

      <p style={{ 
        marginTop: '15px', 
        fontSize: '14px',
        color: count >= 3 ? '#ff0000' : '#999'
      }}>
        {count >= 3 ? '⚠️ Warning: Close to crash!' : 'Status: ✅ Working fine'}
      </p>
    </div>
  )
}

export default BuggyCounter
