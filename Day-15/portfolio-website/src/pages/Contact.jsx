import { useState, useContext } from 'react'
import { ContactContext } from '../context/ContactContext'

const Contact = () => {
  const { messages, dispatch } = useContext(ContactContext)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Dispatch to reducer
    dispatch({
      type: 'ADD_MESSAGE',
      payload: formData
    })
    
    alert('Message submitted!')
    
    // Clear form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleClearAll = () => {
    dispatch({ type: 'CLEAR_MESSAGES' })
  }

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Contact Me</h1>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ddd'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ddd'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ddd'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '12px 30px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>

      {/* Submitted Messages */}
      {messages.length > 0 && (
        <div style={{ marginTop: '60px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h2>Submitted Messages ({messages.length})</h2>
            <button
              onClick={handleClearAll}
              style={{
                padding: '8px 16px',
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Clear All
            </button>
          </div>

          {messages.map(msg => (
            <div
              key={msg.id}
              style={{
                border: '1px solid #ddd',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '15px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <strong style={{ fontSize: '18px' }}>{msg.name}</strong>
                <span style={{ color: '#999', fontSize: '14px' }}>{msg.timestamp}</span>
              </div>
              <p style={{ color: '#667eea', marginBottom: '10px' }}>
                📧 {msg.email}
              </p>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Contact