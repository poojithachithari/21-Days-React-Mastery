import React from 'react'

const SearchBar = React.memo(({search,onSearchChange}) => {
    console.log('SearchBar rendered')
  return (
    <div style={{ marginBottom: '30px' }}>
        <input
          type='text'
          placeholder='Search products...'
          value={search}
          onChange={(e)=> onSearchChange(e.target.value)}
          style={{
          width: '100%',
          padding: '15px',
          fontSize: '18px',
          border: '2px solid #667eea',
          borderRadius: '10px',
          outline: 'none'
        }} 
        />
        <p style={{color: '#666', marginTop: '10px'}}>
            Try typing: shampoo, cream, oil, etc.
        </p>
      
    </div>
  )
})

export default SearchBar
