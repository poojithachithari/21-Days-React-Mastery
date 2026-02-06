import React from 'react'

const ProductImage = (props) => {
  return (
    <div>
        <img
        src={props.url}
        alt={props.altText}
        height={props.height}
        width={props.width}
      />
      
      
    </div>
  )
}

export default ProductImage
