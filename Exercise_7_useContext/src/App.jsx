import React, { useContext, useState } from 'react'


import ModalContextProvider from './context/ModalContextProvider'
import ModalContent from './components/ModalContent'


const App = () => {

  
    

    return (
        <ModalContextProvider>
          <ModalContent/>
        </ModalContextProvider>
    )
}



export default App