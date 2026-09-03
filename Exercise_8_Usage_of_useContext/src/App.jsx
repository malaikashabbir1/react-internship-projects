import React, { useState } from 'react'
import AvatarContextProvider from './context/AvatarContextProvider';
import AppContent from './components/AppContent';
import CartContextProvider from './context/CartContextProvider';



const App = () => {
  return (

    // giving two contexts here
    <AvatarContextProvider>
      <CartContextProvider>
        <AppContent/>
      </CartContextProvider>
    </AvatarContextProvider>
  )
}


// For userAvatar the counts of components which are actually not using the prop values are  3 
// For Footer the counts of components which are actually not using the prop values are 2
export default App