import React from 'react'

const Child = ({handleClick,addition}) => {
  return (
    <div>
        <button onClick={handleClick}>PROPS SUBMISSION BUTTON</button>
        <button onClick = 
        {
            () => {
                addition(22,11)

        }}> ADDING BUTTON</button>
    </div>
  )
}

export default Child