import { useSelector } from 'react-redux'
import { selectTaskStats } from '../store/selectors'

const Stats = () => {
  const stats = useSelector(selectTaskStats)

  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0 }}>📊 Statistics</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <div style={{
          padding: '15px',
          backgroundColor: '#e3f2fd',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1976d2' }}>
            {stats.total}
          </div>
          <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
            Total Tasks
          </div>
        </div>

        <div style={{
          padding: '15px',
          backgroundColor: '#fff3e0',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f57c00' }}>
            {stats.active}
          </div>
          <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
            Active
          </div>
        </div>

        <div style={{
          padding: '15px',
          backgroundColor: '#f1f8e9',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#558b2f' }}>
            {stats.completed}
          </div>
          <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
            Completed
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>By Category:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {Object.entries(stats.byCategory).map(([category, count]) => (
            <span
              key={category}
              style={{
                padding: '6px 12px',
                backgroundColor: '#f5f5f5',
                borderRadius: '12px',
                fontSize: '14px'
              }}
            >
              {category}: <strong>{count}</strong>
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>By Priority:</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span style={{
            padding: '6px 12px',
            backgroundColor: '#ffebee',
            borderRadius: '12px',
            fontSize: '14px'
          }}>
            🔴 High: <strong>{stats.byPriority.high || 0}</strong>
          </span>
          <span style={{
            padding: '6px 12px',
            backgroundColor: '#fff3e0',
            borderRadius: '12px',
            fontSize: '14px'
          }}>
            🟡 Medium: <strong>{stats.byPriority.medium || 0}</strong>
          </span>
          <span style={{
            padding: '6px 12px',
            backgroundColor: '#f1f8e9',
            borderRadius: '12px',
            fontSize: '14px'
          }}>
            🟢 Low: <strong>{stats.byPriority.low || 0}</strong>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Stats