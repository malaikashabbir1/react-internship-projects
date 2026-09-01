import React from 'react'

const Card2 = ({idx,data}) => {
    const {name,age} = data
  return (
    <div>
        <h1> {name} </h1>
        <h2>{age}</h2>
        <h3>{idx}</h3>
    </div>

  )
}

export default Card2