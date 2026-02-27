import Header from './components/Header'
import Stats from './components/Stats'
import AddTaskForm from './components/AddTaskForm'
import FilterBar from './components/FilterBar'
import TaskList from './components/TaskList'

function App() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <Header />
      <Stats />
      <AddTaskForm />
      <FilterBar />
      <TaskList />
    </div>
  )
}

export default App
