import { useSelector, useDispatch } from 'react-redux'
import { toggleTask, deleteTask } from '../store/taskSlice'
import { selectFilteredTasks } from '../store/selectors'

const TaskList = () => {
  // NOW using filtered tasks from selector!
  const tasks = useSelector(selectFilteredTasks)
  const dispatch = useDispatch()

  if (tasks.length === 0) {
    return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center', 
        color: '#999',
        fontSize: '18px'
      }}>
        No tasks found. Try adjusting your filters or add a new task!
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tasks ({tasks.length})</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            padding: '15px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: task.status === 'completed' ? '#f0f0f0' : 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                margin: '0 0 5px 0',
                textDecoration: task.status === 'completed' ? 'line-through' : 'none',
                color: task.status === 'completed' ? '#999' : '#333'
              }}>
                {task.title}
              </h3>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>
                {task.description}
              </p>
              <div style={{ fontSize: '13px', color: '#999', marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ 
                  padding: '4px 10px', 
                  backgroundColor: '#e3f2fd', 
                  borderRadius: '12px',
                  fontWeight: '500'
                }}>
                  📁 {task.category}
                </span>
                <span style={{ 
                  padding: '4px 10px', 
                  backgroundColor: 
                    task.priority === 'high' ? '#ffebee' : 
                    task.priority === 'medium' ? '#fff3e0' : '#f1f8e9',
                  color:
                    task.priority === 'high' ? '#c62828' :
                    task.priority === 'medium' ? '#ef6c00' : '#558b2f',
                  borderRadius: '12px',
                  fontWeight: '500'
                }}>
                  {task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢'} {task.priority}
                </span>
                <span style={{ 
                  padding: '4px 10px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '12px'
                }}>
                  📅 {task.dueDate}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginLeft: '15px' }}>
              <button
                onClick={() => dispatch(toggleTask(task.id))}
                style={{
                  padding: '8px 15px',
                  backgroundColor: task.status === 'completed' ? '#4CAF50' : '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '14px',
                  transition: 'background-color 0.3s'
                }}
              >
                {task.status === 'completed' ? '↩️ Undo' : '✓ Done'}
              </button>

              <button
                onClick={() => {
                  if (window.confirm('Delete this task?')) {
                    dispatch(deleteTask(task.id))
                  }
                }}
                style={{
                  padding: '8px 15px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '14px'
                }}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList