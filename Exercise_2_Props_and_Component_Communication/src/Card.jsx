import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h4>{props.age}</h4>
        <p>{props.degree}</p>
        <p>{props.university}</p>
        <p>{props.city}</p>
    </div>
  )
}

export default Card
