import React, { useContext, useState } from 'react'

import ModalContext from '../context/ModalContext'


const Modal = ({ onClose, title, children }) => {

    const {isOpen} =  useContext(ModalContext)

    if (!isOpen) {
        return null
    }

    return (
        <div className="modal">

            <div className="modal-content">

                <h2>{title}</h2>

                {children}

                <button onClick={onClose}>
                    CLOSE THE MODAL
                </button>

            </div>

        </div>
    )
}

export default Modal