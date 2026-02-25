const ErrorFallback = ({ error, resetErrorBoundary }) => {
  console.log('🔴 ErrorFallback rendered')
  console.log('Error:', error)

  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#fff3cd',
      border: '2px solid #ffc107',
      borderRadius: '10px',
      margin: '20px 0'
    }}>
      <h2 style={{ color: '#856404', marginBottom: '15px' }}>
        ⚠️ Something Went Wrong (Modern Error Boundary)
      </h2>
      
      <p style={{ color: '#666', marginBottom: '15px' }}>
        This error was caught by the modern react-error-boundary package.
      </p>

      <div style={{
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '5px',
        marginBottom: '20px',
        border: '1px solid #ffc107'
      }}>
        <strong style={{ color: '#856404' }}>Error Message:</strong>
        <p style={{ 
          marginTop: '10px', 
          color: '#d32f2f',
          fontFamily: 'monospace',
          fontSize: '14px'
        }}>
          {error.message}
        </p>
      </div>

      <button
        onClick={resetErrorBoundary}
        style={{
          padding: '12px 24px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        🔄 Try Again
      </button>

      <p style={{ 
        marginTop: '15px', 
        fontSize: '12px',
        color: '#856404'
      }}>
        💡 Tip: This is a custom fallback component. You can style it however you want!
      </p>
    </div>
  )
}

export default ErrorFallback