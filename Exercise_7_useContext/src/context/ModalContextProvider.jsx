import React, { useState } from 'react'

import ModalContext from './ModalContext'

const ModalContextProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    
    <ModalContext.Provider value={{isOpen, setIsOpen}}>
        <div>
            {children}
        </div>
    </ModalContext.Provider>
  )
}

export default ModalContextProvider