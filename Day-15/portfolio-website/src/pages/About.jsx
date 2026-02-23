import React from 'react'

const About = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Me</h1>
      
      <p style={{ fontSize: '18px', lineHeight: '1.6', marginTop: '20px' }}>
        I'm a passionate web developer with experience in building modern web applications.
        I love creating clean, user-friendly interfaces and solving complex problems.
      </p>

      <h2 style={{ marginTop: '40px' }}>Skills</h2>
      <ul style={{ fontSize: '18px', lineHeight: '2' }}>
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML & CSS</li>
        <li>Git & GitHub</li>
        <li>Responsive Design</li>
      </ul>
    </div>
  )
}

export default About
