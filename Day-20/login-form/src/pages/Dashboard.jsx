import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { user, token } = useAuth()

  return (
    <div style={{
      maxWidth: '800px',
      margin: '50px auto',
      padding: '30px'
    }}>
      <h1 style={{ marginBottom: '20px' }}>
        🎯 Dashboard (Protected Page)
      </h1>

      <div style={{
        padding: '20px',
        backgroundColor: '#e8f5e9',
        border: '2px solid #4CAF50',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#2e7d32', marginTop: 0 }}>
          ✅ You are authenticated!
        </h2>
        <p style={{ color: '#1b5e20', fontSize: '16px' }}>
          This page is only accessible to logged-in users.
        </p>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3>Your Info:</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.id}</p>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <h3>Your Token:</h3>
        <code style={{
          padding: '10px',
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '4px',
          display: 'block',
          wordBreak: 'break-all',
          fontSize: '14px'
        }}>
          {token}
        </code>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          This token is stored in localStorage and sent with requests to verify you're logged in.
        </p>
      </div>

      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#fff3e0',
        borderRadius: '8px'
      }}>
        <h3>💡 How It Works:</h3>
        <ol style={{ lineHeight: '1.8' }}>
          <li>You logged in with valid credentials</li>
          <li>System generated a token for you</li>
          <li>Token stored in localStorage</li>
          <li>ProtectedRoute checks for token</li>
          <li>If token exists → You can see this page ✅</li>
          <li>If no token → Redirect to login ❌</li>
        </ol>
      </div>
    </div>
  )
}

export default Dashboard