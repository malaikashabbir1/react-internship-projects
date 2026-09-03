import React, { useContext } from 'react'
import AvatarContext from '../context/AvatarContext'


const Footer = () => {

  //____________ here we only need theme so extracting it's value
  const {theme} = useContext(AvatarContext)

  return (
    <div className= { theme === "light" ? "light-theme" : "dark-theme"}>
        <h1>Footer</h1>
        <p>Theme: {theme}</p>
    </div>
  )
}

export default Footer