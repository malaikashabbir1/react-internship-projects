import React, { useContext, useState } from 'react'
import AvatarContext from './AvatarContext'


const AvatarContextProvider = ({children}) => {

    const user = {
        name: "Sophie Williams",
        email: "sophie.williams@example.com",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sophie",
        role: "Product Designer"
    };

    const [theme, setTheme] = useState("light")

  return (
    <AvatarContext.Provider value={{user,theme,setTheme}}>
        <div>
           {children}        
        </div>
    </AvatarContext.Provider>
    
  )
}

export default AvatarContextProvider