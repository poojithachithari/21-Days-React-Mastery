import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <nav style={{
      backgroundColor: '#667eea',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ 
          color: 'white', 
          textDecoration: 'none',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          🔐 SimpleAuth
        </Link>
        
        {isAuthenticated && (
          <Link to="/dashboard" style={{ 
            color: 'white', 
            textDecoration: 'none',
            fontSize: '16px'
          }}>
            Dashboard
          </Link>
        )}
      </div>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        {isAuthenticated ? (
          <>
            <span style={{ color: 'white', fontSize: '16px' }}>
              👤 {user.name}
            </span>
            <button
              onClick={logout}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button style={{
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar