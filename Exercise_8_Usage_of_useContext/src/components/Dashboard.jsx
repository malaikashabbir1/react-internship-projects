import React from 'react'
import Sidebar from './Sidebar'

const Dashboard =  () => {
    
  return (
    <div>
        <h1>Dashboard</h1>


        {/* I don't need this, passing it down. */}

        {/* _______passing data and theme to children components _______ */}
        <Sidebar/>
        
        
    </div>
    
  )
}

export default Dashboard
