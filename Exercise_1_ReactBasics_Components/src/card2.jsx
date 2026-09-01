import React from 'react'
import './app.css'

const Card2 = (props) => {
  return (
    <div>
        <img className='image' src={props.img} alt="profile"></img>
        <h3>{props.name}</h3>
        <h5>{props.designation}</h5>
        <p>{props.email}</p>
        <p>{props.skill}</p>
    </div>
  )
}

export default Card2