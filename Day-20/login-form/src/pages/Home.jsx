import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div style={{
      maxWidth: '800px',
      margin: '50px auto',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        Welcome to SimpleAuth
      </h1>
      <p style={{ fontSize: '20px', color: '#666', marginBottom: '40px' }}>
        A simple authentication demo using React + Context API
      </p>

      {isAuthenticated ? (
        <div>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            ✅ You are logged in!
          </p>
          <Link to="/dashboard">
            <button style={{
              padding: '15px 30px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Go to Dashboard
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            Please login to access protected content
          </p>
          <Link to="/login">
            <button style={{
              padding: '15px 30px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Login
            </button>
          </Link>
        </div>
      )}

      <div style={{
        marginTop: '50px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <h3>Test Accounts:</h3>
        <div style={{ textAlign: 'left', display: 'inline-block' }}>
          <p>📧 admin@test.com | 🔑 admin123</p>
          <p>📧 user@test.com | 🔑 user123</p>
          <p>📧 john@test.com | 🔑 john123</p>
        </div>
      </div>
    </div>
  )
}

export default Home