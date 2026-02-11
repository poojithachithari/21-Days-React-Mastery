import React from 'react'


const Card = ({theme}) => {
  return (
    <div
      style={{
        boxShadow:
          theme === "night"
            ? "0 0 10px rgba(252, 252, 252, 0.3)"
            : "0 4px 12px rgba(49, 48, 48, 0.3)",
        padding: "1.5rem",
        marginTop: "1.5rem",
        borderRadius: "12px",
      }}
    >
        <h2 style={{}}>Theme Aware Card</h2>
        <p>This card reacts to the current theme.</p>

      
    </div>
  )
}

export default Card
