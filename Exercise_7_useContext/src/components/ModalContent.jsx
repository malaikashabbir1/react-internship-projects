import React, { useContext } from 'react'
import ModalContext from '../context/ModalContext'
import Modal from './Modal'
import Content from './Content'

const ModalContent = () => {

    const { isOpen, setIsOpen } = useContext(ModalContext)

    return (
        <div>

            <button onClick={() => setIsOpen(true)}>
                OPEN MODAL
            </button>

            <Modal
                onClose={() => setIsOpen(false)}
                title="Modal_Context_API"
            >
                <Content />
            </Modal>

        </div>
    )
}

export default ModalContent