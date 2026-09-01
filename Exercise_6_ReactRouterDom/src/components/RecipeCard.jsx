import React from 'react'
import '../app.css'
import { Link, useParams } from 'react-router-dom'

const RecipeCard = ({idx, data}) => {
  const {id,image, cuisine,name,rating} = data;
  
  return (
      <div key={idx} className='card_container'>
        <img  className='img' src={image} alt="photo"/>
        <h4>{name}</h4>
        <h5> Cuisine: {cuisine}</h5>
        <p>Rating: {rating}</p>
      </div>
  )
}

export default RecipeCard