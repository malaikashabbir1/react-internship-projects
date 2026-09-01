import React from 'react'

const Array_prop = ({data,data2}) => {
    const [name,age,country] = data;
  return (
    <div>
        <h1>{data}</h1>
        {
            data2.map ((naam) =>{
                return (
                    <h3 key = {naam}>{naam}</h3>
                )
            })
        }
    </div>
  )
}

export default Array_prop