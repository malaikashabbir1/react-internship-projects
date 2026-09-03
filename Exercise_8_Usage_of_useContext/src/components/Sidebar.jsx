import React from 'react'
import UserMenu from './UserMenu'
import Footer from './Footer'

const Sidebar = () => {
    
  return (
    <div>
        <h1>SideBar</h1>
        
        {/* I don't need this, passing it down. */}
        <UserMenu/>
        <Footer/>

    </div>
    
  )
}

export default Sidebar