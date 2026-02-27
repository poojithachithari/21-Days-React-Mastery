const Header = () => {
  return (
    <div style={{
      backgroundColor: '#667eea',
      color: 'white',
      padding: '30px 20px',
      borderRadius: '8px',
      marginBottom: '30px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        margin: '0 0 10px 0',
        fontSize: '42px',
        fontWeight: 'bold'
      }}>
        📋 TaskFlow
      </h1>
      <p style={{ 
        margin: 0,
        fontSize: '18px',
        opacity: 0.9
      }}>
        Redux-Powered Task Management
      </p>
    </div>
  )
}

export default Header