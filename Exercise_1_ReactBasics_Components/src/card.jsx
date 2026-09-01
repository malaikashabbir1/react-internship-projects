import React from 'react'
import './app.css'

const Card = (props) => {
  return (
    <div>
        <img className='image' src={props.image} alt="profile"></img>
        <h3>{props.name}</h3>
        <h5>{props.designation} </h5>
        <p>{props.email}</p>
        <p>{props.skills}</p>
    </div>
  )
}

export default Card