import React, { useContext, useState } from 'react'
import Dashboard from './Dashboard'
import AvatarContext from '../context/AvatarContext'
import ShoppingCart from './ShoppingCart'
import Navbar from './Navbar'

const AppContent = () => {

    // _________ here we need theme , setTheme function so we are extracting it 
    const {theme, setTheme} = useContext(AvatarContext)

   return (
    <div>
        <Navbar/>
        <ShoppingCart/>

          {/* simple changing the theme will not let two way changing of state setTheme("dark") */}
          <button onClick={() => {
            setTheme( theme === "light" ? "dark" : "light")
          }}>Change the Theme</button>

        <Dashboard />
       
    </div>
  )
}

// For userAvatar the counts of components which are actually not using the prop values are  3 
// For Footer the counts of components which are actually not using the prop values are 2

export default AppContent