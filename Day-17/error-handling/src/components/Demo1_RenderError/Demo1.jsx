import ClassErrorBoundary from '../errorBoundaries/ClassErrorBoundary';
import BuggyCounter from './BuggyCounter'

const Demo1 = () => {
  return (
    <div style={{
      border: '2px solid #667eea',
      borderRadius: '15px',
      padding: '20px',
      marginBottom: '30px',
      backgroundColor: 'white'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#667eea', marginBottom: '10px' }}>
          📚 DEMO 1: Render Errors (Class Error Boundary)
        </h2>
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '15px', 
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          <p><strong>Technique:</strong> Class Component Error Boundary</p>
          <p><strong>Catches:</strong> Errors during component rendering</p>
          <p><strong>Use Case:</strong> Legacy code, understanding internals</p>
          <p><strong>Test:</strong> Click "Increment" until count reaches 5</p>
        </div>
      </div>

      <ClassErrorBoundary>
        <BuggyCounter />
      </ClassErrorBoundary>
    </div>
  )
}

export default Demo1