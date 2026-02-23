import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useReducer } from 'react'
import { ContactContext } from './context/ContactContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// Reducer function
const contactReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, {
        id: Date.now(),
        ...action.payload,
        timestamp: new Date().toLocaleString()
      }]
    
    case 'CLEAR_MESSAGES':
      return []
    
    default:
      return state
  }
}

function App() {
  const [messages, dispatch] = useReducer(contactReducer, [])

  return (
    <ContactContext.Provider value={{ messages, dispatch }}>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ContactContext.Provider>
  )
}

export default App