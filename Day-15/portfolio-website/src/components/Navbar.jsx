import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '20px',
      marginBottom: '20px'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '30px',
        margin: 0,
        padding: 0
      }}>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              color: isActive ? '#4CAF50' : 'white',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '3px solid #4CAF50' : 'none',
              paddingBottom: '5px'
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? '#4CAF50' : 'white',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '3px solid #4CAF50' : 'none',
              paddingBottom: '5px'
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects"
            style={({ isActive }) => ({
              color: isActive ? '#4CAF50' : 'white',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '3px solid #4CAF50' : 'none',
              paddingBottom: '5px'
            })}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? '#4CAF50' : 'white',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '3px solid #4CAF50' : 'none',
              paddingBottom: '5px'
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar