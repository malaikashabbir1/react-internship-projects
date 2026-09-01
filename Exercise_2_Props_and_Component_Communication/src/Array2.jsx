import React from 'react'

const Array2 = ({list, Shaheer}) => {
    const [name,age,food,city] = Shaheer
  return (
    <div>
        {
            list.map((baby) => {
                return (
                    <h1 key={baby}>{baby}</h1>
                )
            })
        }
        {
            Shaheer.map((intro) => {
                return (
                    <h1 key ={intro}> {intro}</h1>
                )
            })
        }

        <div>
            <h1>{Shaheer}</h1>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h3>{food}</h3>
            <h4>{city}</h4>
        </div>

        {
            Shaheer.map( (data) => (
                <h1 key={data}> {data}</h1>
            ))
        }

    </div>
  )
}

export default Array2