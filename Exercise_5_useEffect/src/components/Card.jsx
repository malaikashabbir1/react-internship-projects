import React from 'react'
import '../App.css'

const Card = ({idx,data}) => {
    let {title,brand,price,rating,images} = data
  return (
      <div key={idx}>
        <img className='img' src={images[0]} alt="photo"/>
        <h2>{title}</h2>
        <h3> Brand: {brand}</h3>
        <h4>Rs.{price}</h4>
        <p>Rating: {rating}</p>
    </div>
  )
}
export default Card