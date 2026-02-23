const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Weather App',
      description: 'A weather application using OpenWeather API',
      tech: 'React, API, CSS'
    },
    {
      id: 2,
      name: 'Todo List',
      description: 'Task management app with local storage',
      tech: 'React, localStorage'
    },
    {
      id: 3,
      name: 'Shopping Cart',
      description: 'E-commerce cart with Context API',
      tech: 'React, Context API, useReducer'
    }
  ]

  return (
    <div style={{ padding: '40px' }}>
      <h1>My Projects</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginTop: '30px'
      }}>
        {projects.map(project => (
          <div 
            key={project.id}
            style={{
              border: '1px solid #ddd',
              padding: '30px',
              borderRadius: '10px',
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h2>{project.name}</h2>
            <p style={{ color: '#666', marginTop: '15px' }}>
              {project.description}
            </p>
            <p style={{ 
              color: '#667eea', 
              fontWeight: 'bold',
              marginTop: '15px'
            }}>
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects