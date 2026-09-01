import React, { useEffect, useState } from 'react'  

const DigitalClock = () => {

    const [clock, setClock] = useState("")

    // Clock is the value being updated by the interval,
    // not a value that should cause the interval to restart
    useEffect( () => {

        const time = setInterval( () => {
            let date = new Date();
            setClock (`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `)
            
        }, 1000)
        console.log("INTERVAL HAS STARTED")

        return () => { 
            clearInterval(time)
            console.log("INTERVAL STOPPED")
        }
        
    }, [])
  return (
    <div>
        <h1>DIGITAL CLOCK</h1>
        <h1>{clock}</h1>
    </div>
  )
}

export default DigitalClock