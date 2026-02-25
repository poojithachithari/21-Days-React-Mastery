import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../errorBoundaries/ErrorFallback'
import BuggyList from './BuggyList'

const Demo2 = () => {
  const handleError = (error, errorInfo) => {
    console.log('📍 Modern Error Boundary caught error!')
    console.log('Error:', error)
    console.log('Error Info:', errorInfo)
  }

  return (
    <div style={{
      border: '2px solid #ffc107',
      borderRadius: '15px',
      padding: '20px',
      marginBottom: '30px',
      backgroundColor: 'white'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#ffc107', marginBottom: '10px' }}>
          📚 DEMO 2: Modern Error Boundary (react-error-boundary)
        </h2>
        <div style={{ 
          backgroundColor: '#fff3cd', 
          padding: '15px', 
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          <p><strong>Technique:</strong> react-error-boundary npm package</p>
          <p><strong>Catches:</strong> Render errors (modern approach)</p>
          <p><strong>Use Case:</strong> Modern production apps</p>
          <p><strong>Test:</strong> Delete all items from the list</p>
          <p><strong>Advantage:</strong> Built-in reset, hooks support, less code!</p>
        </div>
      </div>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={handleError}
      >
        <BuggyList />
      </ErrorBoundary>
    </div>
  )
}

export default Demo2