import { useState } from 'react'

const BuggyList = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange'])

  console.log('🟢 BuggyList rendered, items:', items)

  if (items.length === 0) {
    console.log('💥 About to crash - no items!')
    throw new Error('Cannot render empty list!')
  }

  const handleDelete = (index) => {
    console.log('Deleting item at index:', index)
    const newItems = items.filter((_, i) => i !== index)
    setItems(newItems)
  }

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px'
    }}>
      <h3>Buggy List Demo</h3>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        This component will crash when list becomes empty
      </p>

      <div style={{ marginBottom: '15px' }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 15px',
              backgroundColor: 'white',
              borderRadius: '5px',
              marginBottom: '8px',
              border: '1px solid #ddd'
            }}
          >
            <span style={{ fontSize: '16px' }}>{item}</span>
            <button
              onClick={() => handleDelete(index)}
              style={{
                padding: '5px 12px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <p style={{
        fontSize: '14px',
        color: items.length === 1 ? '#ff0000' : '#999'
      }}>
        {items.length === 1 
          ? '⚠️ Warning: Deleting last item will crash!' 
          : `Status: ✅ ${items.length} items remaining`
        }
      </p>
    </div>
  )
}

export default BuggyList