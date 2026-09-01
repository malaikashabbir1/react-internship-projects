import React from 'react'

const Product = ({idx, product_data}) => {
    console.log(idx, product_data);
    const {productName,price,category,inStock} = product_data;
  return (
    <div>
        <h1>{productName}</h1>
        <h2>{price}</h2>
        <h3>{category}</h3>
        <h4>{String(inStock)}</h4>
    </div>
  )
}

export default Product