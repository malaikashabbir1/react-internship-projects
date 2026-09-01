import React from 'react'
import './app.css'

const Team_member = (props) => {
  return (
    <div>
        <img className='image' src={props.image} alt="profile" />
        <h2>{props.name} </h2>
        <h3>{props.designation}</h3>
        <p>Availability: {props.availability }</p>
        <button>VIEW PROFILE</button>

    </div>
  )
}

export default Team_member