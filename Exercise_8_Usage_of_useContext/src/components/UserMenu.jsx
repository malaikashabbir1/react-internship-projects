import React, { useContext, useState } from 'react'
import AvatarContext from '../context/AvatarContext'
import UserAvatar from './UserAvatar'


const UserMenu = () => {

  // _________ here we need theme , setTheme function so we are extracting it 
    const {theme, setTheme} = useContext(AvatarContext)

  return (
    <div>
        <h1>UserMenu</h1>
        {/* I don't need this, passing it down. */}


        {/* simple changing the theme will not let two way changing of state setTheme("dark") */}
          <button onClick={() => {
            setTheme( theme === "light" ? "dark" : "light")
          }}>Change the Theme</button>

        <UserAvatar />


    </div>
    
   
  )
}

export default UserMenu